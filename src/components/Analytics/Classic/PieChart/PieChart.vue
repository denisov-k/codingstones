<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" :export-image="exportImage"
                    id="pie-chart-1" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "PieChart",
  components: {WidgetContainer},
  data() {
    return {
      isLoading: true,
      chart: Object,
      dataURL: 'data/classic/piechart.json',
      // dataURL: 'api/app2/page_2/pie_2',
      extraButtons: []
    }
  },
  methods: {
    exportImage() {
      let a = document.createElement("a"),
          image = this.chart.getDataURL({pixelRatio: 2, backgroundColor: '#fff'});

      a.href = image;
      a.download = "Image.png";
      a.click();
    },
    getData() {

      return api.request(this.dataURL, {}, null, 'get', {baseURL: '/'}).then(({data}) => {

        let seriesData = data.map(({type, total}) => {
          return {
            name: type,
            value: total
          }
        });

        return {series: [seriesData]}
      })
    },
    setupChart() {
      this.isLoading = true;

      this.getData().then(({series}) => {

        this.paintChart({xAxes: [], yAxes: [], series});

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({xAxes, yAxes, series}) {

      const options = {
        ...defaultOptions,
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['25%', '50%'],
            label: {
              fontSize: '1rem'
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: 'rgba(255,255,255,1)',
              borderWidth: 2,

            },
            data: [
              {value: 1048, name: 'Search Engine'},
              {value: 735, name: 'Direct'},
              {value: 580, name: 'Email'},
              {value: 484, name: 'Union Ads'},
              {value: 300, name: 'Video Ads'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      this.chart.setOption(options);
    },
    repaint() {
      this.chart.resize();
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
#pie-chart-1 {
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
    "title": "Fractional structure of error types",
    "subtitle": ""
  },
  "ru": {
    "title": "Долевая структура типов ошибок",
    "subtitle": ""
  }
}
</i18n>