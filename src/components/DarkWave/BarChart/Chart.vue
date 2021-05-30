<template>
  <widget-container title="Количество ошибок" :exportURL="dataURL"
                    id="bar-chart-1" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import api from '@/services/api';
import * as echarts from "echarts";

import WidgetContainer from "@/components/Widget/Container";
import defaultOptions from "./options";

export default {
  name: "BarChart",
  components: {  WidgetContainer },
  props: {},
  data() {
    return {
      chart: Object,
      isLoading: true,
      dataURL: 'api/app2/page_2/barchart',
      watchableFields: ['region'],
      extraButtons: [
        { icon: { name: 'eraser' }, onClick: this.clearAllSelections },
        { icon: { name: 'file-image' }, onClick: this.exportImage },
      ]
    }
  },
  computed: {
    selectedFields() {
      return this.$store.state.session.filters.filter(item => this.watchableFields.includes(item.name));
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

      this.getData().then(({ xAxes, series }) => {

        this.paintChart({ xAxes, yAxes: [], series });
        this.setupEvents({ xAxes, yAxes: [], series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    setupEvents({ xAxes, series }) {
      this.chart.on('selectchanged', (params) => {
        let selectedRegions = params.selected.length ? params.selected[0].dataIndex.map(item => {
          return { name: 'region', value: xAxes[0][item], id: item } // FIXME
        }) : [];

        this.setSelectedRegions(selectedRegions)
      });
    },
    setSelectedRegions(regions) {
      this.$store.commit('setFilters', regions);
    },
    clearAllSelections() {

      let dataIndexes = this.selectedFields.map(item => item.id);

      this.chart.dispatchAction({
        type: 'unselect',
        seriesIndex: 0,
        dataIndex: dataIndexes
      })
    },
    paintChart({xAxes, yAxes, series}) {

      const options = {
        ...defaultOptions,
        yAxis: {
          type: "category",
          data: xAxes[0],
          //name: 'Регион',
          nameLocation: "middle",
          axisLabel: {
            formatter: (data) => {
              if (data.length > 40) {
                return data.slice(0, 40) + '...';
              }
              return data;
            }
          }
        },
        series: [
          {
            type: "bar",
            data: series[0],
            selectedMode: 'single',
            select: {
              itemStyle: {
                color: '#FE6F6F',
                borderWidth: 1,
                borderColor: '#f41362',
              }
            },
            tooltip: {
              show: true,
              formatter: function(item) {
                return `${item.name}: <b>${item.value.toLocaleString()}</b>`;
              }
            }
          }
        ]
      }

      this.chart.setOption(options);
    },
    repaint() {
      this.chart.resize();
    },
    getData() {
      const X_AXIS_KEY = 'region';
      const Y_AXIS_KEY = 'errors';

      return api.request(this.dataURL).then(({data}) => {
        data.sort((a, b) => parseFloat(a[Y_AXIS_KEY]) - parseFloat(b[Y_AXIS_KEY]));
        const xArray = [];
        const yArray = [];

        data.forEach((el) => {
          const formatedYData = Math.round(parseFloat(el[Y_AXIS_KEY]));
          xArray.push(el[X_AXIS_KEY]);
          yArray.push({ value: formatedYData });
        });

        return { xAxes: [xArray], series: [yArray] }
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
  created() {
    window.addEventListener("resize", this.repaint);
  },
  mounted() {
    this.chart = echarts.init(this.$refs["chartContainer"]);

    this.setupChart();
  },
  destroyed() {
    this.chart.dispose();
    window.removeEventListener("resize", this.repaint);
  }
}
</script>

<style scoped>
#bar-chart-1 {
  height: 300px;
}
.chart {
  width: -webkit-fill-available;
  height: 100%;
}
</style>
