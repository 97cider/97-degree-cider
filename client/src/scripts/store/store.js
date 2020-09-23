import Vue from 'vue';
import Vuex from 'vuex';

const conf = require('../config');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qualitySettings: conf.quality.MED,
    }, 
    mutations: {
      initStore () {
        let currentQuality = localStorage.getItem('qualitySettings');
        if (currentQuality) {
            this.state.qualitySettings = currentQuality;
        }
      },
      updateQualitySettings (state, quality) {
        localStorage.setItem('qualitySettings', quality);
        state.qualitySettings = quality;
      },
    }
});