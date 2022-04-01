<template>
  <div class="desktop">
    <div class="header">
      <div class="controls">
        <span>{{ $t('controls.finder') }}</span>
        <span>{{ $t('controls.file') }}</span>
        <span>{{ $t('controls.edit') }}</span>
        <span>{{ $t('controls.view') }}</span>
        <span>{{ $t('controls.window') }}</span>
        <span>{{ $t('controls.help') }}</span>
      </div>
      <div class="indicators">
        <v-icon name="battery-three-quarters" />
        <v-icon name="wifi" />
        <v-icon name="magnifying-glass" />
      </div>
    </div>
    <img src="@/assets/cs-icon-logo.svg">
    <div class="footer">
      <img class="application" src="@/assets/welcome/desktop/safari.svg" />
      <img class="application" src="@/assets/welcome/desktop/messages.svg" />
      <img class="application" src="@/assets/welcome/desktop/calendar.svg" />
      <img class="application" src="@/assets/welcome/desktop/notes.svg" />
      <img class="application" src="@/assets/welcome/desktop/music.svg" />
      <img class="application" src="@/assets/welcome/desktop/notebook.svg" />
    </div>
    <transition name="fade">
      <div class="message" v-show="isMessageShowed">

      </div>
    </transition>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  name: "Desktop",
  components: {
    'v-icon': Icon
  },
  data() {
    return {
      isMessageShowed: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isMessageShowed = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
  $interface-color: #717171;

  .desktop {
    position: relative;
    height: 100%;
    background: linear-gradient(180deg, #11181f 0%, #15292d 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    display: flex;
    width: 100%;
    background-color: $interface-color;
    justify-content: space-between;
    padding: 0.35vh 2vw;
    box-sizing: border-box;
  }
  .controls {
    font-size: 0.75vw;
    color: #080808;
  }
  .controls > span {
    margin: 0 5px;
  }
  .controls > span:nth-child(1) {
    font-weight: 600;
    margin: 0 5px 0 0;
  }
  .indicators {
    line-height: 0.75vw;
    display: flex;
    align-items: center;
  }
  .indicators > * {
    margin: 0 5px;
    width: 0.75vw;
    height: auto;
  }

  .footer {
    margin: 2%;
    display: flex;
    background-color: $interface-color;
    padding: 0 5%;
    border-radius: 6px;
    height: 10%;
    justify-content: center;
  }
  .footer > .application {
    display: inline-block;
    padding: 3% 3%;
    height: 100%;
    box-sizing: border-box;
  }

  .desktop > img {
    max-width: 300px;
    width: 15%;
    -webkit-user-drag: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .message {
    position: absolute;
    width: 25%;
    height: 15%;
    background-color: $interface-color;
    right: 3%;
    bottom: 20%;
    border-radius: 3px;
  }

  .fade-enter-active {
    transition: all .3s ease;
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter, .fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

</style>

<i18n>
{
  "en": {
    "controls": {
      "finder": "Finder",
      "file": "File",
      "edit": "Edit",
      "view": "View",
      "window": "Window",
      "help": "Help"
    }
  },
  "ru": {
    "controls": {
      "finder": "Finder",
      "file": "Файл",
      "edit": "Редактирование",
      "view": "Просмотр",
      "window": "Окно",
      "help": "Помощь"
    }
  }
}
</i18n>