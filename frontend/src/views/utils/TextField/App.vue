<template>
  <div class="form__group form-group px-10">
    <label v-if="title" :class="labelClasses"  :for="label">{{label}}</label>
    <input :class="inputClasses" v-bind="$attrs" :type="type" v-model="input" :id="label" :placeholder="label">
    <div class="form__errors" v-if="isError">
      <p v-for="error in errorsList" :key="error" class="form__error px-10 mt-05">{{ error }}</p>
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
    label: {required: true, type: String},
    title: {required:false,type:Boolean, default:true},
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
    },
    inputClasses(): Array<string> {
      return this.isError ? ['form__input', 'form-control', 'form__input--Error'] : ['form__input', 'form-control']
    },
    labelClasses(): Array<string> {
      return this.isError ? ['form__text', 'mb-05', 'px-10', 'form__text--Error'] : ['form__text', 'mb-05', 'px-10']
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