<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" v-lazy="setupChart"
                    id="sankey-chart" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "SankeyChart",
  components: {  WidgetContainer },
  data() {
    return {
      isLoading: true,
      chart: Object,
      dataURL: '/data/smart_feed/sankey-chart-data.json',
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
      return api.request(this.dataURL, {}, null, 'get', { baseURL: '/' })
        .then(({data}) => {

          let seriesList = [
            {
              type: 'sankey',
              data: data.nodes,
              links: data.links,
              label: {
                color: '#838383',
                fontWeight: 600,
                textBorderColor: 'black',
                textBorderWidth: 2
              },
              emphasis: {
                focus: 'adjacency'
              },
              levels: [
                {
                  depth: 0,
                  itemStyle: {
                    color: '#fbb4ae'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 1,
                  itemStyle: {
                    color: '#b3cde3'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 2,
                  itemStyle: {
                    color: '#ccebc5'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                },
                {
                  depth: 3,
                  itemStyle: {
                    color: '#decbe4'
                  },
                  lineStyle: {
                    color: 'source',
                    opacity: 0.6
                  }
                }
              ],
              lineStyle: {
                curveness: 0.5
              }
            }
          ];

          return { series: seriesList }
      })
    },
    setupChart() {
      this.isLoading = true;

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
#sankey-chart {

}
.chart {
  width: 100%;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Sankey Chart",
    "subtitle": ""
  },
  "ru": {
    "title": "Потоковая диаграмма",
    "subtitle": ""
  }
}
</i18n>