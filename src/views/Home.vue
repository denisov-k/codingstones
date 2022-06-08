<template>
  <main>
    <div id="welcome">
      <h1>{{ $t('welcome.title') }}</h1>
      <h2>{{ $t('welcome.subtitle') }}</h2>
      <welcome-device></welcome-device>
    </div>
    <services-and-features-list></services-and-features-list>
    <div id="analytic-examples">
      <h2>{{ $t('analytic.title') }}</h2>
      <analytical-screens-slider></analytical-screens-slider>
    </div>
    <about-us></about-us>
    <contacts></contacts>
  </main>
</template>

<script>
import WelcomeDevice from "@/components/Home/WelcomeDevice";
import ServicesAndFeaturesList from "@/components/Home/ServicesAndFeaturesList";
import AnalyticalScreensSlider from "@/components/Home/AnalyticalScreensSwitcher";
import Contacts from "@/components/Home/Contacts";
import AboutUs from "@/components/Home/AboutUs";


export default {
  name: "Home",
  components: {
    AboutUs,
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
    margin-top: -4rem;
    margin-bottom: -4rem;
  }
  h1 {
    font-size: 1.25rem;
    margin: 0;
  }
  h2 {
    font-size: 1.75rem;
    margin: 3vh 0;
  }
  h3 {
    font-size: 2.25rem;
    margin: 5px 0;
  }
  #welcome {
    width: 100%;
    min-height: 85vh;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: 15vh 0 5vh;
    background-color: #080808;
  }
  #services-and-features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;
    background-color: #080808;
  }
  #analytic-examples {
    min-height: 100vh;
    color: black;
    padding: 4rem 2rem;
  }
  #analytic-examples h3 {
    display: flex;
    justify-content: center;
    margin: 0;
  }
</style>

<i18n>
{
  "en": {
    "welcome": {
      "title": "The next generation of business intelligence",
      "subtitle": "Efficient work with data"
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
      "title": "Новое поколение бизнес-аналитики",
      "subtitle": "Эффективная работа с данными"
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