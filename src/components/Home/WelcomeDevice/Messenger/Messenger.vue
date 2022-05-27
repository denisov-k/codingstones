<template>
  <div class="messenger">
    <slot></slot>
    <sidebar></sidebar>
    <Main></Main>
  </div>
</template>

<script>

import Sidebar from "./Sidebar";
import Main from "./Main";

export default {
  name: "Messenger",
  components: {
    Main,
    Sidebar
  },
  data() {
    const $t = this.$t.bind(this);

    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  $interface-color: #fff;

  .messenger /deep/ {
    display: flex;
    height: 100%;
    background-color: #fff;
    font-size: 0.8rem;

    .header {
      min-height: 3rem;
    }
    .header, .footer {
      display: flex;
      width: 100%;
      padding: 0 0.6rem;
      box-sizing: border-box;
      align-items: center;
    }
  }
  .mobile-header /deep/ {
    color: #474747;

    svg {
      fill: #474747 !important;
    }
  }

  .titles > span {
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
  @media only screen and (max-width: 48em) {
    .messenger /deep/ {
      .sidebar {
        display: none;
      }
      .header {
        min-height: 40px;
      }
      .main {
        height: calc(100% - 30px);

        .body .message {
          max-width: 100%;
          margin: 5px 10px;
        }
      }
      .footer {
        padding-bottom: 15px;
        min-height: 45px !important;
      }
    }
  }
</style>
