import Navbar from './components/Navbar.vue'
import AppMain from './components/AppMain.vue'
import Sidebar from './components/Sidebar/index.vue'
import ResizeMixin from '@/views/layout/mixin/ResizeHandler.ts'
import { Component, Vue } from 'vue-property-decorator'
import { mixins } from 'vue-class-component';

@Component({
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
})
export default class Layout extends mixins(ResizeMixin) {
    get sidebar() {
      return this.$store.state.app.sidebar
    }
    get device() {
      return this.$store.state.app.device
    }
    get classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
}
