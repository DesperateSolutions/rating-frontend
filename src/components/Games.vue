<template>
  <div class="ds-card">
    <div class="ds-table-container">
      <table class="ds-table">
        <thead>
          <tr>
            <th class="ds-table__th">Player One</th>
            <th class="ds-table__th">Player Two</th>
            <th class="ds-table__th">Date</th>
            <th class="ds-table__th">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(game, index) in games" :key="index">
            <td>{{ game.whiteId }}</td>
            <td>{{ game.blackId }}</td>
            <td>{{ game.timestamp }}</td>
            <td>{{ game.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';

export default {
  name: 'Games',

  computed: mapState(['games', 'players', 'selectedLeague']),

  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.fetchAllLeagues();
      const league = this.$store.state.leagues.find((item) => item.name === this.$route.params.name);
      this.selectLeague({ league });
      await this.fetchAllPlayers({ leagueId: this.selectedLeague.id });
      await this.fetchAllGames({ leagueId: this.selectedLeague.id });
    } else {
      await this.fetchAllGames({ leagueId: this.selectedLeague.id });
    }
  },

  methods: {
    ...mapActions(['fetchAllGames', 'fetchAllPlayers', 'fetchAllLeagues', 'selectLeague']),
  },
};
</script>

<style scoped></style>
