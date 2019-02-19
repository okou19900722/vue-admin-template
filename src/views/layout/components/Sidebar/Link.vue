
<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)">
    <slot/>
  </component>
</template>

<script lang="ts">
import { isExternal } from '@/utils/validate.ts'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class Link extends Vue {
  @Prop({
    type: String,
    required: true
  })
  to: string;
  linkProps(url) {
    if (isExternal(url)) {
      return {
        is: 'a',
        href: url,
        target: '_blank',
        rel: 'noopener'
      }
    }
    return {
      is: 'router-link',
      to: url
    }
  }
}
</script>
