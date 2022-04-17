<template>
  <div id="smart-feed">
    <div class="row">
      <div class="col-xs-12 col-md-8 col-lg-8">
        <div id="selected-widget-container">
          <keep-alive>
            <component :is="selectedWidget.component"></component>
          </keep-alive>
        </div>
      </div>
      <div class="col-xs-12 col-md-4 col-lg-4">
        <div class="widgets-feed">
          <div class="widgets-search">
            <multiselect class="input" v-model="selectedTags" :options="tags"
                         :multiple="true" label="name" :placeholder="$t('search.placeholder')"
                         trackBy="name" tagPosition="bottom" :closeOnSelect="false" :limit="3"
                         :searchable="false" :limitText="(count) => $t('search.limitText', { count })">
              <template v-slot:tag="{ option }">
                <span class="option__title" :style="{ color: option.color }">{{ option.name }}</span>
              </template>
            </multiselect>
          </div>
          <div class="widgets-list">
            <div class="feed-item" v-for="(widget, widgetIndex) in widgetsList" :key="widgetIndex"
                 :class="[ widget === selectedWidget ? 'selected' : ''  ]">

              <component  :is="widget.component" @click.native="selectWidget(widget)" ref="widgets">
              </component>

              <div class="tags">
                <div class="tag" v-for="(tagId, tagIndex) in widget.tags" :key="tagIndex"
                     :style="{ color: tags[tagId].color }">
                  {{ tags[tagId].name }}
                </div>
              </div>
            </div>
            <div class="no-result" v-if="isNoResultShow">{{ $t('search.noResult') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

let Sunburst = () => import('@/components/Analytics/SmartFeed/Sunburst'),
    FlightChart = () => import('@/components/Analytics/SmartFeed/FlightChart'),
    LineRace = () => import('@/components/Analytics/SmartFeed/LineRace'),
    BubbleChart = () => import('@/components/Analytics/SmartFeed/BubbleChart');

export default {
  name: "SmartFeed",
  components: { Multiselect },
  computed: {
    selectedWidget() {
      return this.widgets[this.selectedWidgetIndex];
    },
    widgetsList() {
      let selectedTags = this.selectedTags.map(item => item.name);

      return this.widgets.filter((item, index) =>
          !this.selectedTags.length || item.tags.some(tagIndex => selectedTags.includes(this.tags[tagIndex].name))
      )
    },
    isNoResultShow() {
      return !this.widgetsList.length || (this.widgetsList.length === 1 && this.widgetsList[0] === this.selectedWidget);
    }
  },
  data: function () {
    return {
      searchInputValue: "",
      selectedWidgetIndex: 0,
      selectedTags: [],
      tags: [
        { name: 'Diagram', color: '#2269a2' },
        { name: 'Income', color: '#ca5d10' },
        { name: 'tag_with_long_name', color: '#299d2e' },
        { name: 'tag_4', color: '#9433ab' },
      ],
      widgets: [
        { component: Sunburst, tags: [0] },
        { component: LineRace, tags: [0, 1] },
        { component: FlightChart, tags: [2, 3] },
        { component: BubbleChart, tags: [0, 3] },
      ],
    }
  },
  created() {
    this.getTitles();
  },
  methods: {
    selectWidget(widget) {
      this.selectedWidgetIndex = this.widgets.indexOf(widget);
    },
    getTitles() {

    }
  }
}
</script>

<i18n>
{
  "en": {
    "title": "Active widget",
    "subtitle": "Available data",
    "search": {
      "placeholder": "Search by tags",
      "limitText": "and {count} more",
      "noResult": "No result more"
    }
  },
  "ru": {
    "title": "Активный виджет",
    "subtitle": "Доступные данные",
    "search": {
      "placeholder": "Поиск по тегам",
      "limitText": "и {count} ещё",
      "noResult": "Результатов больше нет"
    }
  }
}
</i18n>

<style lang="scss" scoped>
  $text-color: #dadada;

  #smart-feed {
    padding: 1%;
    background-color: #eceef0;
    background-image: url("@/assets/analytics/smart_feed/background_2.jpg");
    background-size: cover;
    background-position: center;

    .title {
      color: $text-color;
      margin: 20px 10px;
    }
    .subtitle {
      color: $text-color;
      margin: 20px 10px;
    }
  }

  .widget-container.expanded /deep/ {
    .widget {
      background-color: #121212;
    }
  }
  .widget-container /deep/ {
    height: 600px;

    .widget {
      background-color: #0000008c;
    }
    .title {
      color: $text-color;
    }
    .button {
      fill: $text-color;
    }
  }

  .widgets-search /deep/ {
    margin: 10px 0;

    .input {
      position: relative;
      width: 100%;
      background-color: #0000008c;
      color: #dadada;
      padding: 8px 15px;
      border-radius: 5px;
      border: unset;
      font-size: 14px;
      box-sizing: border-box;
      cursor: pointer;
    }
    .multiselect__tags {
      font-size: 14px;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
    .multiselect__element {
      margin: 1px 0;
    }
    .multiselect__element:first-child {
      margin-top: 0;
    }
    .multiselect__element:last-child {
      margin-bottom: 0;
    }
    .multiselect__element:has(.multiselect__option--selected) {
      background-color: green;
    }
    .multiselect__element:hover {
      background-color: #292929;
    }
    .multiselect__content-wrapper {
      background: #000000eb;
      width: 100%;
      position: absolute;
      left: 0;
      z-index: 1;
      border-radius: 0 0 5px 5px;
      top: calc(100% - 5px);
      color: white;
    }
    .multiselect__content {
      width: 100%;
      list-style-type: none;
      padding-inline-start: 0;
      margin: auto;
    }
    .multiselect__tags-wrap {
      display: flex;
      margin-right: 8px;
    }
    .multiselect__strong {

    }
    .multiselect__option {
      display: flex;
      cursor: pointer;
      padding: 5px;
      box-sizing: border-box;
    }
    .multiselect__option--selected {
      background: #103b1b;
    }
    .option__title {
      background-color: #1c1c1c;
      margin: 5px;
      padding: 3px 5px;
      border-radius: 5px;
      display: flex;
      height: fit-content;
    }
    .option__title:first-child {
      margin-left: 0;
    }
    .option__title:last-child {
      margin-right: 0;
    }
  }

  .widgets-list::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .widgets-list::-webkit-scrollbar-track {
    background-color: black;
    border-radius: 25px;
  }

  .widgets-list::-webkit-scrollbar-thumb {
    background: #4e4e4e;
    border-radius: 25px;
  }

  .widgets-feed {
    max-height: 610px;
    display: flex;
    flex-direction: column;
  }
  .widgets-list /deep/ {
    overflow: auto;
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: column;

    .feed-item {
      margin: 10px 10px 10px 0;

      .widget-container {
        margin: 0;
        height: 300px;
        cursor: pointer;

        .widget-buttons {
          display: none;
        }
        .widget-content {
          pointer-events: none;
          zoom: 0.75;
        }
        .expanded .widget-content {
          zoom: 1;
        }
      }

      .tags {
        margin: 2px 0;

        .tag {
          display: inline-block;
          background-color: #0000008c;
          border-radius: 5px;
          font-size: 10px;
          padding: 3px;
          margin: 0 2px;
          cursor: pointer;
        }
        .tag:first-child {
          margin-left: 0;
        }
        .tag:last-child {
          margin-right: 0;
        }
        .tag:hover {
          background-color: #00000063;
        }
      }
    }
    .feed-item.selected {
      display: none;
    }
    .feed-item:first-child {
      margin-top: 0;
    }
    .feed-item:last-child {
      margin-bottom: 0;
    }
    .no-result {
      width: 100%;
      background-color: #0000008c;
      color: #dadada;
      padding: 8px 15px;
      border-radius: 5px;
      box-sizing: border-box;
    }
  }

  @media only screen and (max-width: 1024px) {
    .widgets-search {
      margin: 10px;
    }
    .widgets-list {
      margin: 10px;
      white-space: nowrap;
      flex-direction: row;

      .widget-container {
        width: 350px;
        height: 400px;
        display: inline-flex;
      }
      .feed-item:last-child {
        margin: 10px 0 10px 10px;
      }
      .feed-item:first-child {
        margin: 10px 10px 10px 0;
      }
    }
  }
</style>