<template>
  <form @submit.prevent="sendData" class="form__container">
    <vue-text-field v-model="username" type="text" label="Email" :rules="[inputRules.isValidEmail]"/>
    <vue-text-field v-model="password" type="password" label="Password"/>
    <button type="submit" class="form__button mt-20">Login</button>
    <h3 v-if="error" class="form__error">Invalid parameters! TODO styling</h3>
  </form>
</template>

<script>
import {defineComponent} from "vue";
import rules from "@/utils/rules";
import {ACTION_TYPES as AT} from "@/store/_action-types";

export default defineComponent({
  name: 'vue-loginForm',
  data() {
    return {
      username: '',
      password: '',
      error: false,
      inputRules: {
        ...rules
      }
    }
  },
  methods: {
    async sendData() {
      // postLogin({username:this.username, password:this.password})
      //     .then(value => {
      //       console.log('access in login')
      //       console.log(value.data.access)
      //       this.$store.commit(MT.USER_SET, {
      //         accessToken: value.data.access,
      //         refreshToken: value.data.refresh,
      //         username: this.username,
      //       });
      //       this.$router.go()
      //       this.$router.push({name:'homepage'})
      //     })
      //     .catch(_ => {
      //       this.error = true;
      //     })
      this.$store.dispatch(AT.login, {username: this.username, password: this.password})
    }
  }
})

</script>