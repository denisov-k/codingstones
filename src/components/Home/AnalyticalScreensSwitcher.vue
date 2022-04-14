<template>
  <div class="slider">
    <div class="navigation">
      <span v-for="(item, index) in list" :key="index" v-on:click="setActiveItem(index)"
            :class="[ activeItemIndex === index ? 'selected' : ''  ]"
            class="item-label">{{ item.name }}</span>
    </div>

    <component class="tablet" :is="activeItem"></component>

  </div>
</template>

<script>
export default {
  name: "AnalyticalScreensSlider",
  components: {

  },
  data() {
    return {
      activeItemIndex: 0,
    }
  },
  computed: {
    list: function () {
      const $t = this.$t.bind(this)

      return [
        { name: $t('list.classic.name'), view: () => import("@/views/Analytics/Classic") },
        { name: $t('list.second.name'), view: () => import("@/views/Analytics/Draft2") },
        { name: $t('list.third.name'), view: () => import("@/views/Analytics/Draft3") },
        { name: $t('list.smart_feed.name'), view: () => import("@/views/Analytics/SmartFeed") },
      ]
    },
    activeItem: function () {
      return this.list[this.activeItemIndex].view;
    },
  },
  methods: {
    setActiveItem(itemIndex) {
      this.activeItemIndex = itemIndex;
    }
  }
}
</script>

<i18n>
{
  "en": {
    "list": {
      "classic": {
        "name": "Classic dashboard"
      },
      "second": {
        "name": "Personal analytic"
      },
      "third": {
        "name": "Gamification"
      },
      "smart_feed": {
        "name": "Smart feed"
      }
    }
  },
  "ru": {
    "list": {
      "classic": {
        "name": "Классическая аналитика"
      },
      "second": {
        "name": "Личный кабинет"
      },
      "third": {
        "name": "Геймификация"
      },
      "smart_feed": {
        "name": "Умная лента"
      }
    }
  }
}
</i18n>

<style scoped>
  .navigation {
    font-size: 17px;
    color: #747474;
    margin: 25px 0;
    text-align: center;
  }
  .item-label {
    display: inline-block;
    cursor: pointer;
    line-height: 30px;
    padding: 0 2%;
    text-decoration-line: underline;
    text-underline-position: under;
    text-decoration-color: #aeaeae;
  }
  .item-label:nth-child(1) {
    padding-left: 0;
  }
  .item-label.selected {
    color: black;
    text-decoration-color: #335cd2;
  }

  .tablet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    border: 7px solid #080808;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: inset 0 0 3px #000000;
  }
</style>