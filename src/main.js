import Vue from 'vue'
import App from './App.vue'
import Config from './utils/Config'
import router from './router'


import store from './store/store'
import SessionActions from './store/store-session-actions'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Config.init().then(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
});

/*Config.init().then(() => {
  store.dispatch(SessionActions.AUTH).then(() => {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }).catch((err) => {
    alert(err);
  })
});*/