import Vue from 'vue';
import Vuex from 'vuex';
import jsonData from '@/assets/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: jsonData,
  },
  getters: {
    data(state) {
      return state.data;
    },
  },
  mutations: {
    // it's just a toggle function so I can mutate it directly
    toggleLike(state) {
      if (state.data.liked === true) {
        this.state.data.likes -= 1;
        this.state.data.liked = false;
      } else {
        this.state.data.likes += 1;
        this.state.data.liked = true;
      }
    },
    toggleFollow(state) {
      if (state.data.followed === true) {
        this.state.data.followers -= 1;
        this.state.data.followed = false;
      } else {
        this.state.data.followers += 1;
        this.state.data.followed = true;
      }
    },
  },
  actions: {
  },
});
