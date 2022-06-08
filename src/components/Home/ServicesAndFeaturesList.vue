<template>
  <Observer id="services-and-features-container" class="container" @on-change="onChange">
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
              <span>{{ item.name }}</span>
              <div class="progress-bar">
                <span class="progress-bar-fill" ></span>
              </div>
            </div>
          </div>
          <div class="list">
            <h3>{{ $t('features.list_name') }}</h3>
            <div v-for="(item, index) in features" :key="index" class="list-item"
                 v-on:click="setActiveItem(index, 1)"
                 :class="[ activeItemIndex === index && activeListIndex === 1 ? 'selected' : ''  ]">
              <span>{{ item.name }}</span>
              <div class="progress-bar">
                <span class="progress-bar-fill"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Observer>
</template>

<script>
import Observer from 'vue-intersection-observer'

const images = [
    [
      require('@/assets/services/consulting.png'),
      require('@/assets/services/analysis.png'),
      require('@/assets/services/modeling.png'),
      require('@/assets/services/source.png'),
      require('@/assets/services/visual.png'),
      require('@/assets/services/integration.png'),
      require('@/assets/services/support.png')
    ],
    [
      require('@/assets/services/innovation.png'),
      require('@/assets/services/format.png'),
      require('@/assets/services/design.png'),
      require('@/assets/services/freedom.png'),
    ]
  ];

export default {
  name: "ServicesAndFeaturesList",
  components: {
    Observer
  },
  data() {
    return {
      activeItemIndex: -1,
      activeListIndex: 0
    }
  },
  computed: {
    activeItem() {
      return this.activeList[this.activeItemIndex] || {};
    },
    activeList() {
      return this.activeListIndex === 0 ? this.services : this.features;
    },
    services() {
      const $t = this.$t.bind(this);

      let services = [
        { name: $t('services.consultation.name'), description: $t('services.consultation.description') },
        { name: $t('services.data_analysis.name'), description: $t('services.data_analysis.description') },
        { name: $t('services.data_modeling.name'), description: $t('services.data_modeling.description') },
        { name: $t('services.data_connecting.name'), description: $t('services.data_connecting.description') },
        { name: $t('services.visualisation.name'), description: $t('services.visualisation.description') },
        { name: $t('services.integration.name'), description: $t('services.integration.description') },
        { name: $t('services.support.name'), description: $t('services.support.description') },
      ]

      return services.map((item, index) => {
        return { ...item, image: images[0][index] }
      })
    },
    features: function() {
      const $t = this.$t.bind(this)

      let features = [
        { name: $t('features.modern_approach.name'), description: $t('features.modern_approach.description') },
        { name: $t('features.various_formats.name'), description: $t('features.various_formats.description') },
        { name: $t('features.unique_design.name'), description: $t('features.unique_design.description') },
        { name: $t('features.vendor_independence.name'), description: $t('features.vendor_independence.description') },
      ]

      return features.map((item, index) => {
        return { ...item, image: images[1][index] }
      })
    }
  },
  methods: {
    setActiveItem(itemIndex, listIndex) {
      clearInterval(this.interval);

      this.activeItemIndex = itemIndex;
      this.activeListIndex = listIndex;

      this.interval = this.launchInterval();
    },
    setActiveNextItem() {
      if (this.activeItemIndex + 1 === this.activeList.length) {

        this.activeItemIndex = 0;

        this.activeListIndex = this.activeListIndex === 1 ? 0 : 1;
      } else this.activeItemIndex = this.activeItemIndex + 1;
    },
    launchInterval() {
      const timeout = 7500;

      return setInterval(() => {
        this.setActiveNextItem()
      }, timeout);
    },
    onChange(entry, unobserve) {
      if (entry.isIntersecting) {
        this.setActiveItem(0, 0);
        unobserve()
      }
    }
  },
  watch: {
    activeItemIndex(value) {

    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0;
  }

  #services-and-features-container {
    display: flex;
    justify-content: center;
    background-color: #080808;
    width: 100%;
    min-height: 80vh;
    padding: 6rem clamp(1vw, 5%, 5vw);
    box-sizing: border-box;
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
   /* min-width: 300px;*/
    margin: 0;
    border-width: 1px 1px 1px 1px;
    /*border-style: solid;*/
    border-color: #565656;
    padding: 0 3rem;
    box-sizing: border-box;
    /*width: 100%;*/
  }
  .info img {
     width: 20rem;
  }
  .description {
    font-size: 1.25rem;
    margin: 5vh auto;
    /*width: 75%;*/
    text-align: center;
  }
  .service-icon {
    /*margin: 10px 0;*/
    /*width: 20rem;*/
  }
  .lists {
    /*width: 45%;
    min-width: 300px;*/
    padding: 0 3rem;
    text-align: center;
    box-sizing: border-box;
    display: inline-flex;
    flex-flow: wrap;
    height: 100%;
    align-content: center;
  }
  .lists > div:nth-child(1) {
    margin-bottom: 1rem;
  }
  .list {
    width: 100%;
  }
  .list-item {
    color: #cdcdcd;
    font-size: 1.25rem;
    cursor: pointer;
    margin: 0.75rem 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /*border-bottom: 1px solid #565656;*/
  }
  .list-item:hover {
    color: #e0e0e0;
  }
  .list-item.selected {
    color: #83a0c5;

    .progress-bar-fill {
      width: 100%;
      transition: width 7.5s ease-in-out;
    }
  }
  .progress-bar {
    width: 100%;
    margin: 0.75rem auto;
    height: 1px;
    background: #797979;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
  }

  .progress-bar-fill {
    display: block;
    width: 0;
    height: 1px;
    background: #659cef;
    border-radius: 3px;

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
          "description": "Creating a Normalized Data Schema"
        },
        "data_connecting": {
          "name": "Data connecting",
          "description": "Scheduler and adapters configuration for working with data sources"
        },
        "visualisation": {
          "name": "Creating visualisation layer",
          "description": "Preparing the layout and developing the visual layer"
        },
        "integration": {
          "name": "Solution integration",
          "description": "Integration of an analytical solution into the customer's circuit"
        },
        "support": {
          "name": "Support",
          "description": "Support"
        }
      },
      "features": {
        "list_name": "Features",
        "modern_approach": {
          "name": "Modern approach and technologies",
          "description": "Our specialists live in IT, so they are aware of the trends of the technological world. We keep the balance of the past and the future, because our decisions are in time and place."
        },
        "various_formats": {
          "name": "Various formats of analytics",
          "description": ""
        },
        "unique_design": {
          "name": "Unique design",
          "description": "We will prepare several variations of the layout, in accordance with the color base of your organization."
        },
        "vendor_independence": {
          "name": "Vendor Independence",
          "description": "Our technology stack policy is transparent."
        }
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
        "list_name": "Особенности",
        "modern_approach": {
          "name": "Современный подход и технологии",
          "description": "Наши специалисты живут IT, поэтому вкурсе тенденций технологического мира. Мы соблюдаем баланс прошлого и будущего, потому наши решения ко времени и месту."
        },
        "various_formats": {
          "name": "Различные форматы аналитики",
          "description": ""
        },
        "unique_design": {
          "name": "Уникальный дизайн",
          "description": "Мы подготовим несколько вариаций макета, в соответствии с цветовым базисом вашей организации."
        },
        "vendor_independence": {
          "name": "Независимость от вендора",
          "description": "Наша политика при выборе технологического стека прозрачна."
        }
      }
    }
  }
</i18n>