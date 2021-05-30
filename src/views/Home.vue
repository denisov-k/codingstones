<template>
  <main>
    <laptop-screen></laptop-screen>
    <AnalyticsSlider></AnalyticsSlider>
  </main>
</template>

<script>

import LaptopScreen from "@/views/LaptopScreen";
import AnalyticsSlider from "@/views/Analytics/Slider";

export default {
  name: "Home",
  components: {
    LaptopScreen, AnalyticsSlider
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped>
  h1 {
    font-size: 20px;
    margin: 0;
  }
  h2 {
    font-size: 56px;
    margin: 20px 30px;
  }
</style>
