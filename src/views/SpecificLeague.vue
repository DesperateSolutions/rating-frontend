<template>
  <div>
    <ul class="tabs">
      <li>
        <router-link :to="{ path: switchTab('addGame') }" class="tab"> Add Game </router-link>
      </li>
      <li>
        <router-link :to="{ path: switchTab('games') }" class="tab"> Games </router-link>
      </li>
      <li>
        <router-link :to="{ path: switchTab('addPlayer') }" class="tab"> Add Player </router-link>
      </li>
      <li>
        <router-link :to="{ path: switchTab('ranking') }" class="tab"> Ranking </router-link>
      </li>
      <li>
        <router-link :to="{ path: switchTab('statistics') }" class="tab"> Statistics </router-link>
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

<style scoped lang="scss">
@import '@/style/variables/_colors';

.tabs {
  position: relative;
  display: flex;
  width: 100%;
  margin: 1rem 0;
  padding-bottom: 5px;
  overflow-x: auto;

  &::after {
    position: absolute;
    right: 0;
    bottom: 4px;
    left: 0;
    height: 1px;
    background: $ds-grey;
    content: '';
  }

  &::-webkit-slider-runnable-track {
    background: blue;
  }

  &::-webkit-scrollbar {
    height: 6px;
    transform: translateY(10px);
  }

  &::-webkit-scrollbar-track {
    background: $ds-grey-light;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $ds-grey-light;
  }
}

.tab {
  position: relative;
  display: block;
  padding: 0.5rem 0.5rem;
  color: $ds-grey-dark;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  background: none;
  border: 0;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &::after {
    position: absolute;
    right: 0;
    bottom: -3px;
    left: 0;
    height: 1px;
    background: $ds-grey-light;
    content: '';
  }

  &.active {
    color: $ds-grey-dark;
    border-bottom-color: black;
  }
}

.tab--right {
  margin-left: auto;
}

.tab__icon {
  display: none !important;
  margin-right: 0.35rem;
  color: $ds-grey-dark;
}
</style>
