<template>
  <widget-container :title="$t('title')" :export-u-r-l="dataURL"
                    id="tree-chart" :extra-buttons="extraButtons" :is-loading="isLoading">
    <div class="orgchart" ref="orgchart"></div>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";

import { OrgChart } from 'd3-org-chart';
import api from "@/services/api";

export default {
  name: "TreeChart",
  components: { WidgetContainer },
  data() {
    return {
      chart: null,
      dataURL: '/data/personal_account/tree_chart/data.json',
      extraButtons: [
        { icon: require('@/assets/widget/image.svg'), onClick: this.exportImage },
      ],
      isLoading: true
    }
  },
  methods: {
    exportImage() {
      this.chart.exportImg({ full:true })
    },
    getData() {
      return api.request(this.dataURL, {}, null, 'get', {baseURL: '/'}).then(({data}) => {
        return data;
      })
    },
    setupChart() {
      this.isLoading = true;

      this.chart = new OrgChart();

      this.chart.container(this.$refs.orgchart)
          .nodeContent((d, i, arr, state) => `<div class="node-content">
              <div class="avatar"></div>
              <div class="labels">${d.data.id}</div>
          </div>`)
          .nodeWidth(d => 200)
          .nodeHeight(d => 100)
          .onNodeClick(d => console.log(d + ' node clicked'))

      this.getData().then((data) => {
        this.paintChart(data);
      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart(data) {
      this.chart.data(data).render();
    },
    catchError(e) {
      console.error(e);
    }
  },
  mounted() {
    this.setupChart();
  },
  created() {

  },
  destroyed() {

  }
}
</script>

<style lang="scss" scoped>
  #tree-chart {
    height: 400px;
  }
  .orgchart /deep/ {
    display: flex;
    height: 100%;
    background: unset;

    .link {
      stroke: #da7370;
    }
    .node-foreign-object-div {
      width: 180px;

      .node-content {
        display: flex;
        background-color: #0000006e;
        padding: 10px;
        border-radius: 5px;
        height: 100%;
        box-sizing: border-box;

        .avatar {
          display: inline-flex;
          background-color: black;
          width: 30px;
          height: 30px;
          margin: auto 10px auto 0;
        }
        .labels {
          display: inline-flex;
          align-items: flex-start;
          font-size: 10px;
          justify-content: center;
          flex-direction: column;
        }
      }
    }
  }


.chart {
  width: -webkit-fill-available;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "title": "Fractional structure of error types",
    "subtitle": ""
  },
  "ru": {
    "title": "Долевая структура типов ошибок",
    "subtitle": ""
  }
}
</i18n>