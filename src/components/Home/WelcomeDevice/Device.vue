<template>
  <div class="device" v-on:click="nextScreen">
    <!--<img src="@/assets/welcome/laptop.svg" v-if="!isDeviceSmall" draggable="false">
    <img src="@/assets/welcome/mobile.svg" v-else draggable="false">-->
    <div class="screen">
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
    z-index: 2;
  }
  .screen {
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    margin: 1.7% 11.5% 5.3%;
    width: 100%;
    border-image-source: url("@/assets/welcome/laptop.svg");
    border-image-slice: 12% 11.7% 10.5%;
    border-image-width: 40px 68px 40px;
    border-image-outset: 3.4 64px 15;
    border-style: solid;
    border-image-repeat: stretch;
  }

  @media only screen and (max-width: 600px) {
    .device {
      aspect-ratio: 75 / 150;
      max-height: unset;
      margin-top: 10px;
      width: 350px;
    }
    .screen {
      border-image-source: url("@/assets/welcome/mobile.svg");
      margin: 3.5% 3.5% 3%;
      border-radius: 35px;
      border-image-slice: 1.7% 15%;
      border-image-width: 13px 68px;
      border-image-outset: 3 15px;
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