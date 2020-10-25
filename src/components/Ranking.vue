<template>
  <div class="ds-card">
    <div class="ds-table-container">
      <table class="ds-table">
        <thead>
          <tr>
            <th class="ds-table__th">Player</th>
            <th class="ds-table__th"># of Games</th>
            <th class="ds-table__th">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="index">
            <td>{{ player.name }}</td>
            <td>{{ player.games.length }}</td>
            <td>{{ player.rating }}</td>
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
  name: 'Ranking',

  computed: mapState(['players', 'leagues', 'selectedLeague']),

  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.fetchAllLeagues();
      const league = this.leagues.find((item) => item.name === this.$route.params.name);
      await this.fetchAllPlayers({ leagueId: league.id });
      this.selectLeague({ league });
    } else {
      await this.fetchAllPlayers({ leagueId: this.selectedLeague.id });
    }
  },

  methods: {
    ...mapActions(['fetchAllLeagues', 'fetchAllPlayers', 'selectLeague']),
  },
};
</script>

<style scoped></style>
