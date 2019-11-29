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
import { mapState } from 'vuex';
import { isObjectEmpty } from '../util/helpers';

export default {
  name: 'Games',
  data() {
    return {
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
    };
  },
  computed: mapState(['games', 'players']),
  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
        const league = this.$store.state.leagues.find(item => item.name === this.$route.params.name);
        this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
        this.$store.dispatch('GET_ALL_PLAYERS', {
          league: this.$store.state.selectedLeague.id,
        });
        this.$store.dispatch('GET_ALL_GAMES', {
          league: this.$store.state.selectedLeague.id,
        });
      });
    }
    this.$store.dispatch('GET_ALL_GAMES', {
      league: this.$store.state.selectedLeague.id,
    });
  },
};
</script>

<style scoped></style>
