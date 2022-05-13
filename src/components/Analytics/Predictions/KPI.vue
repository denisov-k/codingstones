<template>
  <div class="kpi">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="titles">
      <span class="title">{{ title }}</span>
      <span class="subtitle">{{ subtitle }}</span>
    </div>
    <div class="progress">
      <slot name="progress"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "KPI",
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
  .kpi {
    display: flex;
    height: 4vh;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem 0rem;
  }
  .icon {
    fill: white;
    background-color: #0000005e;
    aspect-ratio: 1 / 1;
    height: 100%;
    box-sizing: border-box;
    padding: 3px;
    display: flex;
    align-self: center;
  }
  .icon /deep/ svg {
    width: 100%;
    height: 100%;
  }
  .titles {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 0.5rem;
  }
  .title {
    font-size: 0.9rem;
    font-weight: 700;
  }
  .subtitle {
    font-size: 0.75rem;
    /* white-space: nowrap; */
    text-align: left;
  }
  .progress {
    height: 100%;
    aspect-ratio: 1 / 1;
    background-color: #0000005e;
    box-sizing: border-box;
    margin-left: auto;
    align-self: center;
  }
  @media only screen and (max-width: 48em) {
    .icon {
      display: none;
    }
    .titles {
      margin: 0;
    }
  }
</style>