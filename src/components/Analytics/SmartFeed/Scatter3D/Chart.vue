<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" v-lazy="setupChart" :export-image="exportImage"
                    id="line_race" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer" ></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "Scatter3D",
  components: {  WidgetContainer },
  data() {
    return {
      resizeObserver: null,
      isLoading: true,
      chart: Object,
      dataURL: '/data/smart_feed/scatter-3d-data.json',
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

          const dataset = {
            dimensions: [
              'Income',
              'Life Expectancy',
              'Population',
              'Country',
              { name: 'Year', type: 'ordinal' }
            ],
            source: data
          };

          return { dataset }
      })
    },
    setupChart() {
      this.isLoading = true;

      this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)

      this.getData().then(({ dataset }) => {

        this.paintChart({ dataset });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({ dataset }) {
      const options = {
        ...defaultOptions,
        dataset
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
#line_race {

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