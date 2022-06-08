<template>
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
        <inline-svg class="share" :src="require('@/assets/welcome/messenger/share.svg')" />
      </div>
    </transition-group>
    <div class="footer">
      <inline-svg :src="require('@/assets/welcome/messenger/clip.svg')" />
      <span class="placeholder">{{ $t('footer.placeholder') }}</span>
      <inline-svg :src="require('@/assets/welcome/messenger/smileys.svg')" />
      <inline-svg :src="require('@/assets/welcome/messenger/send-button.svg')" />
    </div>
  </div>
</template>

<script>

const images = [
  require("./assets/piechart.svg"),
  require("./assets/barchart.svg")
];

export default {
  name: "Main",
  computed: {
    messagesList: function () {
      return this.messages.filter((item, index) => index !== 1 || this.isNewMessageDisplayed);
    }
  },
  data() {
    const $t = this.$t.bind(this);

    return {
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

  .main /deep/ {
    width: stretch;
    display: flex;
    flex: 1;
    background-image: url("@/assets/welcome/messenger/background.png");
    flex-direction: column;
    justify-content: space-between;

    .header {
      justify-content: space-between;
      background-color: $interface-color;
      border-bottom: 1px solid #d5d5d5;

      .titles {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 1vh 0;

        span {
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
      }
      .controls {
        height: 100%;
        display: flex;
        align-items: center;

        svg {
          fill: #7c7c7c;
          height: 1rem;
          margin: 0 0.5rem;
        }
      }
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
      margin: 0;
      flex: 1;

      .message {
        display: flex;
        align-items: flex-end;
        max-width: 60%;
        min-width: 275px;
        margin: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }
        &:not(:last-child) .avatar {
          opacity: 0;
        }

        .content {
          display: flex;
          flex-direction: column;
          background-color: #ffffff;
          padding: 0.5rem;
          border-radius: 0.5rem;
          width: 100%;
          box-shadow: 0 0 0.5vh #afafaf;

          &:hover {
            /*background-color: #0d1223;*/
          }
          img {
            width: 100%;
            margin-bottom: 1vh;
          }
          span {
            color: #4c4b4b;
            text-align: left;
            font-size: .9rem;
          }
        }

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

      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.35);
        border-radius: 25px;
      }
      &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.25);
        border-radius: 25px;
      }
    }
    .footer {
      min-height: 2.5rem;
      background-color: #fff;
      border-top: 1px solid #d5d5d5;

      .placeholder {
        width: stretch;
        color: #686868;
        align-self: center;
        text-align: left;
        padding: 0 2%;
        box-sizing: border-box;
      }
      svg {
        margin: 0 0.5rem;
        fill: #7c7c7c;
        height: 1rem;
      }
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
    "messages": {
      "first": "Dataset for last week",
      "second": "Abnormal change of favorite metric"
    },
    "footer": {
      "placeholder": "Type a message..."
    }
  },
  "ru": {
    "header": {
      "title": "CodingStones",
      "subtitle": "Бот"
    },
    "messages": {
      "first": "Данные за прошедую неделю",
      "second": "Аномальное изменение метрики из избранного"
    },
    "footer": {
      "placeholder": "Введите сообщение..."
    }
  }
}
</i18n>