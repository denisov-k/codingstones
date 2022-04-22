<template>
  <div id="gamification">
    <div class="row">
    </div>
    <div class="row">
      <div class="col-xs-6 col-md-6 col-lg-6">
        <sunburst></sunburst>
      </div>
      <div class="col-xs-6 col-md-6 col-lg-6">
        <radar-chart></radar-chart>
      </div>
    </div>
  </div>
</template>

<script>

import RadarChart from "@/components/Analytics/Gamification/RadarChart";
let Sunburst = () => import('@/components/Analytics/Gamification/Sunburst');

export default {
  name: "Gamification",
  components: {
    RadarChart, Sunburst
  },
}
</script>

<style lang="scss" scoped>
  $text-color: #dadada;

  #gamification {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 15px;
    background-image: url("@/assets/analytics/gamification/background.jpg");
    background-size: cover;
    background-position: center;
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