<template>
  <v-container fluid>
    <v-simple-table class="elevation-24">
      <tbody>
        <tr v-for="item in leagues" :key="item.name" @click="chooseLeague(item.name, item)">
          <td>{{ item.name }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-row class="fab-container">
      <v-btn fab @click="addLeague">
        <v-icon>add</v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Leagues',
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
  computed: mapState(['leagues']),
  created() {
    this.$store.dispatch('GET_ALL_LEAGUES');
    this.name = '';
  },
  methods: {
    chooseLeague(name, league) {
      this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      this.$router.push({ path: `league/${name}/addGame` });
    },
    addLeague() {
      this.$router.push({ name: 'newLeague' });
    },
  },
};
</script>

<style scoped>
.fab-container {
  position: fixed;
  bottom: 3rem;
  right: 2rem;
}
</style>
