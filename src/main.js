


import Vue from 'vue'
import App from './App.vue'


import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax

Vue.use(Vuesax)



// axios
import axios from './axios.js'

Vue.prototype.$http = axios



//import ApiService from "./common/api.service";

// Filters
//import './filters/filters.js'


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
//import './globalComponents.js'


// Styles: SCSS
//import './assets/scss/main.scss'


// Tailwind
//import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
//import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import vuetify from './plugins/vuetify';


// Feather font icon
require('./assets/css/iconfont.css')


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';


Vue.config.productionTip = false

//ApiService.init();

new Vue({
  router,
  vuetify,

  //store,
  render: h => h(App)
}).$mount('#app')
