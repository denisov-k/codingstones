<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" :export-image="exportImage"
                    id="tree-chart-1" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import * as echarts from "echarts";

import WidgetContainer from "@/components/Widget/Container";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "TreeChart",
  components: {WidgetContainer},
  computed: {
    selectedRegions() {
      return this.$store.state.session.filters.filter(item => this.watchableFields.includes(item.name)).map(item => item.value);
    }
  },
  watch: {
    selectedRegions() {
      this.setupChart();
    }
  },
  data() {
    return {
      chart: Object,
      isLoading: false,
      dataURL: 'data/classic/tiles_2.json',
      // dataURL: 'api/app2/page_2/tiles_2',
      data: [],
      watchableFields: ['region'],

      extraButtons: []
    }
  },
  methods: {
    exportImage() {
      let a = document.createElement("a");

      a.href = this.chart.getDataURL({pixelRatio: 2, backgroundColor: '#fff'});
      a.download = "Image.png";
      a.click();
    },
    setupChart() {
      this.chart.clear();

      this.isLoading = true;

      this.getData().then(({series}) => {

        this.paintChart({xAxes: [], yAxes: [], series: [series]});

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    repaint() {
      this.chart.resize();
    },
    getData() {

      let dataReq = this.data.length ? Promise.resolve({data: this.data}) :
          api.request(this.dataURL, {}, null, 'get', {baseURL: '/'});

      return dataReq.then(({data}) => {

        this.data = data;

        if (this.selectedRegions.length)
          data = data.filter(item => this.selectedRegions.includes(item.region));

        const rtnData = [];

        const names = data.map(el => el.part);
        const uniqueNames = [...new Set(names)];
        uniqueNames.forEach(el => rtnData.push({name: el, value: 0, children: []}));
        data.forEach(el => {
          const foundInd = rtnData.findIndex(root => root.name === el.part);
          rtnData[foundInd].children.push({name: el.err, value: el.total});
          rtnData[foundInd].value += el.total;
        });

        return {series: rtnData};
      })
    },
    paintChart({xAxes, yAxes, series}) {

     /* if (!this.selectedRegions.length)
        return this.catchError('Выберите элемент на графике "Количество ошибок"')*/

      const options = {
        ...defaultOptions,
        series: [{
          type: 'treemap',
          data: series[0],
          name: 'Структура',
          visibleMin: 10000,
          left: 20,
          right: 20,
          top: 10,
          bottom: 40,
          label: {
            show: true,


            formatter: function (params) {
              let arr = [
                '{name|' + params.name + '}\n\n',
                '{value|' + params.value.toLocaleString() + '}'
              ];

              return arr.join('\n');
            },
            rich: {
              value: {
                align: 'center',
                color: '#fff',
                fontSize: 13,
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: [2, 4],
                borderRadius: 2,
              },
              name: {
                align: 'center',
                fontSize: 12,
                color: '#fff'
              }
            }
          },
          upperLabel: {
            show: true,
            height: 30,
            padding: [0, 0, 0, 5],
            color: 'white',
            formatter: function (params) {
              return `${params.name} (${params.data.children.length})`
            }
          },
          levels: [
            {
              upperLabel: {
                show: false
              }
            },
            {
              itemStyle: {
                borderColor: '#666',
                borderWidth: 5,
                gapWidth: 1
              },
              emphasis: {
                itemStyle: {
                  borderColor: '#777'
                }
              }
            }
          ],
          breadcrumb: {show: true, bottom: 10, top: 'auto'}
        }]
      }

      this.chart.setOption(options);
    },
    catchError(e) {
      this.chart.clear();

      this.chart.setOption({
        title: {
          show: true,
          textStyle: {
            color: 'grey',
            fontSize: 20
          },
          text: `${e}`,
          left: 'center',
          top: 'center'
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        series: []
      })
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs["chartContainer"]);

    this.setupChart();
  },
  created() {
    window.addEventListener("resize", this.repaint);
  },
  destroyed() {
    this.chart.dispose();
    window.removeEventListener("resize", this.repaint);
  }
}
</script>

<style scoped>
#tree-chart-1 {
  height: 55vh;
}

.chart {
  width: -webkit-fill-available;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Fractional structure of errors in the fields",
    "subtitle": ""
  },
  "ru": {
    "title": "Долевая структура ошибок в полях",
    "subtitle": ""
  }
}
</i18n>
