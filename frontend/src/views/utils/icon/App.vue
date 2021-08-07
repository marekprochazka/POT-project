<template>
  <img :src="iconRoute" alt="icon">
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'my-icon',
  props: {iconType: {type: String, required: true}},
  computed: {
    iconRoute(): string {
      return require(`@/assets/icons/${this.iconType}.svg`)
    }
  }
})

</script>