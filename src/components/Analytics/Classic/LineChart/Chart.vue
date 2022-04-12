<template>
  <widget-container :title="$t('title')" :exportURL="dataURL"
                    id="chart-1" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import * as echarts from "echarts";

import defaultOptions from './options';
import WidgetContainer from "@/components/Widget/Container";

import api from "@/services/api";

export default {
  name: "LineChart",
  components: { WidgetContainer },
  data() {
    return {
      isLoading: true,
      chart: Object,
      data: null,
      dataURL: '/data/linechart.json',
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
    repaint() {
      this.chart.resize();
    },
    parseData(data) {
      let dataByRegions = [],
          dates = [];

      data.forEach((col, index) => {

        let entity = col[1].qText,
            entityID = col[1].qElemNumber,
            month = col[0].qText,
            monthID = col[0].qNum,
            value = col[2].qNum;

        if (!dataByRegions[entityID])
          dataByRegions[entityID] = { name: entity, values: [] };

        dataByRegions[entityID].values[monthID] = value;

        dates[monthID] = month;

      })

      return { rowsData: Object.entries(dataByRegions), columnsData: dates.filter(Object) }
    },
    getData() {

      return api.request(this.dataURL, {}, null, 'get', { baseURL: '/' }).then(({data}) => {

        const { rowsData, columnsData } = this.parseData(data);

        let series = rowsData.map(item => {

          return {
            name: item[1].name,
            type: "line",
            smooth: false,
            connectNulls: false,
            data: item[1].values.filter(Object)
          }
        })

        return { xAxesData: [columnsData], series: series }

      })
    },
    setupChart() {

      this.isLoading = true;

      this.getData().then(({ xAxesData, series }) => {

        this.paintChart({ xAxes: xAxesData, series: series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);

    },
    paintChart({xAxes, yAxes, series}) {

      const options = {
        ...defaultOptions,
        series,
        xAxis: [{
          type: "category",
          data: xAxes[0],
          nameTextStyle: {
            padding: [0, 0, 40, 0],
          },
          axisLabel: {
            formatter: (data) => {
              if (data.length > 40) {
                return data.slice(0, 40) + '...';
              }
              return data;
            }
          }
        }]
      }

      this.chart.setOption(options);
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
#chart-1 {
  height: 400px;
}
#chart-1 .widget-content {
  padding: 8px;
}
.chart {
  width: -webkit-fill-available;
  height: 100%;
}
.chart >>> .tooltip {
  max-width:400px;
}
.chart >>> .tooltip > div {
  display: flex;
  justify-content: space-between;
}
.chart >>> .tooltip > div > span:nth-of-type(2) {
  margin-left: 50px;
}
</style>

<i18n>
{
  "en": {
    "title": "Dynamics of changes in the number of errors by type",
    "subtitle": ""
  },
  "ru": {
    "title": "Динамика изменения количества ошибок по типам",
    "subtitle": ""
  }
}
</i18n>