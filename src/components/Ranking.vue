<template>
  <v-container>
    {{ players }}
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="players"
        hide-actions
        class="elevation-1"
      >
        <template slot="players" slot-scope="props">
          <td class="text-xs-right">{{ props.games.name }}</td>
          <td class="text-xs-right">{{ props.games.rating }}</td>
        </template>
      </v-data-table>
    </v-app>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'ranking',
    computed: mapState([
      'players',
    ]),
    data() {
      return {
        headers: [
          {
            text: 'Player',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Rating', value: 'rating' },
        ],
      };
    },
    created() {
      this.$store.dispatch('GET_ALL_PLAYERS');
    },
  };
</script>

<style scoped>

</style>
