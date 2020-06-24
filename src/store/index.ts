import Vue from 'vue';
import Vuex from 'vuex';

import colorMode from './modules/color-mode';
import icons from './modules/icons';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    colorMode,
    icons,
  },
});
