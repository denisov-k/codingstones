<template>
  <div class="container-fluid" id="classic-analytic">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <bar-line-chart></bar-line-chart>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <pie-chart></pie-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6 col-sm-3">
        <filter-list></filter-list>
      </div>
      <div class="col-xs-6 col-sm-3">
        <filter-list></filter-list>
      </div>
      <div class="col-xs-6 col-sm-3">
        <filter-list></filter-list>
      </div>
      <div class="col-xs-6 col-sm-3">
        <filter-list></filter-list>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <Map></Map>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <bar-chart></bar-chart>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <tree-map-chart2></tree-map-chart2>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Analytics/Classic/BarChart";
import Map from "@/components/Analytics/Classic/Map";
import TreeMapChart2 from "@/components/Analytics/Classic/TreeMapChart2";

import BarLineChart from "@/components/Analytics/Classic/BarLineChart";
import PieChart from "@/components/Analytics/Classic/PieChart";
import FilterList from "@/components/Analytics/Classic/FilterList";

export default {
  name: "ClassicAnalytic",
  components: {
    PieChart,
    BarChart,
    Map,
    TreeMapChart2,
    BarLineChart,
    FilterList
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

<style lang="scss" scoped>
  $text-color: #737373;

  #classic-analytic {
    width: 100%;
    box-sizing: border-box;
    padding: 1%;
    background-color: #eceef0;
    background-image: url("@/assets/analytics/classic/background.png");
    background-position: center;

    .title {
      color: $text-color;
      margin: 20px 10px;
    }
    .subtitle {
      color: $text-color;
      margin: 20px 10px;
    }
  }

  .widget-container /deep/ {
    margin: 0.7rem;

    .widget {
      border: 0.125rem solid #d7d7d7;
      border-radius: 1rem;
    }
    .title {
      font-size: 1.2rem;
      color: $text-color;
      margin: 0.75rem;
    }
    .button {
      fill: $text-color;
      padding: 0.5rem;
      width: max-content;
      height: 1.15rem;
    }
  }

</style>