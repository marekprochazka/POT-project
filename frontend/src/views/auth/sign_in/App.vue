<template>
  <div class="loginPage__container">
    <h1 class="loginPage__title mt-20">Sign in</h1>
    <SignInForm />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SignInForm from "./components/SignInForm";

export default defineComponent({
  name: 'vue-sign_in',
  components:{SignInForm}
})
</script>