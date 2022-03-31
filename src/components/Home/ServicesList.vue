<template>
  <div class="row" id="services-and-features-container">
    <div class="info col-xs-12 col-sm-6">
      <div class="service-icon">
        <img src="@/assets/icons/analysis.png" />
      </div>
      <div class="service-description">{{ activeItem.description }}</div>
    </div>
    <div class="list col-xs-12 col-sm-6">
      <div>
        <h3>Услуги</h3>
        <div v-for="(item, index) in services" :key="index" class="list-item"
             v-on:click="setActiveItem(index, 0)"
             :class="[ activeItemIndex === index && activeListIndex === 0 ? 'selected' : ''  ]">
          {{ item.name }}
        </div>
      </div>
      <div>
        <h3>Особенности</h3>
        <div v-for="(item, index) in features" :key="index" class="list-item"
             v-on:click="setActiveItem(index, 1)"
             :class="[ activeItemIndex === index && activeListIndex === 1 ? 'selected' : ''  ]">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesList",
  data: () => {
    return {
      activeItemIndex: 0,
      activeListIndex: 0,
      services: [
        { name: 'Консультация по Business Intelligence', description: 'Архитектурная и продуктовая' },
        { name: 'Создание модели данных', description: 'test' },
        { name: 'Подключение источников данных', description: 'test' },
        { name: 'Определение метрик', description: 'test' },
        { name: 'Предиктивный анализ', description: 'test' },
        { name: 'Визуальный слой', description: 'Подготовка макета и разработка визуального слоя' },
        { name: 'Интеграция решения', description: 'Интеграция аналитического решения в бизнес заказчика' },
        { name: 'Администрирование систем', description: 'test' },
      ],
      features: [
        { name: 'Современные подход и технологии', description: 'test' },
        { name: 'Различные форматы', description: 'Различные форматы (классическая аналитика, соц.сети и т.д.)' },
        { name: 'Уникальный дизайн', description: 'test' },
        { name: 'Независимость от вендора', description: 'test' },
      ]
    }
  },
  computed: {
    activeItem: function () {
      return [this.services, this.features][this.activeListIndex][this.activeItemIndex];
    }
  },
  methods: {
    setActiveItem(itemIndex, listIndex) {
      this.activeItemIndex = itemIndex;
      this.activeListIndex = listIndex;
    }
  }
}
</script>

<style scoped>
  h3 {
    font-size: 20px;
    margin: 8px;
  }

  #services-and-features-container {
    padding: 0 5%;
    display: flex;
    justify-content: center;
  }
  #services-and-features-container > div {
    padding: 0 25px;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 30px 0;
  }
  .info img {
    width: 250px;
  }
  .service-description {
    font-size: 17px;
    margin: 5px 0;
  }
  .service-icon {
    margin: 10px 0;
  }
  .list {
    text-align: left;
  }
  .list > div:nth-child(1) {
    margin-bottom: 20px;
  }
  .list-item {
    font-size: 15px;
    cursor: pointer;
    background-color: #1b1e25;
    border-radius: 8px;
    margin: 5px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* line-height: 22px; */
    padding: 7px 10px;
  }
  .list-item:hover {
    background-color: #3f3f3f;
  }
  .list-item.selected {
    background-color: #335cd2;
    color: black;
  }
</style>