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
    const $t = this.$t.bind(this);

    return {
      chart: null,
      dataURL: '/data/personal_account/tree_chart/data.json',
      extraButtons: [
        { icon: require('./assets/collapse.svg'), onClick: this.collapseAll, title: $t('collapse_all') },
        { icon: require('./assets/fit.svg'), onClick: this.fit, title: $t('fit') },
        { icon: require('@/assets/widget/image.svg'), onClick: this.exportImage, title: $t('export_image') },
      ],
      isLoading: true,
      resizeObserver: null,
    }
  },
  methods: {
    collapseAll() {
      this.chart.collapseAll().fit()
    },
    exportImage() {
      this.chart.exportSvg()
    },
    fit() {
      this.chart.fit()
    },
    getData() {
      return api.request(this.dataURL, {}, null, 'get', {baseURL: '/'}).then(({data}) => {
        return data;
      })
    },
    setupChart() {
      this.isLoading = true;

      this.resizeObserver = new ResizeObserver(this.repaint);
      this.resizeObserver.observe(this.$el)

      this.chart = new OrgChart();

      this.chart.container(this.$refs.orgchart)
          .nodeContent((d, i, arr, state) => `
            <div class="node-content">
              <img class="avatar" src="${d.data.imageUrl}"></img>
              <div class="labels">
                <span class="name">${d.data.name}</span>
                <span class="position-name">${d.data.positionName}</span>
              </div>
          </div>`)
          .buttonContent(({ node, state }) => `
            <div class="button">
              <div class="icon ${ node.children ? 'expanded' : '' }"></div>
              <span class="child-count">${node.data._directSubordinates}</span>
            </div>`)
          .nodeWidth(d => 200)
          .nodeHeight(d => 75)
          .onNodeClick(d => console.log(d + ' node clicked'))

      this.getData().then((data) => {
        this.paintChart(data);
      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart(data) {
      this.chart.data(data).svgHeight(this.$refs.orgchart.clientHeight).render();
    },
    repaint() {
      this.chart.svgHeight(this.$refs.orgchart.clientHeight).render();
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

  },
  beforeDestroy() {
    if (this.resizeObserver)
      this.resizeObserver.unobserve(this.$el);
  }
}
</script>

<style lang="scss" scoped>
  #tree-chart {
    height: 400px;
  }
  .orgchart /deep/ {
    display: flex;
    width: 100%;
    height: 100%;
    background: unset;

    /*.svg-chart-container {
      width: 100%;
      height: 100%;
    }*/

    .link {
      stroke: #da7370;
    }
    .button {
      display: flex;
      color: #545454;
      border-radius: 5px;
      padding: 3px;
      font-size: 10px;
      margin: auto auto;
      background-color: #f1e1bd;
      border: 1px solid #545454;

      .icon {
        mask: url("assets/arrow.svg") no-repeat 50% 50%;
        transform: rotate(-180deg);
        /*background-image: url("./arrow.svg");*/
        background-color: #545454;
        width: 8px;
        height: 8px;
        display: inline-flex;
        background-size: contain;
        background-repeat: no-repeat;
        margin: auto 0;
      }
      .icon.expanded {
        transform: rotate(0deg);
      }
      .child-count {
        margin-left: 3px;
      }
    }
    .node-foreign-object-div {
      width: 180px;

      .node-content {
        display: flex;
        /* background-color: #0000004f; */
        padding: 10px;
        border-radius: 5px;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #545454;

        .avatar {
          display: inline-flex;
          background-color: black;
          width: 40px;
          height: 40px;
          margin: auto 10px auto 0;
          border-radius: 20px;
        }
        .labels {
          display: inline-flex;
          align-items: flex-start;
          font-size: 10px;
          justify-content: center;
          flex-direction: column;
          color: #545454;

          .name {
            font-weight: 600;
          }
          .position-name {

          }
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
    "title": "Tree",
    "export_image": "Export image",
    "collapse_all": "Collapse all",
    "fit": "Fit"
  },
  "ru": {
    "title": "Дерево",
    "export_image": "Экспортировать изображение",
    "collapse_all": "Схлопнуть все",
    "fit": "Fit"
  }
}
</i18n>