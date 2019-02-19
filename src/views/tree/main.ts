import {Vue, Component, Watch} from "vue-property-decorator";

interface TreeInfo {
  id: number
  label: string
  children?: TreeInfo[]
}

@Component({})
export default class Tree extends Vue {
  filterText: string = '';
  data2: TreeInfo[] = [{
    id: 1,
    label: 'Level one 1',
    children: [{
      id: 4,
      label: 'Level two 1-1',
      children: [{
        id: 9,
        label: 'Level three 1-1-1'
      }, {
        id: 10,
        label: 'Level three 1-1-2'
      }]
    }]
  }, {
    id: 2,
    label: 'Level one 2',
    children: [{
      id: 5,
      label: 'Level two 2-1'
    }, {
      id: 6,
      label: 'Level two 2-2'
    }]
  }, {
    id: 3,
    label: 'Level one 3',
    children: [{
      id: 7,
      label: 'Level two 3-1'
    }, {
      id: 8,
      label: 'Level two 3-2'
    }]
  }];
  defaultProps = {
    children: 'children',
    label: 'label'
  };

  @Watch("filterText")
  watchFilterText(val) {
    (this.$refs.tree2 as Vue[]).filter(val)
  }

  filterNode(value, data) {
    if (!value) return true;
    return data.label.indexOf(value) !== -1
  }
}
