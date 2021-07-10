<template>
  <transition name="navBar__transition">
    <div v-if="this.$store.state.isNavOpen" class="navBar__container">
      <ul>
        <li>
          <h1>jo</h1>
        </li>
        <li>
          <h1>a</h1>
        </li>
        <li>
          <h1>b</h1>
        </li>
        <li>
          <h1>c</h1>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'navbar',

})
</script>