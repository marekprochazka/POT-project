<template>
  <h3>This is gonna be new training form...</h3>
  <vue-text-field v-model="test" type="text" :rules="rules" label="text"/>
  <p style="color:white;">{{ test }}</p>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'newTrainingForm',
  data() {
    return {
      test: '',
      rules: [
        (value: string) => value.length > 3 ? 'chybaa' : true,
      ]
    }
  }
})

</script>