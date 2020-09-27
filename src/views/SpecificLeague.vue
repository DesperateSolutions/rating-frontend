<template>
  <div>
    <ul class="flex border-b">
      <li class="-mb-px mr-2">
        <router-link
          :to="{ path: switchTab('addGame') }"
          class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
        >
          Add Game
        </router-link>
      </li>
      <li class="mr-2">
        <router-link
          :to="{ path: switchTab('games') }"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Games
        </router-link>
      </li>
      <li class="mr-2">
        <router-link
          :to="{ path: switchTab('addPlayer') }"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Add Player
        </router-link>
      </li>
      <li class="mr-2">
        <router-link
          :to="{ path: switchTab('ranking') }"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Ranking
        </router-link>
      </li>
      <li class="mr-2">
        <router-link
          :to="{ path: switchTab('statistics') }"
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Statistics
        </router-link>
      </li>
    </ul>
    <v-slide-y-transition mode="out-in">
      <router-view />
    </v-slide-y-transition>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'League',
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    active: null,
  }),

  computed: {
    ...mapState(['leagues']),
  },

  async created() {
    await this.fetchAllLeagues();

    const league = this.leagues.find((item) => item.name === this.$route.params.name);
    this.selectLeague({ league });
  },

  methods: {
    ...mapActions(['fetchAllLeagues', 'selectLeague']),

    switchTab(tab) {
      return `/league/${this.name}/${tab}`;
    },
  },
};
</script>

<style scoped></style>
