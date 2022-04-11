<template>
  <div class="analytic-screen">
    <div class="row">
      <div class="col-xs-12 col-sm-6 start-sm">
        <h2 class="title">{{ $t('title') }}</h2>
      </div>
      <div class="col-xs-12 col-sm-6 end-sm">
        <h2 class="subtitle">{{ $t('subtitle') }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <line-chart></line-chart>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <Map></Map>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <pie-chart></pie-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <tree-map-chart2></tree-map-chart2>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <bar-chart></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/AnalyticalScreens/Draft1/BarChart";
import Map from "@/components/AnalyticalScreens/Map";
import TreeMapChart2 from "@/components/AnalyticalScreens/Draft1/TreeMapChart2";

import LineChart from "@/components/AnalyticalScreens/Draft1/LineChart";
import PieChart from "@/components/AnalyticalScreens/Draft1/PieChart";

export default {
  name: "Draft1",
  components: {
    PieChart,
    BarChart,
    Map,
    TreeMapChart2,
    LineChart,
  },
  data: () => {
    return {
      title: 'Пример аналитического экрана',
      subtitle: 'Ещё один заголовок'
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Title",
    "subtitle": "Subtitle"
  },
  "ru": {
    "title": "Пример аналитического экрана",
    "subtitle": "Ещё один заголовок"
  }
}
</i18n>

<style scoped>
  .analytic-screen {
    padding: 1%;
    background-color: #eceef0;
  }
  .title {
    color: #8a8a8a;
    margin: 20px 10px;
  }
  .subtitle {
    color: #8a8a8a;
    margin: 20px 10px;
  }
</style>