<template>
  <div class="homepage__container">
    <h1 class="homepage--title mt-20 mb-20">Progressive overload tracker</h1>
    <div v-if="plans.length > 0" class="homepage__plansContainer">
      <PlanTile v-for="plan in plans" :key="plan.id" :plan-title="plan.name" :trainings-snippet="createTrainingsSnippet(plan.trainings)" />
    </div>
    <Icon @click.prevent="$router.push({name:'planCreate'})" class="homepage__plusIcon" icon-type="plus"></Icon>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PlanTile from './components/PlanTile/App.vue'
import Icon from '@/views/utils/icon/App.vue'
import {fetchPlans} from "@/views/homepage/api";
import {IPlan, ITraining} from "@/views/homepage/config";

export default defineComponent({
  name: 'vue-homepage',
  data() {
    return {
      plans: new Array<IPlan>(),
    }
  },
  async mounted() {
    await this.loadPlans()
  },
  methods: {
    async loadPlans() {
      fetchPlans()
          .then(response => {
            response.data.forEach((element: IPlan) => this.plans.push(element))
            console.log(this.plans)
          })
    },
    createTrainingsSnippet(trainings:Array<ITraining>): string{
      const pureTrainingsList = new Array<string>()
      trainings.forEach((element: ITraining) => {
        pureTrainingsList.push(element.name)
      })
      return pureTrainingsList.join()
    }
  },
  components: {PlanTile, Icon}
})
</script>

