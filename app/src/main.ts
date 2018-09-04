import Vue from 'vue';
import App from './App.vue';
// Use Store
// import store from './store';
//

// Use Store2
import store from './store2';
//

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
