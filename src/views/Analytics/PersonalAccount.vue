<template>
  <div id="personal-account">
    <div class="sidebar">
      <profile :userdata="userdata"></profile>
      <navigation :pages="pages"></navigation>
    </div>
    <div class="main">
      <h3>{{ $t('title', { name: userdata.firstname }) }}</h3>
      <span class="subtitle">{{ $t('subtitle', { weekday, date }) }}</span>
      <line-chart></line-chart>
    </div>
  </div>
</template>

<script>
import TreeChart from "@/components/Analytics/PersonalAccount/TreeChart";
import PieChart from "@/components/Analytics/PersonalAccount/PieChart";
import BarChart from "@/components/Analytics/PersonalAccount/BarChart";
import Profile from "@/components/Analytics/PersonalAccount/Profile";
import Heatmap from "@/components/Analytics/PersonalAccount/Heatmap";
import Navigation from "@/components/Analytics/PersonalAccount/Navigation";
import LineChart from "@/components/Analytics/PersonalAccount/LineChart";

export default {
  name: "PersonalAccount",
  components: {
    Heatmap,
    Profile,
    Navigation,
    LineChart,
    TreeChart,
    PieChart,
    BarChart,
  },
  data: () => {
    return {

    }
  },
  computed: {
    weekday() {
      let date = new Date();
      return date.toLocaleString(this.$i18n.locale, { weekday: 'long' });
    },
    date() {
      const date = new Date();
      return date.toLocaleDateString(this.$i18n.locale, { dateStyle: 'long' });
    },
    pages() {
      const $t = this.$t.bind(this);

      return [
        { name: $t('page_1') },
        { name: $t('page_2') },
        { name: $t('page_3') },
      ];
    },
    userdata() {
      const $t = this.$t.bind(this);

      return {
        firstname: $t('user.firstname'),
        surname: $t('user.surname'),
        description: 'willisbs@gmail.com',
        avatar: require('@/assets/analytics/personal_account/avatar.jpg'),
        stats: [
          { name: $t('user.stat_1'), value: '-B' },
          { name: $t('user.stat_2'), value: '170' },
          { name: $t('user.stat_3'), value: '60' },
        ]
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Hello, {name}",
    "subtitle": "Today is {weekday}, {date}",
    "user": {
      "firstname": "Bess",
      "surname": "Bess",
      "stat_1": "Blood",
      "stat_2": "Height",
      "stat_3": "Weight"
    },
    "page_1": "General",
    "page_2": "Team",
    "page_3": "Events"
  },
  "ru": {
    "title": "Привет, {name}",
    "subtitle": "Сегодня {weekday}, {date}",
    "user": {
      "firstname": "Екатерина",
      "surname": "Иванова",
      "stat_1": "Кровь",
      "stat_2": "Рост",
      "stat_3": "Вес"
    },
    "page_1": "Основное",
    "page_2": "Команда",
    "page_3": "События"
  }
}
</i18n>

<style lang="scss" scoped>
  $text-color: #545454;

  #personal-account {
    width: 100%;
    box-sizing: border-box;
    padding: 1%;
    background-color: #d5dadf;
    /*background-image: url("@/assets/analytics/personal_account/background.png");*/
    flex-direction: row;

    .title {
      color: $text-color;
      margin: 20px 10px;
    }
    .subtitle {
      color: $text-color;
      margin: 20px 10px;
    }
    .widget-container /deep/ {
      margin: 0.7rem;

      .widget {
        background-color: unset;
        border: 1px solid #00000052;
      }
      .widget-header {
        .title {
          font-size: 1rem;
          color: $text-color;
        }
        .button {
          height: 1rem;
          padding: 0 0.4rem;
          fill: $text-color;
        }
      }

      &.expanded .widget {
        background-image: url("@/assets/analytics/personal_account/background.png");
      }
    }
    .sidebar {
      width: 15rem;
    }
    .main {
      flex: 1;
      text-align: left;

      h3 {
        font-size: 1.25rem;
        margin: 0.7rem;
      }
      .subtitle {
        font-size: 1rem;
        margin: 0.7rem;
      }
    }
  }
</style>