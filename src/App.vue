<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="true"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      :clipped="false"
      v-model="drawer"
      enable-resize-watcher
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
export default {
  name: 'App',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      menuItems: [{ title: 'Leagues', icon: 'dashboard' }],
      miniVariant: false,
      title: 'Squash Rating 2018',
    };
  },
};
</script>
