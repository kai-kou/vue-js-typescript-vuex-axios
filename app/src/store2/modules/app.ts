import Vuex, { createNamespacedHelpers } from 'vuex';
import axios from 'axios';

import { DefineActions, DefineGetters, DefineMutations } from 'vuex-type-helper';

export interface State {
  counter: number;
  message: string;
}

export interface Getters {
  counter: number;
  message: string;
}

export interface Mutations {
  increment: {};
  getMessage: {
    message: string,
  };
}

export interface Actions {
  incrementAction: {};
  getMessageAction: {
    message: string,
  };
}

export const state: State = {
  counter: 0,
  message: '',
};

export const getters: DefineGetters<Getters, State> = {
  counter: (state) => state.counter,
  message: (state) => state.message,
};

export const mutations: DefineMutations<Mutations, State> = {
  increment(state, {}) {
    state.counter += 1;
  },
  getMessage(state, payload) {
    state.message = payload.message;
  },
};

export const actions: DefineActions<Actions, State, Mutations, Getters> = {
  incrementAction({ commit }, payload) {
    commit('increment', payload);
  },
  async getMessageAction({ commit }, payload) {
    await axios.get('http://localhost:3000')
    .then((res) => {
      payload.message = res.data;
    });
    commit('getMessage', payload);
  },
};

export const {
  mapState,
  mapGetters,
  mapMutations,
  mapActions,
} = createNamespacedHelpers<State, Getters, Mutations, Actions>('app');

export const app = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
