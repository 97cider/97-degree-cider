import Vue from 'vue';
import Vuex from 'vuex';

const conf = require('../config');
const theme = require('../themes');

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qualitySettings: conf.quality.MED,
        colorSettings: theme.themes[0],
        hasAcceptedGraphics: false,
    }, 
    mutations: {
      initStore () {
        let acceptedGraphics = localStorage.getItem('hasAcceptedGraphics');
        if (acceptedGraphics) {
          this.state.hasAcceptedGraphics = acceptedGraphics;
        }

        let currentQuality = localStorage.getItem('qualitySettings');
        if (currentQuality) {
            this.state.qualitySettings = currentQuality;
        }

        let currentColorScheme = localStorage.getItem('colorScheme');
        if (currentColorScheme) {
          this.state.colorSettings =  JSON.parse(currentColorScheme);
        }
      },

      acceptGraphics (state) {
        localStorage.setItem('hasAcceptedGraphics', true);
        this.state.hasAcceptedGraphics = true;
      },

      updateQualitySettings (state, quality) {
        localStorage.setItem('qualitySettings', quality);
        this.state.qualitySettings = quality;
      },

      updateColorSettings (state, theme) {
        localStorage.setItem('colorScheme', JSON.stringify(theme));
        this.state.colorSettings = theme;
      }
    }
});