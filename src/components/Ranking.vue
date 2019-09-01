<template>
  <v-container
    fluid
  >
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
import { mapState } from 'vuex';
import { isObjectEmpty } from '../util/helpers';

export default {
  name: 'Ranking',
  computed: mapState(['players']),
  data() {
    return {
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
    };
  },
  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
        const league = this.$store.state.leagues.find(item => item.name === this.$route.params.name);
        this.$store.dispatch('GET_ALL_PLAYERS', { league: league.id });
        this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      });
    } else {
      this.$store.dispatch('GET_ALL_PLAYERS', { league: this.$store.state.selectedLeague.id });
    }
  },
};
</script>

<style scoped>
</style>
