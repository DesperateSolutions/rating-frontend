<template>
  <v-container fluid>
    <v-card class="elevation-24">
      <v-card-title>
        <h3 class="headline mb-12">Statistikk</h3>
      </v-card-title>
      <v-card-actions>
        <select-player v-model="player" :items="players" label="Select Player" />
      </v-card-actions>
      <v-card-text>
        <pie-chart v-if="show" :stats="playerStats" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';
import SelectPlayer from './SelectPlayer.vue';
import PieChart from './PieChart.vue';

export default {
  name: 'Statistics',
  components: {
    SelectPlayer,
    PieChart,
  },

  data: () => ({
    player: '',
    show: false,
  }),

  computed: {
    ...mapState(['players', 'selectedPlayer', 'selectedLeague', 'leagues']),
    ...mapGetters(['playerStats']),
  },

  watch: {
    player() {
      this.fetchPlayerStats({ leagueId: this.selectedLeague.id, player: this.player });
    },

    playerStats() {
      this.show = this.playerStats !== null;
    },
  },

  async created() {
    if (isObjectEmpty(this.selectedLeague)) {
      await this.fetchAllLeagues();

      const league = this.leagues.find((item) => item.name === this.$route.params.name);

      await this.fetchAllPlayers({ leagueId: league.id });
      this.selectLeague({ league });
    } else {
      await this.fetchAllPlayers({ leagueId: this.$store.state.selectedLeague.id });
    }
  },

  methods: {
    ...mapActions(['fetchAllLeagues', 'fetchAllPlayers', 'selectLeague', 'fetchPlayerStats']),
  },
};
</script>

<style scoped></style>
