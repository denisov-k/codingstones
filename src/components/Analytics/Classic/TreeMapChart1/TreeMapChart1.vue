<template>
  <widget-container title="Долевая структура ошибок в полях" :exportURL="dataURL" :extra-buttons="extraButtons"
                    id="tree-chart-1" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import * as echarts from "echarts";
import WidgetContainer from "@/components/Widget/Container";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "TreeMapChart1",
  components: {  WidgetContainer },
  data() {
    return {
      chart: Object,
      isLoading: true,
      dataURL: 'data/tiles_1.json',
      // dataURL: 'api/app2/page_2/tiles_1',
      extraButtons: [
        { icon: require('@/assets/widget/image.svg'), onClick: this.exportImage },
      ]
    }
  },
  methods: {
    exportImage() {
      let a = document.createElement("a"),
          image = this.chart.getDataURL({ pixelRatio: 2, backgroundColor: '#fff' });

      a.href = image;
      a.download = "Image.png";
      a.click();
    },
    setupChart() {
      this.isLoading = true;

      this.getData().then(({ xAxisData, series }) => {

        this.paintChart({ xAxes: [], yAxes: [xAxisData], series: [series] });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    repaint() {
      this.chart.resize();
    },
    getData() {
      return api.request(this.dataURL, {}, null, 'get', { baseURL: '/' }).then(({data}) => {
        const rtnData = [];

        const names = data.map(el => el.part);

        const uniqueNames = [...new Set(names)];

        uniqueNames.forEach(el => rtnData.push({name: el, value: 0, children: []}));

        data.forEach(el => {
          const foundInd = rtnData.findIndex(root => root.name === el.part);

          rtnData[foundInd].children.push({name: el.err, value: el.total});
          rtnData[foundInd].value += el.total;
        });

        return { series: rtnData };
      })
    },
    paintChart({xAxes, yAxes, series}) {

      const options = {
        ...defaultOptions,
        series: [{
          type: 'treemap',
          data: series[0],
          name: 'Структура',
          left: 20,
          right: 20,
          top: 10,
          bottom: 40,
          label: {
            show: true,
            overflow: 'break',

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
                fontSize: 12,
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
          breadcrumb: { show: true, bottom: 10, top: 'auto' }
        }]
      }

      this.chart.setOption(options);
    },
    catchError(e) {
      this.chart.setOption({
        title: {
          show: true,
          textStyle: {
            color: 'grey',
            fontSize: 20
          },
          text: `Ошибка ${e}`,
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

      console.error(e);
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
  height: 400px;
}
.chart {
  width: -webkit-fill-available;
  height: 100%;
}
</style>