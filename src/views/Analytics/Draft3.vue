<template>
  <div class="analytic-screen">
    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <tree-map-chart1></tree-map-chart1>
      </div>
      <div class="col-xs-12 col-sm-4">
        <line-chart></line-chart>
      </div>
      <div class="col-xs-12 col-sm-4">
        <pie-chart></pie-chart>
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

const BarChart = () => ({
  component: import('@/components/Analytics/Draft1/BarChart'),
  /*loading: LoadingComponent,
  error: ErrorComponent,*/
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

import TreeMapChart1 from "@/components/Analytics/Draft1/TreeMapChart1";
import TreeMapChart2 from "@/components/Analytics/Draft1/TreeMapChart2";

import LineChart from "@/components/Analytics/Draft1/LineChart";
import PieChart from "@/components/Analytics/Draft1/PieChart";

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
    display: flex;
    padding: 10px 35px;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center;
    background-color: #252525;
  }
  .widget-container {
    background-color: #0e0e0e;
  }
</style>