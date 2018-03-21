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
          <td>{{ props.item.white }}</td>
          <td class="text-xs-left">{{ props.item.black }}</td>
          <td class="text-xs-left">{{ props.item.added | moment("MMMM Do YYYY") }}</td>
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
          {
            text: 'Player Two',
            align: 'left',
            sortable: false,
            value: 'black',
          },
          { text: 'Added', value: 'added' },
          { text: 'Result', value: 'result' },
        ],
      };
    },
    created() {
      this.$store.dispatch('GET_ALL_GAMES', { league: this.$route.params.name });
    },
  };
</script>

<style scoped>

</style>
