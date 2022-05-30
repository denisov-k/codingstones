<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" :export-image="exportImage"
                    id="line_race" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

const symbol = 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z';

import api from "@/services/api";

export default {
  name: "LineRace",
  components: {WidgetContainer},
  computed: {
    extraButtons() {
      const $t = this.$t.bind(this);
      const icon = this.seriesType === 'bar' ? require('./assets/line.svg') : require('./assets/bar.svg');

      return [
        { icon, onClick: this.switchType, title: $t('switch_type') },
      ]
    }
  },
  data() {
    return {
      isLoading: true,
      chart: Object,
      dataURL: '',
      series: null
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

      const symbolSize = () => {
        const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (!clientWidth)
          return;
        let fontSize = clientWidth / 1920;

        return 60 * fontSize;
      };

      let series = [
        {
          name: 'Rainfall',
          type: 'line',
          smooth: true,
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ],
        },
        {
          name: 'Evaporation',
          type: 'line',
          smooth: true,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        }
      ];

      return Promise.resolve({ series });
    },
    setupChart() {
      this.resizeObserver = new ResizeObserver(([$container]) => this.repaint($container));
      this.resizeObserver.observe(this.$el)

      this.getData().then(({ series }) => {

        this.series = series;

        this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    switchType() {
      this.seriesType = this.seriesType === 'bar' ? 'line' : 'bar';

      this.series[0].type = this.seriesType;
      this.series[1].type = this.seriesType;

      this.chart.setOption({ series: this.series });
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
  },
  mounted() {
    this.chart = echarts.init(this.$refs["chartContainer"]);

    this.setupChart()
  },
  beforeDestroy() {
    this.chart.dispose();
    this.resizeObserver.unobserve(this.$el);
  }
}
</script>

<style scoped>
#line_race {
  height: 20vh;
}

.chart {
  width: 100%;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Rainfall vs Evaporation",
    "subtitle": "",
    "switch_type": "Switch view type"
  },
  "ru": {
    "title": "Rainfall vs Evaporation",
    "subtitle": "",
    "switch_type": "Изменить тип отображения"
  }
}
</i18n>