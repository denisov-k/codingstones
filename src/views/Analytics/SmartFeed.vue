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
      <div class="col-xs-12 col-md-7 col-lg-8">
        <flight-chart></flight-chart>
      </div>
      <div class="col-xs-12 col-md-5 col-lg-4">
        <div class="widgets-list">
          <bar-chart></bar-chart>
          <sunburst></sunburst>
          <sunburst></sunburst>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Analytics/Classic/BarChart";

import Sunburst from "@/components/Analytics/SmartFeed/Sunburst";
import FlightChart from "@/components/Analytics/SmartFeed/Flights";

export default {
  name: "SmartFeed",
  components: {
    Sunburst,
    FlightChart,
    BarChart,
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

  .widgets-list {
    max-height: 600px;
    overflow: auto;
  }
  @media only screen and (max-width: 1024px) {
    .widgets-list {
      white-space: nowrap;

      .widget-container {
        width: 400px !important;
        height: 400px !important;
        display: inline-flex;
      }
    }
  }
</style>