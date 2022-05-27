<template>
  <div class="browser">
    <slot></slot>
    <div class="header">
      <div class=""></div>
      <div class="window-controls">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="navigation-controls">
        <inline-svg :src="require('@/assets/welcome/browser/arrow-left.svg')" />
        <inline-svg :src="require('@/assets/welcome/browser/arrow-right.svg')" />
      </div>
      <div class="address-input">
        <inline-svg :src="require('@/assets/welcome/browser/read.svg')" />
        <div class="address">
          <inline-svg :src="require('@/assets/welcome/browser/lock-close.svg')" />
          <span class="url">{{ $t('address') }}</span>
        </div>
        <inline-svg :src="require('@/assets/welcome/browser/reload.svg')" />
      </div>
      <div class="page-controls">
        <inline-svg :src="require('@/assets/welcome/browser/share.svg')" />
        <inline-svg :src="require('@/assets/welcome/browser/plus.svg')" />
        <inline-svg :src="require('@/assets/welcome/browser/frames.svg')" />
      </div>
    </div>
    <div class="analyst-screen">
      <predictions></predictions>
    </div>
  </div>
</template>

<script>
import Predictions from "@/views/Analytics/Predictions";

export default {
  components: {
    Predictions
  },
  name: "Browser"
}
</script>

<i18n>
{
  "en": {
    "address": "codingstones.ru"
  },
  "ru": {
    "address": "codingstones.ru"
  }
}
</i18n>

<style lang="scss" scoped>
  .browser {
    height: 100%;
    position: relative;
    display: flex;
    background-color: #e6e6e6;
    flex-direction: column;
    overflow: hidden;
  }
  .mobile-header /deep/ {
    color: #0c0c0c;

    svg {
      fill: #0c0c0c !important;
    }
  }

  .header {
    display: flex;
    min-height: 4vh;
    padding: 0 0.5rem;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
  }
  .header > * {
    display: flex;
  }
  .window-controls {
    margin-right: 10px;
  }
  .window-controls > div {
    height: 0.5rem;
    aspect-ratio: 1;
    border-radius: 1rem;
    margin: auto 0.2rem;
  }
  .window-controls > div:nth-child(1) {
    background-color: #ff3400;
  }
  .window-controls > div:nth-child(2) {
    background-color: #ffc100;
  }
  .window-controls > div:nth-child(3) {
    background-color: #2a962a;
  }
  .navigation-controls {
    /*margin-right: 10px;*/
    display: none;
  }
  .navigation-controls > svg, .page-controls > svg {
    height: 0.6rem;
    width: auto;
    margin: auto 0.3rem;
    fill: #757575;
  }
  .address-input {
    width: 50%;
    min-width: 120px;
    display: flex;
    background-color: #c7d8e8;
    margin: auto;
    border-radius: 0.3rem;
    height: 66.6%;
    text-align: center;
    padding: 0 0.4rem;
    box-sizing: border-box;
    align-items: center;
  }
  .address {
    display: flex;
    font-size: 0.8rem;
    color: #7c7c7c;
    margin: auto;
  }
  .address > .url {
    /*margin-left: 1px;*/
  }
  .address-input svg {
    height: 0.6rem;
    margin: auto 0.3rem;
    fill: #6a6a6a;
  }
  .page-controls {
    /*margin-left: 10px;*/
    justify-content: flex-end;
  }

  .analyst-screen {
    background-color: rgb(230, 230, 230);
    display: flex;
    height: calc(100% - 4vh);
  }

  @media only screen and (max-width: 48em) {
    .header {
      padding-bottom: 1rem;
      order: 1;
    }
    .window-controls {
      display: none;
    }
    .navigation-controls {
      display: inline-flex;
    }
  }
</style>