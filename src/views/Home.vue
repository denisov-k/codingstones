<template>
  <main>
    <div id="laptop-welcome">
      <h1>{{ $t('welcome.title') }}</h1>
      <h2>{{ $t('welcome.subtitle') }}</h2>
      <laptop></laptop>
    </div>
    <div id="services-and-features">
      <services-and-features-list></services-and-features-list>
    </div>
    <div id="analytic-examples">
      <h3>{{ $t('analytic.title') }}</h3>
      <analytical-screens-slider></analytical-screens-slider>
    </div>
    <div id="about-us">
      <contacts></contacts>
    </div>
  </main>
</template>

<script>
import Laptop from "@/components/Home/Laptop";
import ServicesAndFeaturesList from "@/components/Home/ServicesAndFeaturesList";
import AnalyticalScreensSlider from "@/components/Home/AnalyticalScreensSlider";
import Contacts from "@/components/Home/Contacts";


export default {
  name: "Home",
  components: {
    Laptop, ServicesAndFeaturesList, AnalyticalScreensSlider, Contacts
  },
  data() {
    return {
      inMove: false,
    }
  },
  created() {
    window.addEventListener('mousewheel', this.handleScroll, { passive: false });
    // window.addEventListener('touchmove', this.handleScroll, { passive: false });
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
        block: 'start',
        inline: 'center'
      });

      let moveEvent = new CustomEvent("scrolled");

      window.dispatchEvent(moveEvent);

      this.inMove = false;
    }
  }
}
</script>

<style scoped>
  h1 {
    font-size: 1.5vmax;
    margin: 0;
  }
  h2 {
    font-size: 2.5vmax;
    margin: 2vmax 0;
  }
  h3 {
    color: black;
    font-size: 1.875em;
    margin: 15px 0;
    display: inline-block;
  }
  #laptop-welcome {
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(120px - 2vw) 0 30px;
    background-color: #080808;
  }
  #services-and-features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    background-color: #080808;
  }
  #analytic-examples {
    text-align: left;
    padding: 50px 60px;
  }
  #about-us {
    background-color: #080808;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
</style>

<i18n>
{
  "en": {
    "welcome": {
      "title": "Hello, World!",
      "subtitle": "Subtitle"
    },
    "analytic": {
      "title": "Examples"
    }
  },
  "ru": {
    "welcome": {
      "title": "Тестовый заголовок",
      "subtitle": "Второй заголовок"
    },
    "analytic": {
      "title": "Примеры"
    }
  }
}
</i18n>