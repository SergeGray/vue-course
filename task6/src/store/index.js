import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    fields: [
      {
        title: 'Name',
        value: '',
        validationPattern: /^[a-z]{2,30}$/i,
        valid: null
      },
      {
        title: 'Phone',
        value: '',
        validationPattern: /^\d{7,14}$/,
        valid: null
      },
      {
        title: 'Email',
        value: '',
        validationPattern: /^[a-z\d]{1,20}@[a-z\d]{1,20}\.[a-z]{1,6}$/i,
        valid: null
      },
      {
        title: 'Some Field 1',
        value: '',
        validationPattern: /.+/,
        valid: null
      },
      {
        title: 'Some Field 2',
        value: '',
        validationPattern: /.+/,
        valid: null
      },
    ]
  },
  getters: {
    fields(state) {
      return state.fields;
    },
    titleByIndex(state) {
      return (index) => state.fields[index].title;
    },
    valueByIndex(state) {
      return (index) => state.fields[index].value;
    },
    patternByIndex(state) {
      return (index) => state.fields[index].validationPattern;
    },
    validByIndex(state) {
      return (index) => state.fields[index].valid;
    },
    name(state) {
      return state.fields[0].value;
    }
  },
  mutations: {
    setValue(state, payload) {
      let field = state.fields[payload.index];

      field.value = payload.value;
    },
    setValid(state, payload) {
      let field = state.fields[payload.index];

      field.valid = payload.valid;
    }
  },
  actions: {
    updateValue(context, payload) {
      const pattern = context.getters.patternByIndex(payload.index);
      payload.valid = pattern.test(payload.value);

      context.commit('setValue', payload);
      context.commit('setValid', payload);
    }
  }
});
