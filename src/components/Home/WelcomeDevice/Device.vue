<template>
  <div class="device">
    <div class="screen" v-on:click="nextScreen">
      <div class="camera"></div>
      <widget :is="applications[activeApplicationIndex]" class="application">
        <template v-slot:header>
          <div class="mobile-header">
            <div>13:30</div>
            <div class="camera"></div>
            <div>
              <inline-svg class="" :src="require('@/assets/welcome/device/network.svg')" />
              <inline-svg class="" :src="require('@/assets/welcome/device/wifi.svg')" />
              <inline-svg class="" :src="require('@/assets/welcome/device/battery.svg')" />
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <div class="mobile-footer">
            <div class="home-button"></div>
          </div>
        </template>
      </widget>
    </div>
  </div>
</template>

<script>
  import Desktop from "./Desktop";
  import Messenger from "./Messenger/Messenger";
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
    margin: 1vh auto;
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
    border-image-width: 10% 6.5vw 5.5vh;
    border-image-outset: 0.9vh 6vw 4.7vh;
    border-style: solid;
    border-image-repeat: stretch;
    aspect-ratio: 125 / 75;
  }
  .mobile-header {
    display: none;
    min-height: 30px;
    width: 100%;
    justify-content: space-between;
    z-index: 1000;
    padding: 0px 25px;
    box-sizing: border-box;
  }
  .mobile-header > div:nth-child(1) {
    font-size: 11px;
    font-weight: 600;
    align-self: center;
  }
  .camera {
    display: none;
    width: 125px;
    height: 25px;
    background-color: #000000;
    border-radius: 0 0 15px 15px;
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
  .mobile-footer {
    height: 3vh;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-button {
    background-color: #454545;
    height: 3px;
    width: 75px;
    border-radius: 5px;
  }
  .application {
    box-sizing: border-box;
  }

  @media only screen and (max-width: 48em) {
    .device {
      aspect-ratio: 75 / 135;
      max-height: unset;
      margin-top: 10px;
      width: 350px;
    }
    .screen {
      border-image-source: url("@/assets/welcome/device/mobile.svg");
      margin: 4% 3.5% 3%;
      border-radius: 35px;
      border-image-slice: 14 50;
      border-image-width: 15px 60px;
      border-image-outset: 6px 10px 5px;
    }
    .mobile-header {
      display: flex;
    }
    .application {
      height: 100%;
      flex-direction: column;
    }
    .mobile-footer {
      display: flex;
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