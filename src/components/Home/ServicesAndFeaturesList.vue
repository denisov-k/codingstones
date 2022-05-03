<template>
  <div id="services-and-features-container" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div class="info">
          <div class="service-icon">
            <img :src="activeItem.image" />
          </div>
          <div class="description">{{ activeItem.description }}</div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="lists">
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
        { name: $t('services.consultation.name'), description: $t('services.consultation.description'),
          image: require('@/assets/services/analysis.png') },
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
    font-size: 2rem;
    margin: 1vh 0;
  }

  #services-and-features-container {
    display: flex;
    justify-content: center;
    padding: 60px 0;
    background-color: #080808;
    width: 100%;
    min-height: 80vh;
  }
  #services-and-features-container > div {
    width: 100%;
  }
  .info {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-width: 300px;
    margin: 0;
    border-width: 1px 1px 1px 1px;
    /*border-style: solid;*/
    border-color: #565656;
    padding: 0 15%;
    box-sizing: border-box;
    width: 100%;
  }
  .info img {
    width: 100%;
  }
  .description {
    font-size: 1.25rem;
    margin: 5vh auto;
    width: 90%;
    text-align: center;
  }
  .service-icon {
    margin: 10px 0;
    width: 80%;
  }
  .lists {
    width: 100%;
    min-width: 300px;
    text-align: center;
    box-sizing: border-box;
    padding: 0 15%;
    display: inline-flex;
    flex-flow: wrap;
    height: 100%;
    align-content: center;
  }
  .lists > div:nth-child(1) {
    margin-bottom: 20px;
  }
  .list {
    width: 100%;
  }
  .list-item {
    color: #cdcdcd;
    font-size: 1.25rem;
    cursor: pointer;
    margin: 2% 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1vh 0;
    border-bottom: 1px solid #565656;
  }
  .list-item:hover {
    color: #e0e0e0;
  }
  .list-item.selected {
    color: #83a0c5;
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