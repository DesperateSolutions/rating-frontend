<template>
  <div class="ds-card">
    <h1 class="ds-title-2">Statistikk</h1>
    <div class="ds-select__container">
      <label for="select" class="sr-only"></label>
      <select id="select" v-model="player" class="ds-select__input ds-btn ds-btn--ghost">
        <option v-for="p in players" :key="p.id">{{ p.name }}</option>
      </select>
    </div>
    <pie-chart v-if="show" :stats="playerStats" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';
import PieChart from './PieChart.vue';

export default {
  name: 'Statistics',
  components: {
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
      const { id } = this.players.find((p) => p.name.trim() === this.player.trim());
      this.fetchPlayerStats({ leagueId: this.selectedLeague.id, player: id });
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
