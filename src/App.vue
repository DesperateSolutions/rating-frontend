<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="true"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :clipped="true"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Desperate Solutions</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      title: 'Squash Rating 2018',
    };
  },
  name: 'App',
};
</script>
