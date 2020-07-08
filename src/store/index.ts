import Vue from 'vue';
import Vuex from 'vuex';

import global from './modules/global';
import icons from './modules/icons';
import notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
    icons,
    notification,
  },
});
