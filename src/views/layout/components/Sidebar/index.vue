<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
  get sidebar() {
    return this.$store.getters.sidebar
  }

  get routes() {
    const router : any = this.$router
    return router.options.routes
  }

  get variables() {
    return variables
  }

  get isCollapse() {
    return !this.sidebar.opened
  }
}
</script>
