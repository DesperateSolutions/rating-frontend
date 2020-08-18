<template>
  <v-container fluid>
    <v-card class="elevation-24">
      <v-card-title>
        <h3 class="headline mb-12">
          Statistikk
        </h3>
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
import { mapState, mapGetters } from 'vuex';
import SelectPlayer from './SelectPlayer.vue';
import { isObjectEmpty } from '../util/helpers';
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
    ...mapState(['players', 'selectedPlayer', 'selectedLeague']),
    ...mapGetters(['playerStats']),
  },

  watch: {
    player() {
      this.$store.dispatch('GET_PLAYER_STATS', { league: this.selectedLeague.id, player: this.player });
    },
    playerStats() {
      this.show = this.playerStats !== null;
    },
  },

  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
        const league = this.$store.state.leagues.find((item) => item.name === this.$route.params.name);
        this.$store.dispatch('GET_ALL_PLAYERS', { league: league.id });
        this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      });
    }
    await this.$store.dispatch('GET_ALL_PLAYERS', { league: this.$store.state.selectedLeague.id });
  },
};
</script>

<style scoped></style>
