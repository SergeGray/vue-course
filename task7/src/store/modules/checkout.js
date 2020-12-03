export default {
  namespaced: true,
  state: {
    fields: [
      {
        title: 'Name',
        value: '',
        validationPattern: /^[a-z\s]{2,30}$/i,
        inputType: 'text',
        valid: null
      },
      {
        title: 'Phone',
        value: '',
        validationPattern: /^\d{7,14}$/,
        inputType: 'number',
        valid: null
      },
      {
        title: 'Email',
        value: '',
        validationPattern: /^[a-z\d]{1,20}@[a-z\d]{1,20}\.[a-z]{1,20}$/i,
        inputType: 'email',
        valid: null
      },
      {
        title: 'Card Number',
        value: '',
        validationPattern: /^\d{16}$/,
        inputType: 'number',
        valid: null
      },
      {
        title: 'CVC',
        value: '',
        validationPattern: /^\d{3}$/,
        inputType: 'number',
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
    inputTypeByIndex(state) {
      return (index) => state.fields[index].inputType;
    },
    validByIndex(state) {
      return (index) => state.fields[index].valid;
    },
    nameFieldValue(state) {
      return state.fields[0].value;
    }
  },
  mutations: {
    SET_VALUE(state, payload) {
      let field = state.fields[payload.fieldIndex];

      field.value = payload.fieldValue;
    },
    SET_VALID(state, payload) {
      let field = state.fields[payload.fieldIndex];

      field.valid = payload.fieldValid;
    }
  },
  actions: {
    updateValue({ getters, commit }, payload) {
      const pattern = getters.patternByIndex(payload.fieldIndex);
      payload.fieldValid = pattern.test(payload.fieldValue);

      commit('SET_VALUE', payload);
      commit('SET_VALID', payload);
    }
  }
};
