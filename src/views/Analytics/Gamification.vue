<template>
  <div id="gamification" class="container-fluid">
    <div class="row">
      <character-info></character-info>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-6">
        <bar-chart></bar-chart>
      </div>
      <div class="col-xs-12 col-md-6 col-lg-6">
        <radar-chart></radar-chart>
      </div>
    </div>
  </div>
</template>

<script>

import CharacterInfo from "@/components/Analytics/Gamification/CharacterInfo";
let BarChart = () => import('@/components/Analytics/Gamification/BarChart'),
    RadarChart = () => import('@/components/Analytics/Gamification/RadarChart');

export default {
  name: "Gamification",
  components: {
    CharacterInfo,
    BarChart,
    RadarChart
  },
}
</script>

<style lang="scss" scoped>
  $text-color: #1e776a;

  #gamification {
    width: 100%;
    box-sizing: border-box;
    min-height: 100vh;
    padding: 15px;
    background-image: url("@/assets/analytics/gamification/background.png");
    background-size: cover;
    background-position: center;

    .widget-container /deep/ {
      margin: 0.7rem;

      .widget {
        background-color: #ffffff;
        border: 1px solid #bbe0c6;
      }
      .widget-header {
        .title {
          font-size: 1rem;
          color: $text-color;
        }

        .button {
          height: 1rem;
          padding: 0 0.4rem;
          fill: $text-color;
        }
      }
    }
  }
</style>