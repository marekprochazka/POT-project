<template>
  <h3>This is gonna be new training form...</h3>
  <vue-text-field v-model="test" type="text" />
  <p style="color:white;">{{test}}</p>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'newTrainingForm',
  data() {
    return {
      test: ''
    }
  }
})

</script>