<template>
      <Icon :icon-type="navIcon"></Icon>
</template>

<script>
import {defineComponent} from "vue";
import Icon from '@/views/utils/icon/App.vue'
import store from '@/store'

export default defineComponent({
  name: 'nav-button',

  computed: {
    navIcon() {
      if (store.state.isNavOpen) {
        return 'close'
      }
      return 'menu-2'
    }
  },
  components: {Icon}
})

</script>