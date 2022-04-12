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
      <div class="time">{{ time }}</div>
      <div class="indicators">
        <inline-svg class="indicator" :src="require('@/assets/welcome/desktop/battery.svg')" />
        <inline-svg class="indicator" :src="require('@/assets/welcome/desktop/wifi.svg')" />
        <inline-svg class="indicator" :src="require('@/assets/welcome/desktop/search.svg')" />
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
        <inline-svg class="indicator" :src="require('@/assets/welcome/desktop/mail.svg')" />
        <div class="labels">
          <span class="header">{{ $t('message.header') }}</span>
          <span class="content">{{ $t('message.content') }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Desktop",
  data() {
    return {
      isMessageShowed: false,
      time: '7:37'
    }
  },
  mounted() {
    setTimeout(() => {
      this.isMessageShowed = true
    }, 1500)
  }
}
</script>

<style lang="scss" scoped>
  $interface-color: #000000a8;
  $text-color: #6c6c6c;

  .desktop {
    font-size: 8px;
    position: relative;
    height: 100%;
    background-color: linear-gradient(180deg, #0d1223 0%, #1b2d5f 50%, #0f1a3a 100%);
    background-image: url("@/assets/welcome/desktop/wallpaper.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: inherit;
  }
  .desktop > .header {
    display: flex;
    width: 100%;
    background-color: $interface-color;
    justify-content: space-between;
    padding: 3px 10px;
    box-sizing: border-box;
  }
  .controls {
    font-size: 8px;
    color: $text-color;
    margin-right: 20px;
  }
  .controls > span {
    margin: 0 7px;
  }
  .controls > span:nth-child(1) {
    font-weight: 600;
    margin-left: 0;
  }
  .indicators {
    display: flex;
    align-items: center;
    fill: $text-color;
  }
  .indicator {
    margin: 0 3px;
    width: auto;
    height: 8px;
  }
  .time {
    display: none;
    color: $text-color;
  }

  .desktop > .footer {
    margin: 2%;
    display: flex;
    background-color: $interface-color;
    padding: 0 5%;
    border-radius: 6px;
    height: 45px;
    justify-content: center;
  }
  .application {
    display: inline-block;
    padding: 3% 3%;
    min-width: 30px;
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
    right: 15px;
    height: 15%;
    min-width: 130px;
    min-height: 45px;
    background-color: #0000005e;
    top: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    z-index: 100;
    cursor: pointer;
    padding-right: 10px;
  }
  .message > svg {
    width: 20%;
    height: auto;
    margin: 0 10%;
    fill: #ffffff;
  }
  .message .labels {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    font-size: 9px;
    /*margin: 0 2% auto;
    height: 50%;*/
  }
  .message span {
    display: inline-block;
    margin: 2% 0;
  }
  .message .header {
    color: #5e6fa1;
  }
  .message .content {
    color: #ffffff;
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

  @media only screen and (max-width: 600px) {
    .desktop > img {
      width: 35%;
    }
    .message {
      width: 90%;
      right: auto;
      left: auto;
      height: 10%;
    }
    .message > svg {
      width: 15%;
      margin: 0 5%;
    }
    .controls {
      display: none;
    }
    .time {
      display: block;
    }
    .application:nth-child(4), .application:nth-child(5) {
      display: none;
    }
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
    },
    "message": {
      "header": "Messenger",
      "content": "New message"
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
    },
    "message": {
      "header": "Messenger",
      "content": "Новое сообщение"
    }
  }
}
</i18n>