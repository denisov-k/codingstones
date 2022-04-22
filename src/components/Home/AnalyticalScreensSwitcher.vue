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
    font-size: 17px;
    color: #747474;
    margin: 20px 0;
    text-align: center;
  }
  .item {
    display: inline-flex;
    margin: 0 2%;
    line-height: 32px;
    align-items: center;
  }
  .item:nth-child(1) {
    margin-left: 0;
  }
  .item .label {
    cursor: pointer;
    text-decoration-line: underline;
    text-underline-position: under;
    text-decoration-color: #aeaeae;
  }
  .item.selected .label {
    color: black;
    text-decoration-color: #335cd2;
  }
  .item .external-link {
    cursor: pointer;
    width: 22px;
    padding: 0 5px;
    fill: #a7a7a7;
    border-radius: 20px;
    box-sizing: border-box;
    height: 22px;
    margin-left: 2px;
  }
  .item .external-link:hover {
    background-color: #eeeeee;
  }

  .tablet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 7px solid #080808;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: inset 0 0 3px #000000;
    width: 100%;
    box-sizing: border-box;
  }
</style>