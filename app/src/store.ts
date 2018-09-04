import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

interface State {
  conuter: number;
  message: string;
}

export default new Vuex.Store({
  state: {
    conuter: 0,
    message: '',
  } as State,
  getters: {
    getCounter: (state, getters) => () => {
      return state.conuter;
    },
    getMessage: (state, getters) => () => {
      return state.message;
    },
  },
  mutations: {
    increment(state, payload) {
      state.conuter += 1;
    },
    getMessage(state, payload) {
      state.message = payload.message;
    },
  },
  actions: {
    incrementAction(context) {
      context.commit('increment');
    },
    async getMessageAction(context) {
      const payload = {
        message: '',
      };
      await axios.get('http://localhost:3000')
      .then((res) => {
        payload.message = res.data;
      });
      context.commit('getMessage', payload);
    },
  },
});
