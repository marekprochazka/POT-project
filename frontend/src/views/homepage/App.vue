<template>
  <div class="homepage__container">
    <h1 class="homepage--title mt-20 mb-20">Progressive overload tracker</h1>
    <div v-if="plans.length > 0" class="homepage__plansContainer">
      <PlanTile
          v-for="plan in plans"
          :key="plan.id"
          :plan="plan"
          @click.prevent="$router.push({name:'planDetail',params:{id:plan.id}})"/>
    </div>
    <vue-icon @click.prevent="$router.push({name:'planCreate'})" class="homepage__plusIcon" icon-type="plus"></vue-icon>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PlanTile from './components/PlanTile/App.vue'
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
          })
    },

  },
  components: {PlanTile}
})
</script>

