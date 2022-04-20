<template>
  <widget-container :title="$t('title')" v-lazy="setupChart"
                    id="radar_chart" :extra-buttons="extraButtons" :is-loading="isLoading">
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
      return Promise.resolve();
    },
    setupChart() {
      this.isLoading = true;

      this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)

      this.getData().then(() => {

        this.paintChart();

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart() {
      const options = {
        ...defaultOptions,
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
#radar_chart {
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
    "title": "Radar chart",
    "subtitle": ""
  },
  "ru": {
    "title": "Радар",
    "subtitle": ""
  }
}
</i18n>