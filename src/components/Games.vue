<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="games"
        disable-initial-sort
        :rows-per-page-items="rowsPerPage"
      >
        <template 
          slot="items" 
          slot-scope="props">
          <td>{{ props.item.whiteId }}</td>
          <td class="text-xs-left">{{ props.item.blackId }}</td>
          <td class="text-ws-left">{{ props.item.timestamp | moment("L LTS") }}</td>
          <td class="text-xs-left">{{ props.item.result }}</td>
        </template>
      </v-data-table>
    </v-app>
    <v-app/>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import { isObjectEmpty } from '../util/helpers';

export default {
  name: 'Games',
  computed: mapState(['games', 'players']),
  data() {
    return {
      rowsPerPage: [ 20, 30, 40, { "text": "$vuetify.dataIterator.rowsPerPageAll", "value": -1 } ],
      headers: [
        {
          text: 'Player One',
          align: 'left',
          sortable: false,
          value: 'white',
        },
        {
          text: 'Player Two',
          align: 'left',
          sortable: false,
          value: 'black',
        },
        { text: 'Date', align: 'left', value: 'timestamp' },
        { text: 'Result', value: 'result' },
      ],
    };
  },
  created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      this.$router.push({ path: '/leagues' });
    }
    this.$store.dispatch('GET_ALL_GAMES', {
      league: this.$store.state.selectedLeague.id,
    });
  },
};
</script>

<style scoped>
</style>
