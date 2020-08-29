<template>
  <v-app>
    <snackbar />
    <v-app-bar app absolute>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn text :to="{ name: 'leagues' }">
          Leagues
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from './components/Snackbar.vue';

export default {
  name: 'App',

  components: { Snackbar },

  data: () => ({
    title: 'Squash Rating',
  }),
};
</script>
