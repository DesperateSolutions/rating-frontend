<template>
  <v-container fluid>
    <v-tabs
      v-model="active"
      dark
      grow
    >
      <v-tab
        key="1"
        :to="{ path: getAddGameLink() }"
        ripple
      >
        Add Game
      </v-tab>
      <v-tab
        key="2"
        :to="{ path: getGamesLink() }"
        ripple
      >
        Games
      </v-tab>
      <v-tab
        key="3"
        :to="{ path: getAddPlayerLink() }"
        ripple
      >
        Add Player
      </v-tab>
      <v-tab
        key="4"
        :to="{ path: getRankingLink() }"
        ripple
      >
        Ranking
      </v-tab>
    </v-tabs>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <router-view />
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'league',
  props: ['name'],
  methods: {
    getAddGameLink() {
      return `/league/${this.name}/addGame`;
    },
    getGamesLink() {
      return `/league/${this.name}/games`;
    },
    getAddPlayerLink() {
      return `/league/${this.name}/addPlayer`;
    },
    getRankingLink() {
      return `/league/${this.name}/ranking`;
    },
  },
  data() {
    return {
      active: null,
    };
  },
};
</script>

<style scoped>
</style>
