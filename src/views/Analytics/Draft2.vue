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
import BarChart from "@/components/Analytics/Classic/BarChart";
import Map from "@/components/Analytics/Map";
import TreeMapChart2 from "@/components/Analytics/Classic/TreeMapChart2";

import LineChart from "@/components/Analytics/Classic/LineChart";
import PieChart from "@/components/Analytics/Draft2/PieChart";

export default {
  name: "Draft2",
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

<style lang="scss" scoped>
$text-color: #545454;

.analytic-screen {
  padding: 1%;
  background-color: #eceef0;
  background-image: url("@/assets/analytics/classic/background.jpg");

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
  .widget {
    background-color: unset;
    border: 1px solid #00000052;
  }
  .title {
    color: $text-color;
  }
  .button {
    fill: $text-color;
  }

  &.expanded .widget {
    background-image: url("@/assets/analytics/classic/background.jpg");
  }
}
</style>