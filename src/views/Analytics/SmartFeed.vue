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
      <div class="col-xs-8">
        <flight-chart></flight-chart>
      </div>
      <div class="col-xs-4">
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
import FlightChart from "@/components/Analytics/SmartFeed/Flights";

export default {
  name: "SmartFeed",
  components: {
    FlightChart,
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
  $text-color: #dadada;

  .analytic-screen {
    padding: 1%;
    background-color: #eceef0;
    background-image: url("@/assets/analytics/smart_feed/background_2.jpg");
    background-size: cover;
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
    .widget {
      background-color: #0000008c;
    }

    .title {
      color: $text-color;
    }
    .button {
      fill: $text-color;
    }
  }
</style>