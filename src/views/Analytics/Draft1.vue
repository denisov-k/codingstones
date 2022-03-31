<template>
  <div class="analytic-screen">
    <div class="row">
      <div class="col-xs-12 col-sm-6 start-sm">
        <h2 class="title">{{ title }}</h2>
      </div>
      <div class="col-xs-12 col-sm-6 end-sm">
        <h2 class="subtitle">{{ subtitle }}</h2>
      </div>
    </div>
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
import BarChart from "@/components/Analytics/Draft1/BarChart";
import TreeMapChart1 from "@/components/Analytics/Draft1/TreeMapChart1";
import TreeMapChart2 from "@/components/Analytics/Draft1/TreeMapChart2";

import LineChart from "@/components/Analytics/Draft1/LineChart";
import PieChart from "@/components/Analytics/Draft1/PieChart";

export default {
  name: "Draft1",
  components: {
    PieChart,
    BarChart,
    TreeMapChart1,
    TreeMapChart2,
    LineChart,
  },
  data: () => {
    return {
      title: 'Пример аналитического экрана',
      subtitle: 'Ещё один заголовок'
    }
  }
}
</script>

<style scoped>
  .analytic-screen {
    padding: 60px 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #eceef0;
  }
  .title {
    color: #2a728e;
    margin: 0 10px 15px;
  }
  .subtitle {
    color: #8a8a8a;
    margin: 0 10px 15px;
  }
</style>