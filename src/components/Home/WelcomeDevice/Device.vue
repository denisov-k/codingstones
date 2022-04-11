<template>
  <div class="device">
    <img src="@/assets/welcome/laptop.svg" v-if="!isDeviceSmall">
    <img src="@/assets/welcome/mobile.svg" v-else>
    <div class="screen" v-on:click="nextScreen">
      <desktop v-if="activeScreenIndex === 0"></desktop>
      <messenger v-else-if="activeScreenIndex === 1"></messenger>
      <browser v-else-if="activeScreenIndex === 2"></browser>
    </div>
  </div>
</template>

<script>
  import Desktop from "./Desktop";
  import Messenger from "./Messenger";
  import Browser from "./Browser";

  export default {
    name: "Device",
    components: {
      Desktop, Messenger, Browser
    },
    data: () => {
      return {
        activeScreenIndex: 0,
        window: {
          width: 0,
          height: 0
        }
      }
    },
    computed: {
      isDeviceSmall: function () {
        return this.window.width <= 600;
      }
    },
    methods: {
      nextScreen() {
        this.activeScreenIndex = this.activeScreenIndex >= 2 ? 0 : this.activeScreenIndex + 1;
      },
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
  }
</script>

<style scoped>
  .device-container {
    text-align: -webkit-center;
  }
  .device {
    display: flex;
    position: relative;
    justify-content: center;
    margin: 10px auto;
    user-select: none;
    box-sizing: border-box;
    aspect-ratio: 146 / 75;
    max-height: 60vh;
    width: 90%;
  }

  .device > img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .screen {
    box-sizing: border-box;
    padding: 1.6% 11.5% 5.3%;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .device {
      aspect-ratio: 76 / 150;
      max-height: 100vh;
      margin-top: 10px;
    }
    .screen {
      padding: 3% 4.5% 2.5%;
      border-radius: 20px;
    }
  }
</style>

<i18n>
{
  "en": {

  },
  "ru": {

  }
}
</i18n>