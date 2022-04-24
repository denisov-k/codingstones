<template>
  <div class="filter-list">
    <multiselect :options="values"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: "FilterList",
  components: {
    Multiselect
  },
  data() {
    return {
      values: []
    }
  }
}
</script>

<style lang="scss" scoped>

$text-color: #aeaeae;
$container-color: #00000070;

.filter-list /deep/ {
  position: relative;
  width: calc(100% - 20px);
  background-color: white;
  color: #aeaeae;
  border-radius: 5px;
  border: 1px solid #d7d7d7;
  font-size: 12px;
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 30px 5px 5px;
  margin: 10px;

  .multiselect__select {
    position: absolute;
    right: 10px;
    width: 10px;
    height: 10px;
    top: 50%;
    transform: translate(0%, -50%);
    transition: transform .2s ease;
  }
  .multiselect__select:before {
    position: relative;
    right: 0;
    top: 65%;
    margin-top: 4px;
    border-style: solid;
    border-width: 5px 5px 0;
    border-color: #fbfbfb transparent transparent;
    content: "";
  }
  .multiselect__tags {
    padding: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .multiselect__strong {
      margin-left: 5px;
    }
    .multiselect__placeholder {
      padding: 2px 3px;
    }
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
    z-index: 1001;
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
    flex-wrap: wrap;
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
  .tag {
    background-color: #0f0f0f;
    margin: 3px;
    padding: 3px 5px;
    border-radius: 5px;
    display: flex;
    height: fit-content;
    align-items: center;

    .option__title {

    }
    .option__title:first-child {
      margin-left: 0;
    }
    .option__title:last-child {
      margin-right: 0;
    }
    .multiselect__tag-icon {
      font-weight: 700;
      font-style: normal;
      width: 16px;
      text-align: center;
      transition: all .2s ease;
      border-radius: 5px;
      height: 16px;
      margin: 0 0 0 2px;
      display: flex;
      justify-content: center;
    }
    .multiselect__tag-icon:after {
      content: "\D7";
      color: #5f5f5f;
      line-height: 16px;
    }
    .multiselect__tag-icon:hover {
      background-color: #0000004f;
    }
  }
}
</style>