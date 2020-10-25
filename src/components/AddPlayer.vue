<template>
  <div class="ds-card">
    <form ref="addPlayer">
      <h1 class="ds-title-3">Legg til ny spiller</h1>

      <div class="form-input">
        <label>
          <input v-model="name" required />
          <span class="placeholder">Name:</span>
        </label>
      </div>

      <div class="ds-button-col">
        <button class="ds-btn ds-btn--ghost" @click="addPlayer">Add Player</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';

export default {
  name: 'AddPlayer',

  data: () => ({
    name: '',
    error: null,
  }),

  computed: mapState(['leagues', 'selectedLeague']),

  async created() {
    if (isObjectEmpty(this.selectedLeague)) {
      await this.fetchAllLeagues();
      const league = this.leagues.find((item) => item.name === this.$route.params.name);
      this.selectLeague({ league });
    }
  },

  methods: {
    ...mapActions(['addPlayer', 'fetchAllLeagues', 'selectLeague']),

    addPlayer() {
      this.$store.dispatch('ADD_PLAYER', {
        league: this.$store.state.selectedLeague.id,
        name: this.name,
      });
      this.name = '';
    },
  },
};
</script>

<style scoped></style>
