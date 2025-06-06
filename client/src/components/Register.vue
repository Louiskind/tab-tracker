<template>
  <div>
    <h1>Register</h1>
    <input
    type="text"
    name="email"
    v-model="email"
    placeholder="Email"
    ><br>
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="Password"
    ><br>
    <button v-on:click="register">Register</button>
  </div>
</template>
<script>
import authenticationService from '@/services/authenticationService'
export default {
  data () {
    return {
      email: 'louis@',
      password: '123'
    }
  },
  methods: {
    // A non blocking method
    async register () {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<style scoped>
/*  */
</style>
