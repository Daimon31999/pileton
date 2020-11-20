import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faSearch,
  faMapMarkerAlt,
  faEuroSign,
} from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSearch, faMapMarkerAlt, faEuroSign)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
