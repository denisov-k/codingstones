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
      <div class="body">
        <div class="message">
          <div class="avatar"></div>
          <div class="message-text">{{ $t('message.first') }}</div>
        </div>
        <div class="message" v-if="isNewMessageDisplayed">
          <div class="avatar"></div>
          <div class="message-text">{{ $t('message.second') }}</div>
        </div>
      </div>
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
  $interface-color: #1d2429;

  .messenger {
    display: flex;
    height: 100%;
    background-color: #0e1820;
    font-size: 8px;
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
  }
  @media only screen and (max-width: 600px) {
    .sidebar {
      display: none;
    }
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
    background-color: #0e1820;
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
    background-color: #292f47;
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
    margin-left: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .main .header {
    justify-content: space-between;
    background-color: $interface-color;
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
    height: calc(100% - 60px);
    z-index: 10;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 3px 0;
  }
  .message {
    display: flex;
    margin: 2px 5px;
  }
  .message .avatar {
    min-width: 26px;
    min-height: 26px;
    border-radius: 16px;
    background-color: #335cd2;
    margin-right: 5px;
  }
  .message:not(:last-child) .avatar {
    opacity: 0;
  }
  .message-text {
    background-color: #383639;
    padding: 5px;
    border-radius: 3px;
    font-size: 9px;
  }

  .main .footer {
    background-color: $interface-color;
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
      "first": "This is example of text message"
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
      "first": "Пример первого сообщения"
    },
    "footer": {
      "placeholder": "Введите сообщение..."
    }
  }
}
</i18n>