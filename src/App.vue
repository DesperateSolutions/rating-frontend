<template>
  <v-app>
    <Snackbar />
    <v-toolbar
      app
      :clipped-left="true"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="changeRoute('leagues')">Leagues</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      :clipped="true"
      v-model="drawer"
      disable-resize-watcher
      app
    >
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile :to="{ path: '/leagues' }">
          <v-list-tile-action>
            <v-icon>{{ menuItems[0].icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ menuItems[0].title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Desperate Solutions</span>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from './components/Snackbar.vue';

export default {
  name: 'App',
  components: { Snackbar },
  data() {
    return {
      drawer: false,
      fixed: true,
      menuItems: [{ title: 'Leagues', icon: 'dashboard' }],
      title: 'Squash Rating',
    };
  },
  methods: {
    changeRoute(path) {
      this.$router.push({ name: path });
    }
  }
};
</script>
