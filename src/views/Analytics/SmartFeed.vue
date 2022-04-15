<template>
  <div class="analytic-screen">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-lg-8">
        <component :is="selectedWidget"></component>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="widgets-list">
          <component v-for="(widget, index) in widgets" :is="widget"
                     :key="index" @click.native="selectWidget(index)"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let Sunburst = () => import('@/components/Analytics/SmartFeed/Sunburst'),
    FlightChart = () => import('@/components/Analytics/SmartFeed/FlightChart'),
    LineRace = () => import('@/components/Analytics/SmartFeed/LineRace'),
    BubbleChart = () => import('@/components/Analytics/SmartFeed/BubbleChart');

export default {
  name: "SmartFeed",
  computed: {
    widgetsList() {
      let list = [ ...this.widgets];
      list.splice(this.selectedWidgetIndex, 1);

      return list;
    },
    selectedWidget() {
      return this.widgets[this.selectedWidgetIndex];
    }
  },
  data: () => {
    return {
      selectedWidgetIndex: 0,
      widgets: [
        Sunburst,
        LineRace,
        FlightChart,
        BubbleChart
      ]
    }
  },
  methods: {
    selectWidget(index) {
      console.log(index)
      this.selectedWidgetIndex = index;
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Active widget",
    "subtitle": "Available data"
  },
  "ru": {
    "title": "Активный виджет",
    "subtitle": "Доступные данные"
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

  .widget-container.expanded /deep/ {
    .widget {
      background-color: black;
    }
  }
  .widget-container /deep/ {
    height: 600px;

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

  .widgets-list::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .widgets-list::-webkit-scrollbar-track {
    background-color: black;
    border-radius: 25px;
  }

  .widgets-list::-webkit-scrollbar-thumb {
    background: #4e4e4e;
    border-radius: 25px;
  }

  .widgets-list /deep/ {
    max-height: 600px;
    overflow: auto;
    marquee-speed: fast;

    margin: 10px;

    .widget-container:first-child {
      margin: 0 10px 10px;
    }
    .widget-container:last-child {
      margin: 10px 10px 0;
    }
    .widget-container {
      height: 300px;
      cursor: pointer;
    }
    .widget-buttons {
      display: none;
    }
    .widget-content {
      pointer-events: none;
      zoom: 0.75;
    }
    .expanded .widget-content {
      zoom: 1;
    }
  }
  @media only screen and (max-width: 1024px) {
    .widgets-list {
      white-space: nowrap;

      .widget-container {
        width: 400px;
        height: 400px;
        display: inline-flex;
      }
      .widget-container:first-child {
        margin: 10px 10px 10px 0;
      }
      .widget-container:last-child {
        margin: 10px 0 10px 10px;
      }
    }
  }
</style>