<template>
  <widget-container :title="$t('title')" :export-image="exportImage"
                    id="bar-chart" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "BarChart",
  components: {WidgetContainer},
  data() {
    return {
      isLoading: true,
      chart: Object,
      extraButtons: [

      ]
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
      return Promise.resolve();
    },
    setupChart() {
      this.isLoading = true;

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
#bar-chart {
  height: 400px;
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