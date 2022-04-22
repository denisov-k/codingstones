<template>
  <div class="messenger">
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
          <div class="avatar"></div>
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
          <inline-svg :src="require('@/assets/welcome/messenger/phone.svg')" />
          <inline-svg :src="require('@/assets/welcome/messenger/window.svg')" />
          <inline-svg :src="require('@/assets/welcome/messenger/setting-dots.svg')" />
        </div>
      </div>
      <transition-group name="fade" tag="div" class="body">
        <div class="message" key="0">
          <div class="content">
            <img src="@/assets/welcome/messenger/piechart.svg">
            <span>{{ $t('message.first') }}</span>
          </div>
          <inline-svg :src="require('@/assets/welcome/messenger/share.svg')" class="share" />
        </div>
        <div class="message" key="1" v-if="isNewMessageDisplayed">

          <div class="content">
            <img src="@/assets/welcome/messenger/barchart.svg">
            <span>{{ $t('message.second') }}</span>
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

export default {
  name: "Messenger",
  components: {

  },
  data() {
    return {
      dialogs: [
        { avatar: '', name: 'Имя 1', message: 'Новое сообщение' },
        { avatar: '', name: 'CodingStones', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 3', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 4', message: 'Новое сообщение' },
      ],
      selectedDialogIndex: 1,
      isNewMessageDisplayed: false
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
    background-image: url("@/assets/welcome/messenger/background.png");
    font-size: 8px;
    border-radius: inherit;
  }
  .header, .footer {
    display: flex;
    height: 30px;
    width: 100%;
    padding: 0 8px;
    box-sizing: border-box;
    align-items: center;
  }
  .sidebar {
    min-width: 30%;
    max-width: 35%;
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
    height: 8px;
    width: auto;
  }
  .header .search-box {
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    background-color: #e5e5e5;
    border-radius: 2px;
    height: 18px;
    margin-left: 7px;
  }
  .search-box .placeholder {
    padding: 0 6px;
    color: #686868;
  }
  .sidebar .dialogs {
    height: calc(100% - 35px);
  }
  .dialog {
    display: flex;
  }
  .dialog.selected {
    background-color: #a9c5f0;
  }
  .dialog .avatar {
    width: 28px;
    margin: 10px;
    background-color: #678291;
    border-radius: 16px;
    height: 28px;
  }
  .dialog .name {

  }
  .dialog .message {
    color: #335cd2;
  }

  .main {
    width: -webkit-fill-available;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    border-radius: inherit;
  }
  .main .header {
    justify-content: space-between;
    background-color: $interface-color;

    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    border-bottom: 1px solid #d5d5d5;
  }
  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /*margin: 0 0.5vw;*/
    justify-content: center;
  }
  .titles > span {
    margin: 1px 0;
    color: #000000;
  }
  .subtitle {
    color: #686868;
  }
  .controls {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .controls > svg {
    margin: 0 5px;
    fill: #7c7c7c;
    height: 10px;
  }
  .main .body {
    height: calc(100% - 66px);
    z-index: 10;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 3px 0;
    overflow: hidden;
    position: absolute;
    bottom: 30px;
  }
  .body .message {
    display: flex;
    margin: 2px 5px;
    align-items: flex-end;
    max-width: 250px;
  }

  .message .share {
    flex: none;
    width: 24px;
    height: 24px;
    border-radius: 16px;
    background-color: #0000001c;
    margin-left: 10px;
    fill: #1d2429;
    padding: 5px;
    box-sizing: border-box;
  }
  .message:not(:last-child) .avatar {
    opacity: 0;
  }
  .message .content {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 3px;
    width: 100%;
  }
  .message .content img {
    width: 100%;
    margin-bottom: 5px;
  }
  .message .content span {
    color: #6b6b6b;
    text-align: left;
    font-size: 10px;
  }

  .main .footer {
    background-color: $interface-color;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: inherit;
    border-top: 1px solid #d5d5d5;
  }
  .footer .placeholder {
    width: -webkit-fill-available;
    font-size: 8px;
    color: #686868;
    align-self: center;
    text-align: left;
    padding: 0 2%;
    box-sizing: border-box;
  }
  .footer > svg {
    margin: 0 5px;
    fill: #7c7c7c;
    height: 12px;
  }
  @media only screen and (max-width: 600px) {
    .sidebar {
      display: none;
    }
    .header {
      height: 40px;
      padding: 10px 15px 0;
    }
    .body {
      height: calc(100% - 86px) !important;
      bottom: 40px !important;
      margin: 2px 0;
    }
    .footer {
      height: 40px;
      padding: 0 10px 12px;
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
    },
    "message": {
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
    "message": {
      "first": "Пример первого сообщения",
      "second": "Пример второго сообщения"
    },
    "footer": {
      "placeholder": "Введите сообщение..."
    }
  }
}
</i18n>