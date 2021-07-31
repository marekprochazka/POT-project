<template>
  <div class="planTile__container" @click.prevent="showDetail">
    <div v-if="!isMenuOpen" class="planTile__innerItemsContainer">
      <h3 class="planTile__title">{{ plan.name }}</h3>
      <p class="planTile__trainingSnippet">{{ trainingsSnippet }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IPlan, ITraining} from "@/views/homepage/config";

export default defineComponent({
  name: 'vue-plan-tile',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  props: {
    plan: {type: Object as () => IPlan, required: true}
  },
  computed: {
    trainingsSnippet(): string {
      const pureTrainingsList = new Array<string>()
      this.plan.trainings.forEach((element: ITraining) => {
        pureTrainingsList.push(element.name)
      })
      return pureTrainingsList.join()
    }
  },
  methods: {
    showDetail() {
      // TODO
    }
  }
})
</script>
