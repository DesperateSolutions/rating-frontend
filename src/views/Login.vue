<template>
  <div class="ds-container">
    <div class="ds-col-6">
      <form ref="addGame">
        <div class="ds-card">
          <h3 class="ds-title-3">Log inn</h3>
          <v-text-field v-model="username" label="Username:" />
          <v-text-field
            v-model="password"
            label="Password:"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
          />
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
    error: null,
    show: false,
  }),

  methods: {
    async clickLogin() {
      await login(this.username, this.password);
      await this.$router.replace(this.$route.query.redirect);
    },
  },
};
</script>

<style scoped lang="scss">
.ds-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  border-width: thin;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  padding: 1rem;
}
</style>
