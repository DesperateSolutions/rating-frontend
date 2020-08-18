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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'League',
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    active: null,
  }),

  computed: {
    ...mapState(['leagues']),
  },

  async created() {
    await this.fetchAllLeagues();

    const league = this.leagues.find((item) => item.name === this.$route.params.name);
    this.selectLeague({ league });
  },

  methods: {
    ...mapActions(['fetchAllLeagues', 'selectLeague']),

    switchTab(tab) {
      return `/league/${this.name}/${tab}`;
    },
  },
};
</script>

<style scoped></style>
