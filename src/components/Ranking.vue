<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="players"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left">{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.rating }}</td>
        </template>
      </v-data-table>
    </v-app>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ranking',
  computed: mapState(['players']),
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
    this.$store.dispatch('GET_ALL_PLAYERS', {
      league: this.$store.state.selectedLeague.id,
    });
  },
};
</script>

<style scoped>
</style>
