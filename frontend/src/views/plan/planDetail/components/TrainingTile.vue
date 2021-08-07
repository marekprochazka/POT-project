<template>
  <div class="trainingTile__container">
    <div class="trainingTile__header">
      <h3>{{ training.name }}</h3>
      <vue-icon
          class="trainingTile__menuIcon"
          iconType="hamburger-small"
          @click="unwrapped = !unwrapped"
      />
    </div>
    <div v-if="unwrapped" class="trainingTile__body">
      <table>
        <thead>
        <tr>
          <th>Exercise</th>
          <th>Volume</th>
          <th>Value</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr class="trainingTile__item" v-for="exercise in training.exercises" :key="exercise.id">
          <td>{{ exercise.name }}</td>
          <td>{{ exercise.volume }}</td>
          <td>{{ exercise.last_overload_value }}</td>
          <td><vue-icon class="trainingTile__addIcon" iconType="add-small" /></td>
        </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {ITraining} from "../../config";

export default defineComponent({
  name: 'trainingTile',
  props: {
    training: {required: true, type: Object as () => ITraining}
  },
  data() {
    return{
      unwrapped: false
    }
  }
})

</script>