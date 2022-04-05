<template>
  <main>
    <div id="welcome">
      <h1>{{ $t('welcome.title') }}</h1>
      <h2>{{ $t('welcome.subtitle') }}</h2>
      <welcome-device></welcome-device>
    </div>
    <div id="services-and-features">
      <services-and-features-list></services-and-features-list>
    </div>
    <div id="analytic-examples">
      <h3>{{ $t('analytic.title') }}</h3>
      <analytical-screens-slider></analytical-screens-slider>
    </div>
    <div id="about-us">
      <h3>{{ $t('about_us.title') }}</h3>
    </div>
    <contacts></contacts>
  </main>
</template>

<script>
import WelcomeDevice from "@/components/Home/WelcomeDevice";
import ServicesAndFeaturesList from "@/components/Home/ServicesAndFeaturesList";
import AnalyticalScreensSlider from "@/components/Home/AnalyticalScreensSlider";
import Contacts from "@/components/Home/Contacts";


export default {
  name: "Home",
  components: {
    WelcomeDevice, ServicesAndFeaturesList, AnalyticalScreensSlider, Contacts
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
  main {
    margin-top: -50px;
    min-width: 400px;
  }
  h1 {
    font-size: 1.5vmax;
    margin: 0;
  }
  h2 {
    font-size: 2.5vmax;
    margin: 2vmax 0;
  }
  h3 {
    font-size: 1.875em;
    margin: 5px 0;
    display: inline-block;
  }
  #welcome {
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
    padding: 60px 0;
    background-color: #080808;
  }
  #analytic-examples {
    min-height: 100vh;
    color: black;
    text-align: left;
    padding: 60px 6vmin;
  }
  #about-us {
    background-color: #080808;
    display: flex;
    flex-direction: column;
    padding: 6vmin;
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
    },
    "about_us": {
      "title": "About us"
    }
  },
  "ru": {
    "welcome": {
      "title": "Тестовый заголовок",
      "subtitle": "Второй заголовок"
    },
    "analytic": {
      "title": "Примеры"
    },
    "about_us": {
      "title": "О нас"
    }
  }
}
</i18n>