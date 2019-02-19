import {Component, Vue, Watch} from "vue-property-decorator";

const {body} = document;
const WIDTH = 1024;
const RATIO = 3;

@Component({})
export default class ResizeMixin extends Vue {
  @Watch("$route")
  watchRoute(route) {
    if (this.$store.getters.device === 'mobile' && this.$store.getters.sidebar.opened) {
      this.$store.dispatch('CloseSideBar', {withoutAnimation: false})
    }
  }

  beforeMount() {
    window.addEventListener('resize', this.resizeHandler)
  }

  mounted() {
    const isMobile = this.isMobile();
    if (isMobile) {
      this.$store.dispatch('ToggleDevice', 'mobile');
      this.$store.dispatch('CloseSideBar', {withoutAnimation: true})
    }
  }

  isMobile() {
    const rect = body.getBoundingClientRect();
    return rect.width - RATIO < WIDTH
  }

  resizeHandler() {
    if (!document.hidden) {
      const isMobile = this.isMobile();
      this.$store.dispatch('ToggleDevice', isMobile ? 'mobile' : 'desktop');

      if (isMobile) {
        this.$store.dispatch('CloseSideBar', {withoutAnimation: true})
      }
    }
  }
}
