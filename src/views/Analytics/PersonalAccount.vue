<template>
  <div id="personal-account" class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <profile></profile>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-6">
        <tree-chart></tree-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6">
        <pie-chart></pie-chart>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <bar-chart></bar-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <heatmap></heatmap>
      </div>
    </div>
  </div>
</template>

<script>
import TreeChart from "@/components/Analytics/PersonalAccount/TreeChart";
import PieChart from "@/components/Analytics/PersonalAccount/PieChart";
import BarChart from "@/components/Analytics/PersonalAccount/BarChart";
import Profile from "@/components/Analytics/PersonalAccount/Profile";
import Heatmap from "@/components/Analytics/PersonalAccount/Heatmap";

export default {
  name: "PersonalAccount",
  components: {
    Heatmap,
    Profile,
    TreeChart,
    PieChart,
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
  $text-color: #545454;

  #personal-account {
    width: 100%;
    box-sizing: border-box;
    padding: 1%;
    background-color: #eceef0;
    background-image: url("@/assets/analytics/personal_account/background.png");

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
    .widget-header {
      .title {
        color: $text-color;
      }
      .button {
        fill: $text-color;
      }
    }

    &.expanded .widget {
      background-image: url("@/assets/analytics/personal_account/background.png");
    }
  }
</style>