<template>
  <header class="layouts--header">
    <div class="header-content">
      <div class="logo" v-on:click="goToHome">
        <span>CodingStones</span>
      </div>
      <div class="links">
        <span v-on:click="goToAnalytic">{{ $t('overview') }}</span>
        <span v-on:click="goTo('tariffs')" class="solid">{{ $t('buy') }}</span>
        <locale-switcher></locale-switcher>
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  components: {
    LocaleSwitcher
  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    goTo(route) {
      this.$router.push({ name: route }).catch(e => {});
    },
    async goToAnalytic() {
      if (this.$route.name !== 'home')
        await this.$router.push({ name: 'home' });

      document.getElementById("analytic-examples").scrollIntoView({behavior: "smooth"});
    },
    async goToHome() {
      if (this.$route.name !== 'home')
        await this.$router.push({ name: 'home' });

      document.getElementsByTagName("main")[0].scrollIntoView({behavior: "smooth"});
    }
  },
  created: function () {

  }
}
</script>

<i18n>
  {
    "en": {
      "overview": "Overview",
      "buy": "Buy"
    },
    "ru": {
      "overview": "Обзор",
      "buy": "Купить"
    }
  }
</i18n>

<style scoped>
  .layouts--header {
    display: flex;
    position: sticky;
    justify-content: center;
    top: 0;
    background-color: #080808c7;
    z-index: 10000;
    /*min-height: 7.5%;*/
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 1.5vh 3vw;
  }

  .logo {
    display: flex;
    margin: 0;
    color: #e1e1e1;
    font-weight: 600;
    font-size: 1.5rem;
    align-self: center;
    cursor: pointer;
  }
  .logo span {
    align-self: center;
  }

  .links {
    font-size: 1rem;
    color: #b7b7b7;
    align-self: center;
  }
  .links > span {
    cursor: pointer;
    padding: 0.5vh 1vw;
    margin: 0 0.5vw;
  }
  .links > .solid {
    border-radius: 1vh;
    background-color: #335cd2;
    color: white;
  }
</style>