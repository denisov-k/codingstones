<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" v-lazy="setupChart" :export-image="exportImage"
                    id="line_race" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "LineRace",
  components: {WidgetContainer},
  data() {
    return {
      seriesType: 'bar',
      isLoading: true,
      chart: Object,
      dataURL: '/data/smart_feed/line-race-data.json',
      extraButtons: [
        {icon: require('@/assets/widget/image.svg'), onClick: this.switchType },
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
      let series = [
        {
          name: 'Rainfall',
          type: this.seriesType,
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ],
          markPoint: {
            data: [
              {type: 'max', name: 'Max'},
              {type: 'min', name: 'Min'}
            ]
          },
          markLine: {
            data: [{type: 'average', name: 'Avg'}]
          }
        },
        {
          name: 'Evaporation',
          type: this.seriesType,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ],
          markPoint: {
            data: [
              {name: 'Max', value: 182.2, xAxis: 7, yAxis: 183},
              {name: 'Min', value: 2.3, xAxis: 11, yAxis: 3}
            ]
          },
          markLine: {
            data: [{type: 'average', name: 'Avg'}]
          }
        }
      ];

      return Promise.resolve({ series });
    },
    setupChart() {
      this.isLoading = true;

      this.getData().then(({ series }) => {

        this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    switchType() {
      this.seriesType = 'line';

      this.chart.dispatchAction({
        type: 'changeMagicType',
        currentType: this.seriesType,
        newOption: {
          series: [
            { type: this.seriesType },
            { type: this.seriesType },
          ]
        },
        newTitle: null,
        featureName: 'magicType'
      })
    },
    paintChart({ series }) {
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

    this.chart.on('magictypechanged', function () {
      console.log(this, arguments)
    })

    this.resizeObserver = new ResizeObserver(this.repaint);
    this.resizeObserver.observe(this.$el)
  },
  beforeDestroy() {
    this.chart.dispose();
    this.resizeObserver.unobserve(this.$el);
  }
}
</script>

<style scoped>
#line_race {
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
    "title": "Rainfall vs Evaporation",
    "subtitle": ""
  },
  "ru": {
    "title": "Rainfall vs Evaporation",
    "subtitle": ""
  }
}
</i18n>