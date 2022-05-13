<template>
  <div class="messenger">
    <slot></slot>
    <div class="sidebar">
      <div class="header">
        <div class="menu-button">
          <inline-svg :src="require('@/assets/welcome/messenger/burger-menu.svg')" />
        </div>
        <div class="search-box">
          <span class="placeholder">{{ $t('header.search') }}</span>
        </div>
      </div>
      <div class="dialogs">
        <div class="dialog" v-for="(item, index) in dialogs" :key="index"
             :class="[ selectedDialogIndex === index ? 'selected' : ''  ]">
          <div class="avatar">
            <img :src="item.avatar">
          </div>
          <div class="titles">
            <span class="name">{{ item.name }}</span>
            <span class="message">{{ item.message }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="header">
        <div class="titles">
          <span class="title">{{ $t('header.title') }}</span>
          <span class="subtitle">{{ $t('header.subtitle') }}</span>
        </div>
        <div class="controls">
          <inline-svg :src="require('@/assets/welcome/messenger/search.svg')" />
          <inline-svg :src="require('@/assets/welcome/messenger/window.svg')" />
          <inline-svg :src="require('@/assets/welcome/messenger/setting-dots.svg')" />
        </div>
      </div>
      <transition-group name="fade" tag="ul" class="body">
        <div class="message" :key="index" v-for="(item, index) in messagesList">
          <div class="content">
            <img :src="item.image" rel="preload">
            <span>{{ item.text }}</span>
          </div>
          <inline-svg :src="require('@/assets/welcome/messenger/share.svg')" class="share" />
        </div>
      </transition-group>
      <div class="footer">
        <inline-svg :src="require('@/assets/welcome/messenger/clip.svg')" />
        <span class="placeholder">{{ $t('footer.placeholder') }}</span>
        <inline-svg :src="require('@/assets/welcome/messenger/smileys.svg')" />
        <inline-svg :src="require('@/assets/welcome/messenger/send-button.svg')" />
      </div>
    </div>
  </div>
</template>

<script>

const images = [
  require("@/assets/welcome/messenger/piechart.svg"),
  require("@/assets/welcome/messenger/barchart.svg")
];

export default {
  name: "Messenger",
  components: {

  },
  computed: {
    messagesList: function () {
      return this.messages.filter((item, index) => index !== 1 || this.isNewMessageDisplayed);
    }
  },
  data() {
    const $t = this.$t.bind(this);

    return {
      dialogs: [
        { avatar: require('@/assets/welcome/messenger/avatars/bookmark.svg'),
          name: $t('dialogs.first.name'), message: $t('dialogs.first.message') },
        { avatar: require('@/assets/welcome/messenger/avatars/circle-logo.svg'),
          name: $t('dialogs.second.name'), message: $t('dialogs.second.message') },
        { avatar: require('@/assets/welcome/messenger/avatars/man.jpg'),
          name: $t('dialogs.third.name'), message: $t('dialogs.third.message') },
        { avatar: require('@/assets/welcome/messenger/avatars/woman.jpg'),
          name: $t('dialogs.fourth.name'), message: $t('dialogs.fourth.message') },
      ],
      selectedDialogIndex: 1,
      isNewMessageDisplayed: false,
      messages: [
        { image: images[0], text: $t('messages.first') },
        { image: images[1], text: $t('messages.second') }
      ]
    }
  },
  mounted() {
    setTimeout(() => this.isNewMessageDisplayed = true, 1500)
  }
}
</script>

<style lang="scss" scoped>
  $interface-color: #fff;

  .messenger {
    display: flex;
    height: 100%;
    background-color: #fff;
    font-size: 0.8rem;
  }
  .header {
    min-height: 3rem;
  }
  .header, .footer {
    display: flex;
    width: 100%;
    padding: 0 0.6rem;
    box-sizing: border-box;
    align-items: center;
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    min-width: 30%;
    max-width: 33%;
    height: 100%;
    background-color: $interface-color;
    border-right: 1px solid #d5d5d5;
  }
  .sidebar .header {

  }
  .header .menu-button {
    display: flex;
    fill: #7c7c7c;
    padding: 0 2px;
  }
  .menu-button svg {
    height: 0.6rem;
    width: auto;
  }
  .header .search-box {
    display: flex;
    align-items: center;
    width: stretch;
    background-color: #e5e5e5;
    border-radius: 0.25rem;
    height: 60%;
    margin-left: 0.7rem;
  }
  .search-box .placeholder {
    padding: 0 0.5rem;
    color: #686868;
  }
  .sidebar .dialogs {

  }
  .dialog {
    display: inline-flex;
    width: 100%;
    height: 4rem;
    align-items: center;

    .avatar {
      padding: 0.75rem;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      aspect-ratio: 1;

      img {
        width: 100%;
        height: 100%;
        background-color: #678291;
        border-radius: 100%;
      }
    }
    .name {
      font-weight: 600;
      color: #333;
    }
    .message {
      color: #686868;
    }
  }
  .dialog.selected {
    background-color: #dfddff;

    .message {
      color: #335cd2;
    }
  }

  .mobile-header /deep/ {
    color: #474747;

    svg {
      fill: #474747 !important;
    }
  }
  .main /deep/ {
    width: stretch;
    height: auto;
    display: flex;
    background-image: url("@/assets/welcome/messenger/background.png");
    flex-direction: column;
    justify-content: space-between;

    .header {
      justify-content: space-between;
      background-color: $interface-color;

      border-bottom: 1px solid #d5d5d5;
    }

    .fade-enter-active, .fade-leave-active {
      transition: all 0.5s;
    }
    .fade-enter, .fade-leave-to{
      opacity: 0;
    }
    .fade-enter-active {
      transition-delay: 0s;
    }
    .body {
      display: flex;
      flex-direction: column;
      padding: 1vh 0;
      box-sizing: border-box;
      overflow-y: auto;
      justify-content: flex-end;
      height: stretch;
      margin: 0;

      .message {
        display: flex;
        align-items: flex-end;
        max-width: 60%;
        min-width: 275px;
        margin: 0.5rem;

        .share {
          flex: none;
          width: 2rem;
          /* height: 24px; */
          border-radius: 1rem;
          background-color: #00000014;
          margin-left: 0.5rem;
          fill: #afafaf;
          padding: 0.4rem;
          box-sizing: border-box;
        }
      }
      .message:last-child {
        margin-bottom: 0;
      }
    }
    .body::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    .body::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0.35);
      border-radius: 25px;
    }

    .body::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.25);
      border-radius: 25px;
    }
  }
  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 1vh 0;
  }
  .titles > span {
    margin: 1% 0;
  }
  .title {
    color: #3b3b3b;
    font-weight: 600;
  }
  .subtitle {
    color: #686868;
    text-transform: lowercase;
  }
  .controls {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .controls > svg {
    fill: #7c7c7c;
    height: 1rem;
    margin: 0 0.5rem;
  }

  .message:not(:last-child) .avatar {
    opacity: 0;
  }
  .message .content {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 0.5rem;
    border-radius: 0.5rem;
    width: 100%;
    box-shadow: 0 0 0.5vh #afafaf;
  }
  .message .content:hover {
    /*background-color: #0d1223;*/
  }
  .message .content img {
    width: 100%;
    margin-bottom: 1vh;
  }
  .message .content span {
    color: #000000;
    text-align: left;
    font-size: 1rem;
  }

  .main .footer {
    min-height: 2.5rem;
    background-color: #fff;
    border-top: 1px solid #d5d5d5;
  }
  .footer .placeholder {
    width: stretch;
    color: #686868;
    align-self: center;
    text-align: left;
    padding: 0 2%;
    box-sizing: border-box;
  }
  .footer > svg {
    margin: 0 0.5rem;
    fill: #7c7c7c;
    height: 1rem;
  }
  @media only screen and (max-width: 48em) {
    .sidebar {
      display: none;
    }
    .header {
      min-height: 40px;
    }
    .header .title {
      font-size: 11px;
    }
    .main {
      height: calc(100% - 30px);
    }
    .body {

    }
    .footer {
      padding-bottom: 15px;
      min-height: 45px !important;
    }
    .body .message {
      max-width: 100%;
      margin: 5px 10px;
    }
  }
</style>

<i18n>
{
  "en": {
    "header": {
      "title": "CodingStones",
      "subtitle": "Bot",
      "search": "Search"
    },
    "dialogs": {
      "first": {
        "name": "Favorite",
        "message": ""
      },
      "second": {
        "name": "CodingStones",
        "message": "New message"
      },
      "third": {
        "name": "Ivan Petrov",
        "message": "Thank for link!"
      },
      "fourth": {
        "name": "Ivan Petrov",
        "message": "Pushed it yesterday"
      }
    },
    "messages": {
      "first": "This is example of text message",
      "second": "This is example of text message"
    },
    "footer": {
      "placeholder": "Type a message..."
    }
  },
  "ru": {
    "header": {
      "title": "CodingStones",
      "subtitle": "Бот",
      "search": "Поиск"
    },
    "dialogs": {
      "first": {
        "name": "Избранное",
        "message": "Купить хлеб"
      },
      "second": {
        "name": "CodingStones",
        "message": "Новое сообщение"
      },
      "third": {
        "name": "Ivan Petrov",
        "message": "Спасибо за ссылку!"
      },
      "fourth": {
        "name": "Alex Brown",
        "message": "Released it yesterday"
      }
    },
    "messages": {
      "first": "Пример первого сообщения",
      "second": "Пример второго сообщения"
    },
    "footer": {
      "placeholder": "Введите сообщение..."
    }
  }
}
</i18n>