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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Leagues',

  data: () => ({
    headers: [
      {
        text: 'League',
        align: 'left',
        sortable: false,
        value: 'name',
      },
    ],
  }),

  computed: mapState(['leagues']),

  async created() {
    await this.fetchAllLeagues();
  },

  methods: {
    ...mapActions(['selectLeague', 'fetchAllLeagues']),

    chooseLeague(name, league) {
      this.selectLeague({ league });
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
