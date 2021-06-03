<template>
  <widget-container title="Долевая структура типов ошибок" :exportURL="dataURL"
                    id="pie-chart-1" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <div class="chart" ref="chartContainer"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";
import ServiceTransport from "@/services/ServiceTransport";
import * as echarts from "echarts";
import defaultOptions from "./options";

const api = new ServiceTransport({ withCredentials: true });

export default {
  name: "PieChart",
  components: {  WidgetContainer },
  data() {
    return {
      isLoading: true,
      chart: Object,
      dataURL: 'data/piechart.json',
      // dataURL: 'api/app2/page_2/pie_2',
      extraButtons: [{ icon: { name: 'file-image' }, onClick: this.exportImage }]
    }
  },
  mounted() {

    this.chart = echarts.init(this.$refs["chartContainer"]);

    this.setupChart();

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

      return api.request(this.dataURL).then(({data}) => {

        let seriesData = data.map(({type, total}) => {
          return {
            name: type,
            value: total
          }
        });

        return { series: [seriesData] }
      })
    },
    setupChart() {
      this.isLoading = true;

      this.getData().then(({ series }) => {

        this.paintChart({ xAxes: [], yAxes: [], series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart({xAxes, yAxes, series}) {

      const options = {
        ...defaultOptions,
        series: [
          {
            type: "pie",
            tooltip: {
              show: true,
              formatter: function(item) {
                return `${item.marker}${item.name}: ${item.value.toLocaleString()}\nДоля: ${item.percent}%`;
              }
            },
            data: series[0],
            center: ['50%', '50%'],
            minShowLabelAngle: 1,
            label: {
              bleedMargin: 5,
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
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
  destroyed() {
    this.chart.dispose();
    window.removeEventListener("resize", this.repaint);
  }
}
</script>

<style scoped>
#pie-chart-1 {
  height: 400px;
}
.chart {
  width: -webkit-fill-available;
  height: 100%;
}
</style>
