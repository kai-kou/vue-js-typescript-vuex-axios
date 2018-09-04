import Vue from 'vue';
import Vuex from 'vuex';
import { app } from '@/store2/modules/app';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
  },
});
