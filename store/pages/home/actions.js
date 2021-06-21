import STORE_PAGES_HOME from './constants';

export const setProjects = async ({ commit }, payload) => {
  commit(STORE_PAGES_HOME.MUTATIONS.SET_PROJECTS, payload);
};
