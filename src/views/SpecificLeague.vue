<template>
  <v-container fluid>
    <v-tabs v-model="active" grow show-arrows class="elevation-24">
      <v-tab key="1" :to="{ path: switchTab('addGame') }" ripple>
        Add Game
      </v-tab>
      <v-tab key="2" :to="{ path: switchTab('games') }" ripple>
        Games
      </v-tab>
      <v-tab key="3" :to="{ path: switchTab('addPlayer') }" ripple>
        Add Player
      </v-tab>
      <v-tab key="4" :to="{ path: switchTab('ranking') }" ripple>
        Ranking
      </v-tab>
      <v-tab key="5" :to="{ path: switchTab('statistics') }" ripple>
        Statistics
      </v-tab>
    </v-tabs>
    <v-slide-y-transition mode="out-in">
      <router-view />
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'League',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: null,
    };
  },
  async created() {
    await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
      const league = this.$store.state.leagues.find(item => item.name === this.$route.params.name);
      this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
    });
  },
  methods: {
    switchTab(tab) {
      return `/league/${this.name}/${tab}`;
    },
  },
};
</script>

<style scoped></style>
