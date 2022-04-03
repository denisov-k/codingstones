<template>
  <div class="analytic-screen">
    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <tree-map-chart1></tree-map-chart1>
      </div>
      <div class="col-xs-12 col-sm-8">
        <Map></Map>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <tree-map-chart2></tree-map-chart2>
      </div>
      <div class="col-xs-12 col-sm-6">
        <bar-chart></bar-chart>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/AnalyticalScreens/Draft1/BarChart";
import TreeMapChart1 from "@/components/AnalyticalScreens/Draft1/TreeMapChart1";
import TreeMapChart2 from "@/components/AnalyticalScreens/Draft1/TreeMapChart2";

import Map from "@/components/AnalyticalScreens/Map";

export default {
  name: "Draft2",
  components: {
    Map,
    BarChart,
    TreeMapChart1,
    TreeMapChart2,
  },
}
</script>

<style scoped>
  .analytic-screen {
    padding: 15px;
    background-color: #367dc3;
  }
</style>