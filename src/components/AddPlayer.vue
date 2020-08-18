<template>
  <v-container fluid>
    <v-form ref="addPlayer">
      <v-card class="elevation-24">
        <v-card-title>
          <h3 class="headline mb-12">
            Legg til ny spiller
          </h3>
        </v-card-title>
        <v-card-text style="height: 100px;" class="text-center">
          <v-text-field v-model="name" label="Name:" />
        </v-card-text>
        <v-card-actions>
          <v-btn block @click="addPlayer">
            Add player
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import { isObjectEmpty } from '../util/helpers';

export default {
  name: 'AddPlayer',
  data() {
    return {
      name: '',
      error: null,
    };
  },
  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
        const league = this.$store.state.leagues.find((item) => item.name === this.$route.params.name);
        this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      });
    }
  },
  methods: {
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
