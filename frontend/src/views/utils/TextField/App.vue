<template>
  <div class="textField__container">
    <input :type="type" v-model="input">
    <div class="textField__errors" v-if="isError">
      <p v-for="error in errorsList" :key="error" style="color:red;">{{ error }}</p>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
  name: 'vue-text-field',
  props: {
    inputValue: {type: String, default: ''},
    type: {required: true, type: String},
    rules: {required: false, type: Array as PropType<Array<(value: string) => string | boolean>>, default: () => []}
  },
  data() {
    return {
      innerValue: this.inputValue,
      isError: false,
      errorsList: {} as any
    }
  },
  computed: {
    input: {
      get(): string {
        return this.innerValue
      },
      set(val: string): void {
        this.evalRules(val)
        this.innerValue = val
        this.$emit('input', val)
      }
    }
  },
  methods: {
    evalRules(val:string): void {
      let isErrorLocal = false
        this.rules.forEach((rule, index) => {
          let result: any = rule(val)
          if (typeof result === 'string') {
            console.log('error')
            this.isError = true
            isErrorLocal = true
            this.errorsList[index.toString()] = result
          }
        })
        if (!isErrorLocal) {
          this.isError = false
          this.errorsList = []
        }
    }
  }


})

</script>