const getDefaultState = () => {
  return {
    user: {
      uid: '',
      email: '',
      profile: {
        image: '',
      },
    },
  };
};

const state = () => getDefaultState();

const getters = {
  isLogin: (thisState) =>
    !!thisState.user && !!thisState.user.uid && !!thisState.user.email,
  getData: (thisState) => thisState,
  getUser: (thisState) => thisState.user,
};

const mutations = {
  SET_USER(thisState, payload) {
    if (payload.uid && payload.email) {
      thisState.user.uid = payload.uid;
      thisState.user.email = payload.email;
      thisState.user.profile.image = payload.image;
    }
  },
  LOGOUT_USER(thisState) {
    thisState.user = {};
  },
};

const actions = {
  setUser({ commit }, payload) {
    commit('SET_USER', payload);
  },
  logoutUser({ commit }) {
    commit('LOGOUT_USER');
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
