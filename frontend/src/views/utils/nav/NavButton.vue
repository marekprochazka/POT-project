<template>
      <vue-icon :icon-type="navIcon"></vue-icon>
</template>

<script>
import {defineComponent} from "vue";
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
  }
})

</script>