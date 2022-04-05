<template>
  <div class="device-container">
    <div class="device">
      <img src="@/assets/welcome/laptop.svg">
      <div :class="[ isDeviceSmall ? 'mobile-screen' : 'laptop-screen' ]" v-on:click="nextScreen">
        <desktop v-if="activeScreenIndex === 0"></desktop>
        <messenger v-else-if="activeScreenIndex === 1"></messenger>
        <browser v-else-if="activeScreenIndex === 2"></browser>
      </div>
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
    max-width: 860px;
    margin: 25px 5%;
    height: inherit;
    user-select: none;
  }
  .device > img {
    width: 100%;
    height: 100%;
    /*z-index: 1;*/
    -webkit-user-drag: none;
  }
  .laptop-screen {
    position: absolute;
    left: 11.5%;
    right: 11.5%;
    top: 3%;
    bottom: 10.5%;

    background-color: white;
    cursor: pointer;
  }
  .mobile-screen {
    position: absolute;
    left: 11.5%;
    right: 11.5%;
    top: 3%;
    bottom: 10.5%;

    background-color: white;
    cursor: pointer;
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