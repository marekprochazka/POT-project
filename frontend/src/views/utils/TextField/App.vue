<template>
  <input :type="type" v-model="input">
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'vue-text-field',
  props: {
    inputValue: {type: String, default: ''},
    type: {required: true, type: String}
  },
  data() {
    return {
      innerValue: this.inputValue
    }
  },
  computed: {
    input: {
      get(): string {
        return this.innerValue
      },
      set(val: string): void {
        this.innerValue = val
        this.$emit('input', val)
      }
    }
  }


})

</script>