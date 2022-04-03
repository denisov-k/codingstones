<template>
  <div class="row" id="services-and-features-container">
    <div class="info col-xs-12 col-sm-6">
      <div class="service-icon">
        <img src="@/assets/services/analysis.png" />
      </div>
      <div class="service-description">{{ activeItem.description }}</div>
    </div>
    <div class="lists col-xs-12 col-sm-6">
      <div class="list">
        <h3>{{ $t('services.list_name') }}</h3>
        <div v-for="(item, index) in services" :key="index" class="list-item"
             v-on:click="setActiveItem(index, 0)"
             :class="[ activeItemIndex === index && activeListIndex === 0 ? 'selected' : ''  ]">
          {{ item.name }}
        </div>
      </div>
      <div class="list">
        <h3>{{ $t('features.list_name') }}</h3>
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
  name: "ServicesAndFeaturesList",
  data: function() {
    return {
      activeItemIndex: 0,
      activeListIndex: 0
    }
  },
  computed: {
    activeItem: function () {
      return [this.services, this.features][this.activeListIndex][this.activeItemIndex];
    },
    services: function() {
      const $t = this.$t.bind(this)

      return [
        { name: $t('services.consultation.name'), description: $t('services.consultation.description') },
        { name: $t('services.data_analysis.name'), description: $t('services.data_analysis.description') },
        { name: $t('services.data_modeling.name'), description: $t('services.data_modeling.description') },
        { name: $t('services.data_connecting.name'), description: $t('services.data_connecting.description') },
        { name: $t('services.visualisation.name'), description: $t('services.visualisation.description') },
        { name: $t('services.integration.name'), description: $t('services.integration.description') },
        { name: $t('services.support.name'), description: $t('services.support.description') },
      ]
    },
    features: function() {
      const $t = this.$t.bind(this)

      return [
        { name: 'Современные подход и технологии', description: 'test' },
        { name: 'Различные форматы', description: 'Различные форматы (классическая аналитика, соц.сети и т.д.)' },
        { name: 'Уникальный дизайн', description: 'test' },
        { name: 'Независимость от вендора', description: 'test' },
      ]
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
    margin: 10px 8px;
  }

  #services-and-features-container {
    /*padding: 0 5%;*/
    display: flex;
    justify-content: center;
  }
  #services-and-features-container > div {
    padding: 0 5%;
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
    margin: 5px auto;
    min-width: 270px;
    max-width: 400px;
  }
  .service-icon {
    margin: 10px 0;
  }
  .lists {
    text-align: left;
  }
  .lists > div:nth-child(1) {
    margin-bottom: 20px;
  }
  .list {
    min-width: 270px;
    max-width: 400px;
    margin: auto;
  }
  .list-item {
    color: #080808;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    background-color: #313131;
    border-radius: 7px;
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
    color: white;
    font-weight: 500;
  }
</style>

<i18n>
  {
    "en": {
      "services": {
        "list_name": "Services",
        "consultation": {
          "name": "Consultation in Business Intelligence",
          "description": "We will analyse your tasks and offer the best options"
        },
        "data_analysis": {
          "name": "Data analysis",
          "description": "Metrics"
        },
        "data_modeling": {
          "name": "Data modeling",
          "description": "Создание схемы данных в нормализованном виде"
        },
        "data_connecting": {
          "name": "Data connecting",
          "description": "Конфигурация планировщика и адаптеров для работы с источниками данных"
        },
        "visualisation": {
          "name": "Creating visualisation layer",
          "description": "Подготовка макета и разработка визуального слоя"
        },
        "integration": {
          "name": "Solution integration",
          "description": "Интеграция аналитического решения в контур заказчика"
        },
        "support": {
          "name": "Support",
          "description": "Поддержка"
        }
      },
      "features": {
        "list_name": "Features"
      }
    },
    "ru": {
      "services": {
        "list_name": "Услуги",
        "consultation": {
          "name": "Консультация по Business Intelligence",
          "description": "Мы проанализируем ваши задачи и предложим оптимальные варианты решений"
        },
        "data_analysis": {
          "name": "Анализ данных",
          "description": "Постановка гипотез и определение показателей, релевантных для организации"
        },
        "data_modeling": {
          "name": "Разработка модели данных",
          "description": "Создание схемы данных в нормализованном виде"
        },
        "data_connecting": {
          "name": "Подключение источников данных",
          "description": "Конфигурация планировщика и адаптеров для работы с источниками данных"
        },
        "visualisation": {
          "name": "Создание визуального слоя",
          "description": "Подготовка макета и разработка визуального слоя"
        },
        "integration": {
          "name": "Интеграция решения",
          "description": "Интеграция аналитического решения в контур заказчика"
        },
        "support": {
          "name": "Поддержка",
          "description": "Поддержка"
        }
      },
      "features": {
        "list_name": "Особенности"
      }
    }
  }
</i18n>