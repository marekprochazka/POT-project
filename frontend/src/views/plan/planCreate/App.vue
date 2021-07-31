<template>
  <PlanCreateForm></PlanCreateForm>
</template>
<script>
import {defineComponent} from "vue";
import PlanCreateForm from "./components/PlanCreateForm";

export default defineComponent({
  name: "vue-plan-create",
  components: {PlanCreateForm}
})

</script>