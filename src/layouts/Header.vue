<template>
  <header class="layouts--header">
    <div class="header-content">
      <div class="logo" v-on:click="goToHome">
        <span>CodingStones</span>
      </div>
      <div class="links">
        <span v-on:click="goToAnalytic">Обзор</span>
        <span v-on:click="goTo('tariffs')" class="solid">Купить</span>
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

<style scoped>
  .layouts--header {
    display: flex;
    position: sticky;
    justify-content: center;
    top: 0;
    background-color: #080808c7;
    z-index: 10;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    height: 50px;
    margin: 0 3%;
  }

  .logo {
    display: flex;
    margin: 0 5px;
    color: white;
    opacity: 0.92;
    font-weight: 600;
    font-size: 21px;
    align-self: center;
    cursor: pointer;
  }
  .logo span {
    align-self: center;
  }

  .links {
    font-size: 14px;
    color: #b7b7b7;
    align-self: center;
  }
  .links > span {
    cursor: pointer;
    padding: 4px 10px;
    margin: 0 5px;
  }
  .links > .solid {
    border-radius: 15px;
    background-color: #335cd2;
    color: white;
  }
</style>