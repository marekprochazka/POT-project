<template>
  <form @submit.prevent="sendData" class="form__container">
    <div class="form-group mt-20 form__group">
      <label for="loginForm__EmailInput" class="form__text">Email</label>
      <input v-model="username" type="text" class="form-control form__input" id="loginForm__EmailInput" placeholder="Email">
    </div>
    <div class="form-group mt-20 form__group">
      <label for="loginForm__PasswordInput" class="form__text">Password</label>
      <input v-model="password" type="password" class="form-control form__input" id="loginForm__PasswordInput" placeholder="Password">
    </div>
    <button type="submit" class="form__button mt-20">Login</button>
    <h3 v-if="error" class="form__error">Invalid parameters! TODO styling</h3>
  </form>
</template>

<script>
import {defineComponent} from "vue";
import {postLogin} from "../api";

export default defineComponent({
  name: 'vue-loginForm',
  data() {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    async sendData() {
      postLogin({username:this.username, password:this.password})
          .then(value => {
            this.$store.commit('updateUserLocalStorage', {
              accessToken: value.data.access,
              refreshToken: value.data.refresh,
              username: this.username,
            });
            this.$router.push({name:'homepage'})
          })
          .catch(_ => {
            this.error = true;
          })

    }
  }
})

</script>