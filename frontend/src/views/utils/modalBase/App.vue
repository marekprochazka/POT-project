<template>

  <div v-if="modelValue" class="modalBase__container">
    <div @click="closeModal" class="modalBase__blur"/>
    <transition name="modalBase__transition">
      <div v-if="showBody" class="modalBase__body">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>

</template>

<script>
import {defineComponent} from "vue";
import {sleep} from "@/functions";

export default defineComponent({
  name: 'modalBase',
  props: {
    modelValue: {type: Boolean, required: true}
  },
  data() {
    return {
      showBody: false
    }
  },
  computed: {
    computedModelValue(){
      return this.modelValue
    }
  },

  emits: ['update:modelValue'],
  methods: {
    async closeModal() {
      this.showBody = false
      await sleep(1)
      this.$emit('update:modelValue', false)
    }
  },
  watch: {
    async computedModelValue(newVal, oldVal) {
      if (newVal && !oldVal) {
        await sleep(0.2)
        this.showBody = true
      }
    }
  }
})

</script>