<template>
  <h3>This is gonna be new training form...</h3>
  <vue-text-field v-model="test" type="text" :rules="[inputRules.required]" label="text"/>
  <p style="color:white;">{{ test }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import rules from "@/utils/rules";

export default defineComponent({
  name: 'newTrainingForm',
  data() {
    return {
      test: '',
      inputRules: {
        ...rules
      }
    }
  }
})

</script>