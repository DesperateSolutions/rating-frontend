<template>
  <v-container fluid>
    <v-app id="inspire">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="games"
          :footer-props="footerOptions"
          sort-by="date"
          class="elevation-24"
        />
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';

export default {
  name: 'Games',

  data: () => ({
    footerOptions: {
      itemsPerPage: [20, 40, 60],
      sortBy: 'rating',
      sortDesc: true,
    },
    headers: [
      {
        text: 'Player One',
        align: 'left',
        sortable: false,
        value: 'whiteId',
      },
      {
        text: 'Player Two',
        align: 'left',
        sortable: false,
        value: 'blackId',
      },
      { text: 'Date', align: 'left', value: 'timestamp' },
      { text: 'Result', value: 'result' },
    ],
  }),

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
