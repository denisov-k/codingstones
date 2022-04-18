<template>
  <widget-container :title="$t('title')" v-lazy="setupChart"
                    id="kpi-1" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import data from "./data";

export default {
  name: "Gauge",
  components: {  WidgetContainer },
  data() {
    return {
      resizeObserver: null,
      isLoading: true,
      chart: Object,
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
    getData() {
      let series =  [
        {
          type: 'gauge',
          color: ['#538f2a', '#00aac0', '#c26d27'],
          radius: '90%',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 0,
              borderColor: '#464646',
            }
          },
          axisLine: {
            lineStyle: {
              width: 40,
              color: [[1, 'rgba(0,0,0,0.49)']],
            }
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: data,
          title: {
            fontSize: 12,
            color: '#6e6e6e'
          },
          detail: {
            width: 50,
            height: 14,
            fontSize: 12,
            color: 'inherit',
            borderColor: 'inherit',
            borderRadius: 20,
            borderWidth: 1,
            formatter: '{value}%'
          }
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
#kpi-1 {

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