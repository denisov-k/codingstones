<template>
  <div class="desktop">
    <slot></slot>
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
    <transition name="fade">
      <div class="message" v-show="isMessageShowed">
        <inline-svg :src="require('@/assets/welcome/desktop/mail.svg')" />
        <div class="labels">
          <span class="header">{{ $t('message.header') }}</span>
          <span class="content">{{ $t('message.content') }}</span>
        </div>
      </div>
    </transition>
    <inline-svg :src="require('@/assets/cs-icon-logo.svg')" class="logo" />
    <div class="footer">
      <img class="application" src="@/assets/welcome/desktop/safari.svg" />
      <img class="application" src="@/assets/welcome/desktop/messages.svg" />
      <img class="application" src="@/assets/welcome/desktop/calendar.svg" />
      <img class="application" src="@/assets/welcome/desktop/notes.svg" />
      <img class="application" src="@/assets/welcome/desktop/music.svg" />
      <img class="application" src="@/assets/welcome/desktop/notebook.svg" />
    </div>
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
    position: relative;
    height: 100%;
    background-color: linear-gradient(180deg, #0d1223 0%, #1b2d5f 50%, #0f1a3a 100%);
    background-image: url("@/assets/welcome/desktop/background.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .desktop > .mobile-header /deep/ {
    color: #d4d4d4;

    svg {
      fill: #d4d4d4 !important;
    }
  }
  .desktop > .header {
    display: flex;
    width: 100%;
    background-color: #000000a8;
    justify-content: space-between;
    padding: 0 0.5vw;
    box-sizing: border-box;
    height: 5%;
    align-items: center;
  }
  .controls {
    font-size: 0.65rem;
    color: $text-color;
    margin-right: 20px;
  }
  .controls > span {
    margin: 0.7rem;
  }
  .controls > span:nth-child(1) {
    font-weight: 600;
    /*margin-left: 0;*/
  }
  .indicators {
    display: flex;
    align-items: center;
    fill: $text-color;
    height: 100%;
  }
  .indicator {
    margin: 0 0.5vw;
    width: auto;
    height: 45%;
  }
  .time {
    display: none;
    color: $text-color;
  }

  .desktop > .footer {
    display: flex;
    background-color: #000000a8;
    padding: 0 5%;
    border-radius: 0.6rem;
    height: 12%;
    justify-content: center;
    margin: auto 2% 2%;
  }
  .footer .application {
    display: inline-block;
    padding: 3% 3%;
    min-width: 30px;
    height: 100%;
    box-sizing: border-box;
  }

  .desktop > .logo {
    height: 6rem;
    -webkit-user-drag: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  .message {
    width: 13rem;
    background-color: #0000005e;
    border-radius: 0.6rem;
    display: flex;
    align-items: center;
    z-index: 100;
    cursor: pointer;
    padding: 0 0.8vw;
    box-sizing: border-box;
    margin-right: 2%;
    margin-left: auto;
    margin-top: 2%;
    aspect-ratio: 2.5;
  }
  .message > svg {
    width: 25%;
    height: auto;
    fill: #ffffff;
    margin-right: 0.8vw;
  }
  .message .labels {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    font-size: 0.7rem;
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
    .desktop > .header {
      display: none;
    }
    .desktop > .footer {
      width: 75%;
      height: 60px;
      box-sizing: border-box;
    }
    .message {
      width: 90%;
      height: 12.5%;
      margin-left: 10px;
      padding: 0 15px;
      margin-right: 10px;
    }
    .message > svg {
      height: 60%;
      margin-right: 10px;
      width: auto;
    }
    .message > .labels {
      font-size: 1.25rem;
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