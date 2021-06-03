<template>
  <main>
    <laptop-screen scroll-anchor></laptop-screen>
    <office-analytic scroll-anchor></office-analytic>
    <water-analytic scroll-anchor></water-analytic>
    <analytic-draft3 scroll-anchor></analytic-draft3>
  </main>
</template>

<script>

import LaptopScreen from "@/views/LaptopScreen";
import OfficeAnalytic from "@/views/Analytics/Office";
import WaterAnalytic from "@/views/Analytics/Water"
import AnalyticDraft3 from "@/views/Analytics/Draft3"

export default {
  name: "Home",
  components: {
    LaptopScreen, OfficeAnalytic, WaterAnalytic, AnalyticDraft3
  },
  data() {
    return {
      inMove: false,
    }
  },
  created() {
    window.addEventListener('mousewheel', this.handleScroll, { passive: false });
    window.addEventListener('touchmove', this.handleScroll, { passive: false });
  },
  methods: {
    handleScroll(event) {
      let anchor = event.path.find((item) => {
        if (item.hasAttribute)
          return item.hasAttribute('scroll-anchor');
      });

      if (!anchor || this.inMove)
        return;

      let target = event.wheelDelta < 30 ? anchor.nextSibling : anchor.previousSibling;

      if (!target)
        return;

      this.moveToAnchor(target);

      event.preventDefault();
      return false;
    },
    moveToAnchor(element) {
      this.inMove = true;

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });

      this.inMove = false;
    }
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
