<template>
  <div id="personal-account">
    <div class="sidebar">
      <profile :userdata="userdata"></profile>
      <navigation :pages="pages"></navigation>
    </div>
    <div class="header">

    </div>
    <div class="main">
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
      title: 'Пример аналитического экрана',
      subtitle: 'Ещё один заголовок',
      pages: [
        { name: 'General' },
        { name: 'Team' },
        { name: 'Events' },
      ],
      userdata: {
        name: 'Bess Willis',
        description: 'willisbs@gmail.com',
        avatar: require('@/assets/analytics/personal_account/avatar.jpg'),
        stats: [
          { name: 'blood', value: '-B' },
          { name: 'height', value: '170' },
          { name: 'weight', value: '60' },
        ]
      }
    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Title",
    "subtitle": "Subtitle"
  },
  "ru": {
    "title": "Пример аналитического экрана",
    "subtitle": "Ещё один заголовок"
  }
}
</i18n>

<style lang="scss" scoped>
  $text-color: #545454;

  #personal-account {
    width: 100%;
    box-sizing: border-box;
    padding: 1%;
    background-color: #eceef0;
    background-image: url("@/assets/analytics/personal_account/background.png");
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
    }
  }
</style>