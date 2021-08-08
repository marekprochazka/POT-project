<template>
  <form @submit.prevent="sendData" class="form__container">
    <div class="form-group mt-20 form__group">
      <label for="loginForm__EmailInput" class="form__text">Plan name</label>
      <input v-model="name" type="text" class="form-control form__input" id="loginForm__EmailInput"
             placeholder="Plan name">
    </div>
    <button type="submit" class="form__button mt-20">Create</button>
    <h3 v-if="error" class="form__error">Invalid parameters! TODO styling</h3>
  </form>
</template>
<script>
import {defineComponent} from "vue";
import {postPlanCreate} from "../api";

export default defineComponent({
  name: "plan-create-form",
  data() {
    return {
      name: "",
      error: false
    }
  },
  methods: {
    async sendData() {
      postPlanCreate({name: this.name})
          .then(response => {
            this.$router.push({name: 'planDetail', params: {id: response.data.plan_id}})
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
})
</script>