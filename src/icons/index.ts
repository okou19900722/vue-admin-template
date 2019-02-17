import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue' // svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext);
// @ts-ignore 这里没有找到办法，所以忽略检测
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
