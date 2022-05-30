<template>
  <div class="slider">
    <div class="navigation">
      <div v-for="(item, index) in list" :key="index"
            :class="[ activeItemIndex === index ? 'selected' : ''  ]"
            class="item">
        <span class="label" v-on:click="setActiveItem(index)">{{ item.name }}</span>
        <inline-svg class="external-link" @click="redirect(item.route)"
                    :src="require('@/assets/analytics/external-link.svg')"></inline-svg>
      </div>
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
        { name: $t('list.classic.name'), view: () => import("@/views/Analytics/Classic"),
          route: 'classic_analytic' },
        { name: $t('list.smart_feed.name'), view: () => import("@/views/Analytics/SmartFeed"),
          route: 'smart_feed' },
        { name: $t('list.personal_account.name'), view: () => import("@/views/Analytics/PersonalAccount"),
          route: 'personal_account' },
        { name: $t('list.gamification.name'), view: () => import("@/views/Analytics/Gamification"),
          route: 'gamification' },
      ]
    },
    activeItem: function () {
      return this.list[this.activeItemIndex].view;
    },
  },
  methods: {
    setActiveItem(itemIndex) {
      this.activeItemIndex = itemIndex;
    },
    redirect(route) {
      let routeData = this.$router.resolve({ name: route });
      window.open(routeData.href, '_blank');
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
      "personal_account": {
        "name": "Personal account"
      },
      "gamification": {
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
      "personal_account": {
        "name": "Личный кабинет"
      },
      "gamification": {
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
    font-size: 1.25rem;
    color: #747474;
    margin: 3vh 0;
    text-align: center;
  }
  .item {
    display: inline-flex;
    margin: 0 2%;
    line-height: 2.5rem;
    align-items: center;
  }
  .item:first-child {
    margin-left: 0;
  }
  .item:last-child {
    margin-right: 0;
  }
  .item .label {
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-position: under;
    text-decoration-color: #aeaeae;
    white-space: nowrap;
  }
  .item.selected .label {
    color: black;
    text-decoration-color: #335cd2;
  }
  .item .external-link {
    cursor: pointer;
    width: auto;
    padding: 0.3vw 0.3vw;
    fill: #929292;
    border-radius: 0.5vw;
    box-sizing: border-box;
    height: 1.25rem;
    margin: 0 0.3rem;
  }
  .item .external-link:hover {
    outline: 1px dashed #c8c8c8;
    outline-offset: -1px;
  }

  .tablet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: inset 0 0 0.5vw #000000;
    width: 100%;
    box-sizing: border-box;
    border: 0.6rem solid #080808;
  }
</style>