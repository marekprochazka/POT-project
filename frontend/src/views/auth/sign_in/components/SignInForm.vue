<template>
  <form @submit.prevent="sendData" class="form__container">
    <div class="form-group mt-20 form__group">
      <label for="signInForm__EmailInput" class="form__text">Email</label>
      <input v-model="username" type="text" class="form-control form__input" id="signInForm__EmailInput" placeholder="Email">
    </div>
    <div class="form-group mt-20 form__group">
      <label for="signInForm__FullnameInput" class="form__text">Fullname</label>
      <input v-model="fullname" type="text" class="form-control form__input" id="signInForm__FullnameInput" placeholder="Fullname">
    </div>
    <div class="form-group mt-20 form__group">
      <label for="signInForm__PasswordInput" class="form__text">Password</label>
      <input v-model="password" type="password" class="form-control form__input" id="signInForm__PasswordInput" placeholder="Password">
    </div>
    <div class="form-group mt-20 form__group">
      <label for="signInForm__ConfirmInput" class="form__text">Password again</label>
      <input v-model="confirm" type="password" class="form-control form__input" id="signInForm__ConfirmInput" placeholder="Password again">
    </div>
    <button type="submit" class="form__button mt-20">Sign in</button>
  </form>
</template>

<script>
import {defineComponent} from "vue";
import {postSignIn} from "../api";

export default defineComponent({
  name: 'vue-signInForm',
  data() {
    return {
      username: '',
      fullname: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    async sendData() {
      const result = await postSignIn({username:this.username, fullname:this.fullname, password:this.password, confirm:this.confirm})
      console.log(result)
    }
  }
})
</script>