<template>
  <k-p-i :title="$t('title', { value: value })" :subtitle="$t('subtitle')">
    <template v-slot:icon>
      <inline-svg :src="require('../KPI1/icon.svg')" />
    </template>
    <template v-slot:progress>
      <div class="chart" ref="chartContainer"></div>
    </template>
  </k-p-i>
</template>

<script>
import KPI from "../KPI";

import * as echarts from "echarts";
import defaultOptions from "./options";

export default {
  name: "KPI3",
  components: {
    KPI
  },
  data: function () {
    return {
      chart: null,
      value: 27601
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs["chartContainer"]);

    this.setupChart()
  },
  methods: {
    bounceIn: function (k) {
      return 1 - this.bounceOut(1 - k);
    },
    bounceOut: function (k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },
    bounceInOut: function (k) {
      if (k < 0.5) {
        return this.bounceIn(k * 2) * 0.5;
      }
      return this.bounceOut(k * 2 - 1) * 0.5 + 0.5;
    },
    getData() {
      const N_POINT = 30;
      const data = [];

      for (let i = 0; i <= N_POINT; i++) {
        let x = i / N_POINT;
        let y = this.bounceInOut(x);
        data.push([x, y]);
      }

      const series = [{
        type: 'line',
        data: data,
        showSymbol: false,
        animationEasing: 'bounceInOut',
        animationDuration: 1000
      }];

      return Promise.resolve({ series });
    },
    setupChart() {
      this.resizeObserver = new ResizeObserver(([$container]) => this.repaint($container));
      this.resizeObserver.observe(this.$el)

      this.getData().then(({ series }) => {

        this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({ series }) {

      const options = {
        ...defaultOptions,
        series
      }

      this.chart.setOption(options);
    },
    repaint($container) {
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
  }
}
</script>

<style scoped>
  .kpi {
    background-color: #c6af54;
  }
  .chart {
    width: 100%;
    height: 100%;
  }
</style>

<i18n>
{
  "en": {
    "title": "${value}",
    "subtitle": "Daily income"
  },
  "ru": {
    "title": "${value}",
    "subtitle": "Дневная выручка"
  }
}
</i18n>