<template>
  <widget-container :title="$t('title')" :export-image="exportImage"
                    id="barchart" :extra-buttons="extraButtons" :is-loading="isLoading">
    <Observer @on-change="onChange" style="height: 100%;">
      <div class="chart" ref="chartContainer"></div>
    </Observer>
  </widget-container>
</template>

<script>
import Observer from 'vue-intersection-observer'
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "BarChart",
  components: {  WidgetContainer, Observer },
  data() {
    return {
      resizeObserver: null,
      isLoading: true,
      chart: Object,
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
      let seriesList = [
        {
          name: 'Profit',
          type: 'bar',
          label: {
            show: true,
            position: 'inside',
            color: '#838383',
            fontWeight: 600,
            textBorderColor: 'black',
            textBorderWidth: 2
          },
          emphasis: {
            focus: 'series'
          },
          data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
          name: 'Income',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            color: '#838383',
            fontWeight: 600,
            textBorderColor: 'black',
            textBorderWidth: 2
          },
          emphasis: {
            focus: 'series'
          },
          data: [320, 302, 341, 374, 390, 450, 420]
        },
        {
          name: 'Expenses',
          type: 'bar',
          stack: 'Total',
          label: {
            show: true,
            position: 'left',
            color: '#838383',
            fontWeight: 600,
            textBorderColor: 'black',
            textBorderWidth: 2
          },
          emphasis: {
            focus: 'series'
          },
          data: [-120, -132, -101, -134, -190, -230, -210]
        }
      ]

      return Promise.resolve({ series: seriesList });

    },
    setupChart() {
      this.isLoading = true;

      /*this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)*/

      this.getData().then(({ series }) => {

        this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({ series, dataset }) {
      const options = {
        ...defaultOptions,
        series
      }

      this.chart.setOption(options);
    },
    repaint([$container]) {
      if ($container.contentRect.width > 0 && $container.contentRect.height > 0)
        this.chart.resize();
    },
    onChange(entry, unobserve) {
      if (entry.isIntersecting) {
        this.setupChart()
        unobserve()
      }
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

    /*if (this.resizeObserver)
      this.resizeObserver.unobserve(this.$el);*/
  }
}
</script>

<style scoped>
#barchart {

}
.chart {
  width: 100%;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Income of Germany and France since 1950",
    "subtitle": ""
  },
  "ru": {
    "title": "Доход Германии и Франции с 1950 г.",
    "subtitle": ""
  }
}
</i18n>