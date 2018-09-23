<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-form ref="addGame">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">Log inn</h3>
              </div>
            </v-card-title>
              <v-flex xs12 sm12>
                <v-card-text>
                  <v-text-field
                    label="Username:"
                    v-model="username"></v-text-field>
                </v-card-text>
              </v-flex>
              <v-flex xs12 sm12>
                <v-card-text>
                  <v-text-field
                    label="Password:"
                    v-model="password"
                    :append-icon="show ? 'visibility_off' : 'visibility'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"></v-text-field>
                </v-card-text>
              </v-flex>
            <v-card-actions>
              <v-btn block
                @click="login"
              >
                Log inn
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { login } from '../util/api';

export default {
  name: 'Login',
  data() {
    return {
      context: 'login context',
      username: '',
      password: '',
      error: null,
      show: false,
    };
  },
  methods: {
    login() {
      console.log('login method');
      console.log('username', this.username);
      console.log('password', this.password);

      login(this.username, this.password).then(() =>
        this.$router.replace(this.$route.query.redirect)
      );
    },
  },
};
</script>

<style scoped>
</style>
