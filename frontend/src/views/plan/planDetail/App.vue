<template>
  <div v-if="!loading" class="planDetail__container">
    <vue-modal v-model="modalOpened">
      <template v-slot:content>
        <NewTrainingForm />
      </template>
    </vue-modal>
    <h1 class="planDetail__title mt-20 mb-20">{{ responseData.name }}</h1>
    <div class="planDetail__trainings">
      <AddTrainingTile @click="modalOpened = true" class="mb-20"/>
      <TrainingTile class="mb-20" v-for="training in responseData.trainings" :key="training.id" :training="training"/>
    </div>
    <vue-icon class="planDetail__settingIcon" iconType="wheel-big"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import {fetchPlanDetail} from "@/views/plan/planDetail/api";
import {emptyPlan} from "@/views/plan/config";
import TrainingTile from "./components/TrainingTile.vue";
import AddTrainingTile from "./components/AddTrainingTile.vue";
import NewTrainingForm from "./components/NewTrainingForm.vue"

export default defineComponent({
  name: 'planDetail',
  data() {
    return {
      responseData: emptyPlan(),
      loading: true,
      modalOpened: false
    }
  },
  created() {
    fetchPlanDetail(this.$route.params.id[0])
        .then((response) => {
          this.responseData = response.data
          this.loading = false
          console.log(this.responseData)
        })
  },
  components: {
    TrainingTile,
    AddTrainingTile,
    NewTrainingForm
  }

})

</script>