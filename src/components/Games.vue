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
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.whiteId }}</td>
          <td class="text-xs-left">{{ props.item.blackId }}</td>
          <td class="text-xs-left">{{ props.item.result }}</td>
        </template>
      </v-data-table>
    </v-app>
    <v-app></v-app>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'games',
  computed: mapState(['games', 'players']),
  data() {
    return {
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
        { text: 'Result', value: 'result' },
      ],
    };
  },
  created() {
    this.$store.dispatch('GET_ALL_GAMES', { league: this.$store.state.selectedLeague.id });
  },
};
</script>

<style scoped>
</style>
