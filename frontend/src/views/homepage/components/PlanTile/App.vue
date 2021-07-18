<template>
  <div class="planTile__container">
    <transition name="planTile__menuSwitch-fade-out">

      <div v-if="!isMenuOpen" class="planTile__innerItemsContainer">
        <h3 class="planTile__title">{{ planTitle }}</h3>
        <p class="planTile__trainingSnippet">{{ trainingsSnippet }}</p>
        <Icon @click.prevent="isMenuOpen = !isMenuOpen" class="planTile__icon-menu" icon-type="menu"/>
        <Icon class="planTile__icon-add" icon-type="add"/>
      </div>
    </transition>

    <transition name="planTile__menuSwitch-fade-in">
      <div v-if="isMenuOpen" class="planTile__innerMenuContainer">
        <Icon @click.prevent="isMenuOpen = !isMenuOpen" class="planTile__icon-menu" icon-type="menu"/>
      </div>
    </transition>


  </div>
</template>

<script>
import {defineComponent} from 'vue';
import Icon from '@/views/utils/icon/App.vue'

export default defineComponent({
  name: 'vue-plan-tile',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  props: {
    planTitle: {type: String, required: true},
    trainingsSnippet: {type: String, required: true}
  },
  components: {Icon}
})
</script>
