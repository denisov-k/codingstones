<template>
  <div id="gamification">
    <div class="row">
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-6 col-lg-6">
        <radar-chart></radar-chart>
      </div>
      <div class="col-xs-6 col-md-6 col-lg-6">
        <radar-chart></radar-chart>
      </div>
    </div>
  </div>
</template>

<script>

import RadarChart from "@/components/Analytics/Gamification/RadarChart";

export default {
  name: "Gamification",
  components: {
    RadarChart
  },
}
</script>

<style lang="scss" scoped>
  $text-color: #dadada;

  #gamification {
    padding: 15px;
    background-color: #367dc3;
  }
  .widget-container /deep/ {
    margin: 0;

    .widget {
      background-color: #000000d9;
    }
    .title {
      color: $text-color;
    }
    .button {
      fill: $text-color;
    }
  }
</style>