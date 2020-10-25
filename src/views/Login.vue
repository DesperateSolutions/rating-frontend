<template>
  <div>
    <div class="ds-col-6">
      <form ref="addGame">
        <div class="ds-card">
          <h1 class="ds-title-3">Log inn</h1>
          <div class="form-input">
            <label>
              <input v-model="username" required />
              <span class="placeholder">Username:</span>
            </label>
          </div>

          <div class="form-input">
            <label>
              <input v-model="password" type="password" required />
              <span class="placeholder">Password:</span>
            </label>
          </div>
          <div class="ds-button-col">
            <button class="ds-btn ds-btn--ghost" @click="clickLogin">Log inn</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '@/util/api';

export default {
  name: 'Login',

  data: () => ({
    context: 'login context',
    username: '',
    password: '',
    show: false,
  }),

  methods: {
    async clickLogin() {
      await login(this.username, this.password);
      await this.$router.push(this.$route.query.redirect);
    },
  },
};
</script>

<style scoped lang="scss"></style>
