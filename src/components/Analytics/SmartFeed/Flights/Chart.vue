<template>
  <widget-container :title="$t('title')" :exportURL="dataURL"
                    id="bar-chart-1" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import * as echarts from "echarts";
import 'echarts-gl';

import WidgetContainer from "@/components/Widget/Container";
import defaultOptions from "./options";

import api from "@/services/api";

export default {
  name: "BarChart",
  components: {  WidgetContainer },
  props: {},
  data() {
    return {
      chart: Object,
      isLoading: true,
      dataURL: '/data/draft2/flights/data.json',
      watchableFields: ['region'],
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
    setupChart() {
      this.isLoading = true;

      this.getData().then(({ series }) => {

        this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({xAxes, yAxes, series}) {

      const options = {
        ...defaultOptions,
        series
      }

      this.chart.setOption(options);
    },
    repaint() {
      this.chart.resize();
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

        return { series }
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
#bar-chart-1 {
  height: 600px;
}
.chart {
  width: -webkit-fill-available;
  height: 100%;
}
</style>
<i18n>
{
  "en": {
    "title": "Errors count",
    "subtitle": ""
  },
  "ru": {
    "title": "Количество ошибок",
    "subtitle": ""
  }
}
</i18n>