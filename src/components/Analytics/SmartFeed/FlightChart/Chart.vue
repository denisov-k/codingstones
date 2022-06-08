<template>
  <widget-container :title="$t('title')" :exportURL="dataURL" :export-image="exportImage"
                    id="flights" :extra-buttons="extraButtons" :is-loading="isLoading">
    <Observer @on-change="onChange" style="height: 100%">
      <div class="chart" ref="chartContainer"></div>
    </Observer>
  </widget-container>
</template>

<script>
import Observer from 'vue-intersection-observer';
import * as echarts from "echarts";
import 'echarts-gl';

import WidgetContainer from "@/components/Widget/Container";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "BarChart",
  components: {  WidgetContainer, Observer },
  props: {},
  data() {
    return {
      chart: Object,
      resizeObserver: null,
      isLoading: true,
      dataURL: '/data/smart_feed/flights/data.json',
      watchableFields: ['region'],
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
    setupChart() {
      this.isLoading = true;

      this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)

      this.getData().then(({ series, legend }) => {

        this.paintChart({ series, legend });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({ series, legend }) {

      const options = {
        ...defaultOptions,
        series,
        legend: {
          selectedMode: 'single',
          left: 10,
          bottom: 10,
          data: legend,
          orient: 'vertical',
          textStyle: {
            color: '#fff'
          }
        },
      }

      this.chart.setOption(options);
    },
    repaint([$container]) {
      // console.log(container, this);
      if ($container.contentRect.width > 0 && $container.contentRect.height > 0)
        this.chart.resize();
    },
    onChange(entry, unobserve) {
      if (entry.isIntersecting) {
        this.setupChart()
        unobserve()
      }
    },
    getData() {
      return api.request(this.dataURL, {}, null, 'get', { baseURL: '/' })
          .then(({data}) => {

        let airports = data.airports.map(function (item) {
          return { coord: [item[3], item[4]] }
        });
        function getAirportCoord(idx) {
          return [data.airports[idx][3], data.airports[idx][4]];
        }
        // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
        let routesGroupByAirline = {};
        data.routes.forEach(function (route) {
          let airline = data.airlines[route[0]];
          let airlineName = airline[0];
          if (!routesGroupByAirline[airlineName]) {
            routesGroupByAirline[airlineName] = [];
          }
          routesGroupByAirline[airlineName].push(route);
        });
        let pointsData = [];
        data.routes.forEach(function (airline) {
          pointsData.push(getAirportCoord(airline[1]));
          pointsData.push(getAirportCoord(airline[2]));
        });
        let series = data.airlines
            .map(function (airline) {
              var airlineName = airline[0];
              var routes = routesGroupByAirline[airlineName];
              if (!routes) {
                return null;
              }
              return {
                type: 'lines3D',
                name: airlineName,
                effect: {
                  show: true,
                  trailWidth: 2,
                  trailLength: 0.15,
                  trailOpacity: 1,
                  trailColor: 'rgb(30, 30, 60)'
                },
                lineStyle: {
                  width: 1,
                  color: 'rgb(50, 50, 150)',
                  // color: 'rgb(118, 233, 241)',
                  opacity: 0.1
                },
                blendMode: 'lighter',
                data: routes.map(function (item) {
                  return [airports[item[1]].coord, airports[item[2]].coord];
                })
              };
            })
            .filter(function (series) {
              return !!series;
            });

        let legend = Object.keys(routesGroupByAirline);

        return { series, legend }
      })
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
#flights {

}
.chart {
  width: 100%;
  height: 100%;
}
</style>
<i18n>
{
  "en": {
    "title": "Routes by air companies",
    "subtitle": ""
  },
  "ru": {
    "title": "Маршруты авиакомпаний",
    "subtitle": ""
  }
}
</i18n>