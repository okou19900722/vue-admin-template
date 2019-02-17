import pathToRegexp from 'path-to-regexp'
import {Vue, Component, Watch} from 'vue-property-decorator'

interface BreadcrumbInfo {
  path: string;
  meta: any;
  name?: string;
}

@Component({})
export default class Breadcrumb extends Vue {
  levelList: BreadcrumbInfo[] = [];

  @Watch("$route")
  watchRoute() {
    this.getBreadcrumb();
  }

  created() {
    this.getBreadcrumb();
  }

  getBreadcrumb() {
    let matched: BreadcrumbInfo[] = this.$route.matched.filter(item => item.name);
    const first = matched[0];
    if (first && first.name !== 'dashboard') {
      matched = [{path: '/dashboard', meta: {title: 'Dashboard'}}].concat(matched)
    }
    this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
  }

  pathCompile(path) {
    // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
    const {params} = this.$route;
    var toPath = pathToRegexp.compile(path);
    return toPath(params);
  }

  handleLink(item) {
    const {redirect, path} = item;
    if (redirect) {
      this.$router.push(redirect);
      return;
    }
    this.$router.push(this.pathCompile(path));
  }
}
