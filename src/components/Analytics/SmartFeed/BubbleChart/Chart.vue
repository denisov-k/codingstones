<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" v-lazy="setupChart" :export-image="exportImage"
                    id="bubble_chart" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "BubbleChart",
  components: {  WidgetContainer },
  data() {
    return {
      resizeObserver: null,
      isLoading: true,
      chart: Object,
      dataURL: 'data/smart_feed/bubble-chart-data.json',
      extraButtons: [
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
    getData() {
      return api.request(this.dataURL, {}, null, 'get', { baseURL: '/' })
        .then(({data}) => {

          let seriesList = [
            {
              name: '1990',
              data: data[0],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
              },
              emphasis: {
                focus: 'series',
                label: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                  }
                ])
              }
            },
            {
              name: '2015',
              data: data[1],
              type: 'scatter',
              symbolSize: function (data) {
                return Math.sqrt(data[2]) / 5e2;
              },
              emphasis: {
                focus: 'series',
                label: {
                  show: true,
                  formatter: function (param) {
                    return param.data[3];
                  },
                  position: 'top'
                }
              },
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                  {
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                  }
                ])
              }
            }
          ]

          return { series: seriesList }
      })
    },
    setupChart() {
      this.isLoading = true;

      this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)

      this.getData().then(({ series }) => {

        this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({ series, dataset }) {
      const options = {
        ...defaultOptions,
        series,
        legend: {
          right: '20px',
          top: '3%',
          data: ['1990', '2015'],
          textStyle: {
            color: '#dadada'
          }
        },
      }

      this.chart.setOption(options);
    },
    repaint([$container]) {
      if ($container.contentRect.width > 0 && $container.contentRect.height > 0)
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
  },
  beforeDestroy() {
    this.chart.dispose();

    if (this.resizeObserver)
      this.resizeObserver.unobserve(this.$el);
  }
}
</script>

<style scoped>
#bubble_chart {

}
.chart {
  width: 100%;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Life Expectancy and GDP by Country",
    "subtitle": ""
  },
  "ru": {
    "title": "Ожидаемая продолжительность жизни и ВВП по странам",
    "subtitle": ""
  }
}
</i18n>