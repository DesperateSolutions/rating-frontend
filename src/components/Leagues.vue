<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="leagues"
        hide-actions
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-left" @click="chooseLeague(props.item.name)">{{ props.item.name }}</td>
        </template>
      </v-data-table>
    </v-app>
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
    chooseLeague(league) {
      this.$router.push({ path: `league/${league}` });
    },
  },
  created() {
    this.$store.dispatch('GET_ALL_LEAGUES');
  },
};
</script>

<style scoped>
</style>
