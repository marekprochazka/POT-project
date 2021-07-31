<template>
  <div class="loginPage__container">
    <h1 class="loginPage__title mt-20">Login</h1>
    <LoginForm />
  </div>
  </template>


<script>
import { defineComponent } from 'vue';
import LoginForm from "./components/LoginForm";

export default defineComponent({
  name: 'vue-login',
  components:{LoginForm}
})
</script>
