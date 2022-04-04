<template>
  <div class="messenger">
    <div class="sidebar">
      <div class="header">
        <div class="menu-button">
          <v-icon name="bars" />
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
          <search-icon />
          <v-icon name="envelope" />
          <v-icon name="envelope" />
          <v-icon name="envelope" />
        </div>
      </div>
      <div class="body">

      </div>
      <div class="footer">
        <v-icon name="envelope" />
        <span class="placeholder">{{ $t('footer.placeholder') }}</span>
        <v-icon name="face-smile" />
        <v-icon name="paper-plane-top" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';
import SearchIcon from '@/assets/welcome/desktop/search-icon.svg?inline';

console.log(SearchIcon)

export default {
  name: "Messenger",
  components: {
    'v-icon': Icon,
    SearchIcon
  },
  data() {
    return {
      dialogs: [
        { avatar: '', name: 'Имя 1', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 2', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 3', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 4', message: 'Новое сообщение' },
      ],
      selectedDialogIndex: 1
    }
  },
}
</script>

<style lang="scss" scoped>
  $interface-color: #1d2429;

  .messenger {
    display: flex;
    height: 100%;
    background-color: #0e1820;
  }
  .header, .footer {
    display: flex;
    height: 7%;
    width: 100%;
  }
  .sidebar {
    width: 30%;
    height: 100%;
    background-color: $interface-color;
  }
  .sidebar .header {

  }
  .header .menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    fill: #7c7c7c;
    padding: 0 0.7vw;
  }
  .menu-button svg {
    width: 1.1vw;
  }
  .header .search-box {
    display: flex;
    align-items: center;
    width: 85%;
    background-color: #0e1820;
    margin: 0.4vw;
    border-radius: 2px;
  }
  .search-box .placeholder {
    font-size: 0.9vw;
    padding: 0 0.7vw;
    color: #686868;
  }
  .sidebar .dialogs {
    height: 93%;
  }
  .dialog {
    display: flex;
    height: 15%;
  }
  .dialog.selected {
    background-color: #292f47;
  }
  .dialog .avatar {
    width: calc(27% - 2vw);
    margin: 1vw;
    background-color: #678291;
    border-radius: 16px;
    height: calc(100% - 2vw);
  }
  .dialog .name {

  }
  .dialog .message {
    color: #335cd2;
  }

  .main {
    width: 70%;
    height: 100%;
    margin-left: 1px;
  }
  .main .header {
    justify-content: space-between;
    background-color: $interface-color;
    padding: 0 0.5vw;
    box-sizing: border-box;
  }
  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 0.9vw;
    margin: 0 0.5vw;
    justify-content: center;
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
    width: 1.1vw;
    margin: 0 0.5vw;
    fill: #7c7c7c;
    height: auto;
  }
  .main .body {
    height: 86%;
  }
  .main .footer {
    background-color: $interface-color;
  }
  .footer .placeholder {
    width: 80%;
    font-size: 1.2vw;
    color: #686868;
    align-self: center;
    text-align: left;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .footer > svg {
    margin: auto;
    fill: #7c7c7c;
    width: 1.1vw;
    height: auto;
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
    "message": {

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

    },
    "footer": {
      "placeholder": "Введите сообщение..."
    }
  }
}
</i18n>