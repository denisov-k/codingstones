<template>
  <div class="analytic-screen">
    <div class="row">
      <div class="col-xs-4">
        <tree-map-chart1></tree-map-chart1>
      </div>
      <div class="col-xs-4">
        <line-chart></line-chart>
      </div>
      <div class="col-xs-4">
        <pie-chart></pie-chart>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-6">
        <tree-map-chart2></tree-map-chart2>
      </div>
      <div class="col-xs-6">
        <bar-chart></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/DarkWave/BarChart";
import TreeMapChart1 from "@/components/DarkWave/TreeMapChart1";
import TreeMapChart2 from "@/components/DarkWave/TreeMapChart2";

import LineChart from "@/components/DarkWave/LineChart";
import PieChart from "@/components/DarkWave/PieChart";

export default {
  name: "Page2",
  components: {
    PieChart,
    BarChart,
    TreeMapChart1,
    TreeMapChart2,
    LineChart,
  },
}
</script>

<style scoped>
  .analytic-screen {
    padding: 10px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #367dc3;
  }
</style>