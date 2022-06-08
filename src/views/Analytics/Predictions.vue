<template>
  <div class="container-fluid" id="predictions">
    <div class="row">
      <div class="col-xs-4">
        <k-p-i1></k-p-i1>
      </div>
      <div class="col-xs-4">
        <k-p-i2></k-p-i2>
      </div>
      <div class="col-xs-4">
        <k-p-i3></k-p-i3>
      </div>
    </div>
    <div class="row" style="flex: auto;">
      <div class="col-xs-12">
        <chart1></chart1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <chart2></chart2>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <chart3></chart3>
      </div>
    </div>
  </div>
</template>

<script>
import Chart1 from "@/components/Analytics/Predictions/Chart1";
import Chart2 from "@/components/Analytics/Predictions/Chart2";
import Chart3 from "@/components/Analytics/Predictions/Chart3";

import KPI1 from "@/components/Analytics/Predictions/KPI1";
import KPI2 from "@/components/Analytics/Predictions/KPI2";
import KPI3 from "@/components/Analytics/Predictions/KPI3";

export default {
  name: "Predictions",
  components: {
    Chart1, Chart2, Chart3,
    KPI1, KPI2, KPI3
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
  $text-color: #b8b8b8;
  $background: #1c1c1c;

  #predictions {
    width: 100%;
    box-sizing: border-box;
    padding: 2%;
    background-color: #1c1c1c;
    background-image: url("@/assets/analytics/predictions/background.png");
    background-size: 45%;
    background-position: center;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-track {
      background-color: unset;
      border-radius: 25px;
    }

    &::-webkit-scrollbar-thumb {
      background: #141414;
      border-radius: 25px;
    }

    .widget-container /deep/ {
      margin: 0.7rem 0;

      .widget {
        background-color: $background;
        /*border: 0.125rem solid #d7d7d7;*/
        border-radius: 1rem;
      }
      .title {
        font-size: 0.75rem;
        color: $text-color;
        margin: 0.5rem 0.75rem;
      }
      .widget-buttons {
        display: none;
      }
      .button {
        fill: $text-color;
        padding: 0.5rem;
        width: max-content;
        height: 1.15rem;
      }
    }
    .kpi /deep/ {
      color: $text-color;
      background-color: $background;
      border: none;
      border-radius: 0.75rem;
    }
  }
</style>