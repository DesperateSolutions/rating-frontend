<template>
  <div>
    <div class="ds-table-container">
      <table class="ds-table">
        <tbody>
          <tr v-for="item in leagues" :key="item.name" @click="chooseLeague(item.name, item)">
            <td style="cursor: pointer">{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="fab-container">
      <button class="ds-btn ds-btn--pri ds-btn--round" @click="addLeague">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </div>
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

.ds-btn--round {
  border-radius: 100%;
}
</style>
