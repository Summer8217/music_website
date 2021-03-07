import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const opts = {theme: {
    themes: {
      light: {
        primary: '#2D3753',
      }
    },
  },};

export default new Vuetify(opts)
