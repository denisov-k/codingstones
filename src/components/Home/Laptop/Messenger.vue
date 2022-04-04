<template>
  <div class="messenger">
    <div class="sidebar">
      <div class="header">
        <div class="menu-button">
          <icon-menu></icon-menu>
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
          <component v-for="(item, index) in controls" :is="item" :key="index"></component>
        </div>
      </div>
      <div class="body">
        <div class="message">
          <div class="avatar"></div>
          <div class="message-text"></div>
        </div>
      </div>
      <div class="footer">
        <icon-clip></icon-clip>
        <span class="placeholder">{{ $t('footer.placeholder') }}</span>
        <icon-smile></icon-smile>
        <icon-send-message></icon-send-message>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

import IconMenu from '@/assets/welcome/desktop/burger-menu.svg?inline';
import IconClip from '@/assets/welcome/desktop/clip.svg?inline';
import IconSendMessage from '@/assets/welcome/desktop/send-button.svg?inline';
import IconSmile from '@/assets/welcome/desktop/smileys.svg?inline';

import SearchIcon from '@/assets/welcome/desktop/search.svg?inline';
import PhoneIcon from '@/assets/welcome/desktop/phone.svg?inline';
import DotsIcon from '@/assets/welcome/desktop/setting-dots.svg?inline';
import WindowIcon from '@/assets/welcome/desktop/window.svg?inline';

export default {
  name: "Messenger",
  components: {
    'v-icon': Icon,
    IconMenu, IconSmile, IconSendMessage, IconClip
  },
  data() {
    return {
      dialogs: [
        { avatar: '', name: 'Имя 1', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 2', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 3', message: 'Новое сообщение' },
        { avatar: '', name: 'Имя 4', message: 'Новое сообщение' },
      ],
      controls: [
        SearchIcon,
        PhoneIcon,
        WindowIcon,
        DotsIcon,
      ],
      selectedDialogIndex: 1
    }
  },
}
</script>

<style lang="scss" scoped>
  $interface-color: #1d2429;

  svg path {
    fill: inherit;
  }

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