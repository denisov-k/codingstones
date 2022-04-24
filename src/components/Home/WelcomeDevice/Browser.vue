<template>
  <div class="browser">
    <div class="header">
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

        <div class="address">
          <inline-svg :src="require('@/assets/welcome/browser/lock-close.svg')" />
          {{ $t('address') }}
        </div>
        <inline-svg :src="require('@/assets/welcome/browser/reload.svg')" />
      </div>
      <div class="page-controls">
        <inline-svg :src="require('@/assets/welcome/browser/share.svg')" />
        <inline-svg :src="require('@/assets/welcome/browser/plus.svg')" />
        <inline-svg :src="require('@/assets/welcome/browser/frames.svg')" />
      </div>
    </div>
    <div class="analyst-screen"></div>
  </div>
</template>

<script>
export default {
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

<style scoped>
  .browser {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: inherit;
    overflow: hidden;
  }
  .header {
    display: flex;
    height: 25px;
    padding: 0 10px;
    background-color: #f6f6f6;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }
  .header > * {
    display: flex;
  }
  .window-controls {
    margin-right: 10px;
    width: 45px;
  }
  .window-controls > div {
    width: 7px;
    height: 7px;
    border-radius: 20px;
    margin: auto 2px;
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
    margin-right: 10px;
    width: 45px;
    display: none;
  }
  .navigation-controls > svg, .page-controls > svg {
    height: 8px;
    width: auto;
    margin: auto 3px;
    fill: #757575;
  }
  .address-input {
    width: 50%;
    min-width: 120px;
    display: flex;
    background-color: #c7d8e8;
    margin: auto;
    border-radius: 2px;
    height: 16px;
    text-align: center;
    padding: 0 2px;
    box-sizing: border-box;
  }
  .address {
    display: flex;
    font-size: 8px;
    color: #7c7c7c;
    margin: auto;
  }
  .address-input svg {
    height: 6px;
    margin: auto 2px;
    fill: #6a6a6a;
  }
  .page-controls {
    margin-left: 10px;
    width: 45px;
    justify-content: flex-end;
  }

  .analyst-screen {
    background-color: rgb(230 230 230);
    cursor: pointer;
    display: flex;
    height: calc(100% - 25px);
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
  }

  @media only screen and (max-width: 600px) {
    .window-controls {
      display: none;
    }
    .navigation-controls {
      display: inline-flex;
    }
  }
</style>