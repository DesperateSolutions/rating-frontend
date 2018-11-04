<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-data-table
      :headers="headers"
      :items="leagues"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-left" @click="chooseLeague(props.item.name, props.item)">{{ props.item.name }}</td>
      </template>
    </v-data-table>
    <v-layout class="fab-container">
      <v-btn fab @click="addLeague">
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'leagues',
  computed: mapState(['leagues']),
  data() {
    return {
      headers: [
        {
          text: 'League',
          align: 'left',
          sortable: false,
          value: 'name',
        },
      ],
    };
  },
  methods: {
    chooseLeague(name, league) {
      this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      this.$router.push({ path: `league/${name}/addGame` });
    },
    addLeague() {
      this.$router.push({ name: 'newLeague' });
    }
  },
  created() {
    this.$store.dispatch('GET_ALL_LEAGUES');
  },
};
</script>

<style scoped>
  .fab-container {
    position: fixed;
    bottom: 3rem;
    right: 0;
  }
</style>
