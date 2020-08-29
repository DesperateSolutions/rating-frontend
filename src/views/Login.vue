<template>
  <v-container fluid>
    <v-form ref="addGame">
      <v-row>
        <v-col cols="12" sm="6" offset-sm="3">
          <v-card>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">
                  Log inn
                </h3>
              </div>
            </v-card-title>
            <v-col cols="12" sm="12">
              <v-card-text>
                <v-text-field v-model="username" label="Username:" />
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="12">
              <v-card-text>
                <v-text-field
                  v-model="password"
                  label="Password:"
                  :append-icon="show ? 'visibility_off' : 'visibility'"
                  :type="show ? 'text' : 'password'"
                  @click:append="show = !show"
                />
              </v-card-text>
            </v-col>
            <v-card-actions>
              <v-btn block @click="clickLogin">
                Log inn
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
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

<style scoped></style>
