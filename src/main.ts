import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App.vue'
import store from '@/store/index.ts'
import router from '@/router/index.ts'

import '@/icons/index.ts' // icon
import '@/permission.ts' // permission control
import './mock/index.ts'

Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
