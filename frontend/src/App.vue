<template>
  <Navbar />
  <NavButton class="nav_button__container" @click.prevent="toggleNav"></NavButton>
  <router-view/>
</template>

<script>
import {defineComponent} from "vue";
import NavButton from "@/views/utils/nav/NavButton";
import Navbar from "@/views/utils/nav/Navbar";
import {MUTATION_TYPES as MT} from "@/store/_mutation-types";

export default defineComponent({
  name: 'root',
  methods: {
    toggleNav() {
      this.$store.commit(MT.NAV_TOGGLE)
    }
  },
  components: {
    NavButton,
    Navbar
  }
})

</script>

<style lang="scss">
@import "styles/entry";
</style>