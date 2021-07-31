<template>
  <div class="planTile__container">
      <div v-if="!isMenuOpen" class="planTile__innerItemsContainer">
        <h3 class="planTile__title">{{ planTitle }}</h3>
        <p class="planTile__trainingSnippet">{{ trainingsSnippet }}</p>
      </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

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
})
</script>
