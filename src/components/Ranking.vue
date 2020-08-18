<template>
  <v-container fluid>
    <v-app id="inspire">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="players"
          hide-default-footer
          class="elevation-24"
          :sort-by="sortBy"
          :sort-desc="descending"
          :items-per-page="rowsPerPage"
        />
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';

export default {
  name: 'Ranking',

  data: () => ({
    sortBy: 'rating',
    descending: true,
    rowsPerPage: -1,
    headers: [
      {
        text: 'Player',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      { text: '# of Games', sortable: false, value: 'games.length' },
      { text: 'Rating', value: 'rating' },
    ],
  }),

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
