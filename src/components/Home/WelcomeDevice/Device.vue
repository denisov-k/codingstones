<template>
  <div class="device" v-on:click="nextScreen">
    <!--<img src="@/assets/welcome/laptop.svg" v-if="!isDeviceSmall" draggable="false">
    <img src="@/assets/welcome/mobile.svg" v-else draggable="false">-->
    <div class="screen">
      <div class="camera"></div>
      <widget :is="applications[activeApplicationIndex]" class="application">
        <div class="mobile-header">
          <div>13:30</div>
          <div class="camera"></div>
          <div>
            <inline-svg class="" :src="require('@/assets/welcome/device/network.svg')" />
            <inline-svg class="" :src="require('@/assets/welcome/device/wifi.svg')" />
            <inline-svg class="" :src="require('@/assets/welcome/device/battery.svg')" />
          </div>
        </div>
      </widget>
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
        activeApplicationIndex: 0,
        window: {
          width: 0,
          height: 0
        },
        applications: [Desktop, Messenger, Browser]
      }
    },
    computed: {

    },
    methods: {
      nextScreen() {
        this.activeApplicationIndex = this.activeApplicationIndex >= 2 ? 0 : this.activeApplicationIndex + 1;
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
    justify-content: center;
    margin: 10px auto;
    user-select: none;
    box-sizing: border-box;
    aspect-ratio: 146 / 75;
    max-height: 60vh;
    width: 90%;
    min-height: 300px;
  }

  .device > img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  .screen {
    position: relative;
    cursor: pointer;
    overflow: hidden;
    box-sizing: border-box;
    margin: 1.7% 11.5% 5.3%;
    width: 100%;
    border-image-source: url("@/assets/welcome/device/laptop.svg");
    border-image-slice: 12% 11.7% 10.5%;
    border-image-width: 40px 68px 40px;
    border-image-outset: 3.4 64px 15;
    border-style: solid;
    border-image-repeat: stretch;
    aspect-ratio: 125 / 75;
  }
  .mobile-header {
    display: none;
    height: 35px;
    width: 100%;
    justify-content: space-between;
    z-index: 1000;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .mobile-header > div:nth-child(1) {
    font-size: 10px;
    font-weight: 600;
    align-self: center;
  }
  .camera {
    display: none;
    width: 100px;
    height: 20px;
    background-color: #000000;
    border-radius: 0 0 10px 10px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }
  .mobile-header > div:nth-child(3) {
    align-self: center;
    display: flex;
    margin-right: -3px;
  }
  .mobile-header > div:nth-child(3) > svg {
    height: 9px;
    fill: white;
    align-self: center;
    margin: 0 3px;
  }
  .application {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 600px) {
    .device {
      aspect-ratio: 75 / 135;
      max-height: unset;
      margin-top: 10px;
      width: 350px;
    }
    .screen {
      border-image-source: url("@/assets/welcome/device/mobile.svg");
      margin: 3.5% 3.5% 3%;
      border-radius: 38px;
      border-image-slice: 1.8% 15%;
      border-image-width: 13px 68px;
      border-image-outset: 3 15px;
    }
    .mobile-header {
      display: flex;
    }
    .application {
      height: 100%;
      flex-direction: column;
    }
    .camera {
      display: flex;
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