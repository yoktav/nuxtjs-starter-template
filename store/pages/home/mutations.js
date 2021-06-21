import STORE_PAGES_HOME from './constants';

export default {
  [STORE_PAGES_HOME.MUTATIONS.SET_PROJECTS](state, payload) {
    state.projects = payload;
  },
};
