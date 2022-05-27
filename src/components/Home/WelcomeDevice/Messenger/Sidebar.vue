<template>
  <div class="sidebar">
    <div class="header">
      <div class="menu-button">
        <inline-svg :src="require('./assets/burger-menu.svg')" />
      </div>
      <div class="search-box">
        <span class="placeholder">{{ $t('header.search') }}</span>
      </div>
    </div>
    <div class="dialogs">
      <div class="dialog" v-for="(item, index) in dialogsList" :key="index"
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
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    dialogsList() {
      return this.dialogs;
    }
  },
  data: function () {
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
    }
  }
}
</script>

<style lang="scss" scoped>
$interface-color: #fff;

.sidebar {
  display: flex;
  flex-direction: column;
  min-width: 30%;
  max-width: 33%;
  height: 100%;
  background-color: $interface-color;
  border-right: 1px solid #d5d5d5;

  .header {
    .menu-button {
      display: flex;
      fill: #7c7c7c;
      padding: 0 2px;

      svg {
        height: 0.6rem;
        width: auto;
      }
    }
    .search-box {
      display: flex;
      align-items: center;
      width: stretch;
      background-color: #e5e5e5;
      border-radius: 0.25rem;
      height: 60%;
      margin-left: 0.7rem;

      .placeholder {
        padding: 0 0.5rem;
        color: #686868;
      }
    }
  }
  .dialogs {

  }
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
  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 1vh 0;

    .name {
      font-weight: 600;
      color: #333;
    }
    .message {
      color: #686868;
    }
  }

  &.selected {
    background-color: #dfddff;

    .message {
      color: #335cd2;
    }
  }
}
</style>
<i18n>
{
  "en": {
    "header": {
      "search": "Search"
    },
    "dialogs": {
      "first": {
        "name": "Favorite",
        "message": " "
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
    }
  },
  "ru": {
    "header": {
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
    }
  }
}
</i18n>