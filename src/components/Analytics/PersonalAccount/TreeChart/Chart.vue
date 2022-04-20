<template>
  <widget-container :title="$t('title')"
                    id="tree-chart" :extra-buttons="extraButtons" :on-resize="repaint" :is-loading="isLoading">
    <organization-chart :datasource="data" :pan="true" :zoom="false" ref="chart">
      <template v-slot="{ nodeData }">
        {{ nodeData.id }}
      </template>
    </organization-chart>
  </widget-container>
</template>

<script>
import WidgetContainer from "@/components/Widget/Container";

import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'

import api from "@/services/api";

export default {
  name: "TreeChart",
  components: { WidgetContainer, OrganizationChart },
  data() {
    return {
      chart: Object,
      data: {},
      dataURL: '/data/personal_account/tree_chart/data.json',
      extraButtons: [
        { icon: require('@/assets/widget/image.svg'), onClick: this.exportImage },
      ],
      isLoading: true
    }
  },
  methods: {
    exportImage() {
      console.log(this.$refs['chart'])
    },
    getData() {
      return api.request(this.dataURL, {}, null, 'get', {baseURL: '/'}).then(({data}) => {

        return data
      })
    },
    setupChart() {
      this.isLoading = true;

      this.getData().then((data) => {

        this.data = data;

        //this.paintChart({ series });

      }).catch(e => this.catchError(e)).finally(() => this.isLoading = false);
    },
    paintChart() {


    },
    repaint() {
      //this.chart.resize();
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

.orgchart-container /deep/ {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: unset;

  .orgchart {
    background: unset;
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