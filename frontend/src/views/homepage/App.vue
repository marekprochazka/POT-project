<template>
  <div>
    <h1 class="homepage--title mt-20 mb-20">Progressive overload tracker</h1>
    <PlanTile plan-title="Léto 2021" trainings-snippet="PO-bench, ÚT-back, ST-legs"></PlanTile>
    <PlanTile plan-title="Léto 2021" trainings-snippet="PO-bench, ÚT-back, ST-legs"></PlanTile>
    <PlanTile plan-title="Léto 2021" trainings-snippet="PO-bench, ÚT-back, ST-legs"></PlanTile>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PlanTile from './components/PlanTile/App.vue'

export default defineComponent({
  name: 'vue-homepage',
  components: {PlanTile}
})
</script>

