<template>
  <div class="feed-item" :class="[ widget.selectable ? 'selectable' : '' ]">

    <component  :is="widget.component" @click.native="selectWidget(widget)" ref="widgets">
    </component>
    <div class="widget-footer">
      <div class="tags">
        <div class="tag" v-for="(tagId, tagIndex) in widget.tags" :key="tagIndex"
             :style="{ color: tags[tagId].color }" @click="onTagClick(tagId)">
          {{ tags[tagId].name }}
        </div>
      </div>
      <div style="display:flex;">
        <div class="views">
          <inline-svg :src="require('@/assets/analytics/smart_feed/views-icon.svg')" />
          <span class="views-count">{{ widget.views }}</span>
        </div>
        <div class="favorite-button" :class="[ widget.inFavorite ? 'active' : '']"
             @click="onFavoriteButtonClick(widget)">
          <inline-svg :src="require('@/assets/analytics/smart_feed/favorite-icon.svg')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedItem",
  props: {
    widget: Object,
  },
  computed: {
    tags() {
      return this.$parent.tags;
    }
  },
  mounted() {
      this.$el.onmousewheel = (event) => {
        event.stopPropagation();
      }
  },
  methods: {
    selectWidget(widget) {
      return this.$parent.selectWidget(widget);
    },
    onTagClick(id) {
      return this.$parent.onTagClick(id);
    },
    onFavoriteButtonClick(widget) {
      return this.$parent.onFavoriteButtonClick(widget);
    }
  }
}
</script>

<style lang="scss" scoped>
  $text-color: #aeaeae;
  $container-color: #00000070;

  .feed-item /deep/ {
    margin: 0.5rem 0.5rem 0.5rem 0;

    & .selectable /deep/ {
      .widget-content {
        pointer-events: none;
        zoom: 0.75;
      }
      .expanded .widget-content {
        zoom: 1;
      }
    }

    .widget-container {
      margin: 0;
      height: 25rem;
      cursor: pointer;

      .widget {
        background-color: $container-color;
        border-radius: 1rem;
      }
      .widget:hover {
        background-color: #00000091;
      }
      .widget-header {
        .title {
          font-size: 1rem;
          color: $text-color;
          margin: 0.75rem;
        }

        .widget-buttons {
          display: none;

          .button {
            fill: $text-color;
          }
        }
      }
    }
    .widget-footer {
      display: flex;
      margin: 4px 0;
      justify-content: space-between;

      .tags {
        display: inline-flex;
        margin: 0 -0.25rem;

        .tag {
          display: inline-block;
          background-color: $container-color;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          margin: 0 0.25rem;
          cursor: pointer;
        }
        .tag:hover {
          background-color: #00000063;
        }
      }
      .favorite-button {
        background-color: $container-color;
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;
        margin: 0 0.25rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;

        svg {
          fill: #8484844a;
          height: 0.75rem;
        }
      }
      .favorite-button.active {
        svg {
          fill: #a53c3c;
        }
      }
      .favorite-button:hover {
        svg {
          fill: #ae495b;
        }
      }
      .views {
        display: inline-flex;
        align-items: center;
        margin: 0 0.25rem;
        background-color: $container-color;
        border-radius: 0.5rem;
        padding: 0.25rem 0.5rem;

        svg {
          fill: #9d9d9d;
          width: 100%;
          height: 0.75rem;
        }

        .views-count {
          font-size: 0.75rem;
          color: #9d9d9d;
          margin-left: 0.25rem;
        }
      }
    }
  }
  .feed-item.selected {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    .feed-item {
      margin: 0 0.5rem 0.5rem 0.5rem;
    }
  }
</style>