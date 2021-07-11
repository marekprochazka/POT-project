<template>
  <transition name="navBar__transition">
    <div v-if="this.$store.state.isNavOpen" class="navBar__container">
      <ul class="navBar__list">
        <li v-for="value in navList" :key="value.name">
          <h1 @click.prevent="handleLinkClick(value.urlName)">{{ value.name }}</h1>
        </li>
      </ul>
      <h2 style="color: wheat; position: absolute; bottom:15px; right:15px;">user:{{ $store.state.username }}</h2>

    </div>
  </transition>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'navbar',

  data() {
    return {
      navList: [
        {name: 'Home', urlName: 'homepage'}
      ],
    }
  },
  methods: {
    handleLinkClick(urlName) {
      this.$router.push({name: urlName})
      this.$store.commit('toggleNavState')
    }
  }

})
</script>