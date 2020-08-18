<template>
  <v-app>
    <snackbar />
    <v-app-bar app absolute>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn text @click="changeRoute('leagues')">
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
    drawer: false,
    fixed: true,
    menuItems: [{ title: 'Leagues', icon: 'dashboard' }],
    title: 'Squash Rating',
  }),

  methods: {
    changeRoute(path) {
      this.$router.push({ name: path });
    },
  },
};
</script>
