<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="email">Email</label>
        <input type="email" required name="email" v-model="form.email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" required name="password" v-model="form.pasword" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',

  data () {
    return {
      form: {},
      errors: {}
    }
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    async submit () {
      const { email, password } = this.form

      await this.login({
        payload: { email, password },
        context: this
      })

      this.$router.replace({ name: 'dashboard' })
    }
  }
}
</script>
