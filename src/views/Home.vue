<template>
  <main>
    <div id="laptop-welcome">
      <h1>{{ $t('title') }}</h1>
      <h2>{{ $t('subtitle') }}</h2>
      <laptop></laptop>
    </div>
    <div id="services-and-features">
      <services-list></services-list>
    </div>
    <div id="analytic-examples">
      <div class="slider">
        <analytic-draft1></analytic-draft1>
      </div>
    </div>
    <div id="about-us">
      <contacts></contacts>
    </div>
  </main>
</template>

<script>
import Laptop from "@/components/Home/Laptop";
import ServicesList from "@/components/Home/ServicesList";
import Contacts from "@/components/Home/Contacts";
import AnalyticDraft1 from "@/views/Analytics/Draft1";

export default {
  name: "Home",
  components: {
    Laptop, ServicesList, AnalyticDraft1, Contacts
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
    font-size: 1.275em;
    margin: 0;
  }
  h2 {
    font-size: 1.875em;
    margin: 20px 0;
  }
  #laptop-welcome {
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 0 30px;
    background-color: #080808;
  }
  #services-and-features {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0;
    background-color: #080808;
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
    "title": "Hello, World!",
    "subtitle": "Subtitle"
  },
  "ru": {
    "title": "Тестовый заголовок",
    "subtitle": "Второй заголовок"
  }
}
</i18n>