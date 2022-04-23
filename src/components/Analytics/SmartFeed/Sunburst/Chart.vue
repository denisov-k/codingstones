<template>
  <widget-container :title="title" :exportURL="dataURL" v-lazy="setupChart" :export-image="exportImage"
                    id="sunburst-1" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import data from "./data";
import colors from "./colors";

export default {
  name: "Sunburst",
  components: {  WidgetContainer },
  data() {
    return {
      resizeObserver: null,
      title: this.$t('title'),
      isLoading: true,
      chart: Object,
      dataURL: 'data/piechart.json',
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
      const bgColor = '#2E2733';

      let series = [
        {
          type: 'sunburst',
          center: ['50%', '50%'],
          data: data,
          sort: function (a, b) {
            if (a.depth === 1) {
              return b.getValue() - a.getValue();
            } else {
              return a.dataIndex - b.dataIndex;
            }
          },
          label: {
            rotate: 'radial',
            color: bgColor
          },
          itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
          },
          levels: [
            {},
            {
              r0: 0,
              r: 80,
              label: {
                rotate: 0
              }
            },
            {
              r0: 80,
              r: 165
            },
            {
              r0: 175,
              r: 200,
              itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
              },
              label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
              }
            },
            {
              r0: 200,
              r: 205,
              itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
              },
              label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333'
              },
              downplay: {
                label: {
                  opacity: 0.5
                }
              }
            }
          ]
        }
      ]
      return Promise.resolve({ series });
    },
    setupChart() {
      this.isLoading = true;

      this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)

      this.getData().then(({ series }) => {

        this.paintChart({ xAxes: [], yAxes: [], series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({xAxes, yAxes, series}) {
      const options = {
        ...defaultOptions,
        color: colors,
        series: series
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
#sunburst-1 {
  height: 400px;
}
.chart {
  width: 100%;
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