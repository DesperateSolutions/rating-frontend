<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-app id="inspire">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="players"
          hide-actions
          class="elevation-1"
          :pagination.sync="pagination"
        >
          <template
            slot="items"
            slot-scope="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.games.length }}</td>
            <td class="text-xs-left">{{ props.item.rating }}</td>
          </template>
        </v-data-table>
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
      pagination: {
        sortBy: 'rating',
        descending: true,
        rowsPerPage: -1,
      },
      headers: [
        {
          text: 'Player',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: '# of Games', sortable: false, value: 'games' },
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
