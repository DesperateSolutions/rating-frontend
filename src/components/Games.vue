<template>
  <v-container>
    {{ games }}
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="games"
        hide-actions
        class="elevation-1"
      >
        <template slot="games" slot-scope="props">
          <td>{{ props.games.white }}</td>
          <td class="text-xs-right">{{ props.games.black }}</td>
          <td class="text-xs-right">{{ props.games._id }}</td>
          <td class="text-xs-right">{{ props.games.added }}</td>
          <td class="text-xs-right">{{ props.games.result }}</td>
        </template>
      </v-data-table>
    </v-app>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'games',
    computed: mapState([
      'games',
    ]),
    data() {
      return {
        headers: [
          {
            text: 'Player One',
            align: 'left',
            sortable: false,
            value: 'white',
          },
          { text: 'Player Two', value: 'black' },
          { text: 'id', value: '_id' },
          { text: 'Added', value: 'added' },
          { text: 'Result', value: 'result' },
        ],
      };
    },
    created() {
      this.$store.dispatch('GET_ALL_GAMES');
    },
  };
</script>

<style scoped>

</style>
<!--
<v-data-table
  :headers="headers"
  :items="games"
  hide-actions
  class="elevation-1"
>
  <template slot="games">
    <td>{{ games.white }}</td>
    <td>{{ games.black }}</td>
    <td class="text-xs-right">{{ games.added }}</td>
    <td class="text-xs-right">{{ games.result }}</td>
    <td class="text-xs-right">{{ games._id }}</td>
  </template>
</v-data-table>
-->
