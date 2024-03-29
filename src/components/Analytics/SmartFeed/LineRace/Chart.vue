<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" :export-image="exportImage"
                    id="line_race" :extra-buttons="extraButtons" :is-loading="isLoading">
    <Observer @on-change="onChange" style="height: 100%">
      <div class="chart" ref="chartContainer"></div>
    </Observer>
  </widget-container>
</template>

<script>
import Observer from 'vue-intersection-observer';
import WidgetContainer from "@/components/Widget/Container";
import * as echarts from "echarts";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "LineRace",
  components: {  WidgetContainer, Observer },
  data() {
    return {
      isLoading: true,
      chart: Object,
      dataURL: '/data/smart_feed/line-race-data.json',
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
      const countries = [
        'Finland',
        'France',
        'Germany',
        'Iceland',
        'Norway',
        'Poland',
        'Russia',
        'United Kingdom'
      ];
      const datasetWithFilters = [];
      const seriesList = [];
      echarts.util.each(countries, function (country) {
        let datasetId = 'dataset_' + country;

        datasetWithFilters.push({
          id: datasetId,
          fromDatasetId: 'dataset_raw',
          transform: {
            type: 'filter',
            config: {
              and: [
                { dimension: 'Year', gte: 1950 },
                { dimension: 'Country', '=': country }
              ]
            }
          }
        });
        seriesList.push({
          type: 'line',
          datasetId: datasetId,
          showSymbol: false,
          name: country,
          endLabel: {
            show: false,
            formatter: function (params) {
              return params.value[3] + ': ' + params.value[0];
            }
          },
          labelLayout: {
            moveOverlap: 'shiftY'
          },
          emphasis: {
            focus: 'series'
          },
          encode: {
            x: 'Year',
            y: 'Income',
            label: ['Country', 'Income'],
            itemName: 'Year',
            tooltip: ['Income']
          },
          lineStyle: {
            width: 0
          },
          areaStyle: {
            opacity: 0.8,
          },
        });
      });

      return api.request(this.dataURL, {}, null, 'get', { baseURL: '/' })
        .then(({data}) => {

          const dataset = [
            {
              id: 'dataset_raw',
              source: data
            },
            ...datasetWithFilters
          ];

          return { series: seriesList, dataset }
      })
    },
    setupChart() {
      this.isLoading = true;

      this.getData().then(({ series, dataset }) => {

        this.paintChart({ series, dataset });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    onChange(entry, unobserve) {
      if (entry.isIntersecting) {
        this.setupChart()
        unobserve()
      }
    },
    paintChart({ series, dataset }) {
      const options = {
        ...defaultOptions,
        dataset,
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