<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-form ref="addPlayer">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title>
              <div>
                <h3 class="headline mb-12">Legg til ny spiller</h3>
              </div>
            </v-card-title>
            <v-flex xs12 sm12>
              <v-card-text style="height: 200px;" class="text-xs-center">
                <v-text-field
                  label="Name:"
                  v-model="name">
                </v-text-field>
                <v-card-actions>
                  <v-btn block
                         @click="addPlayer"
                  >
                    Add player
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
  import { isObjectEmpty } from "../util/helpers";

  export default {
  name: 'addPlayer',
  data() {
    return {
      name: '',
      error: null,
    };
  },
  methods: {
    addPlayer() {
      console.log(this.name);
      this.$store.dispatch('ADD_PLAYER', {
        league: this.$store.state.selectedLeague.id,
        name: this.name,
      });
    },
  },
  created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      this.$router.push({ path: '/leagues' })
    }
  }
};
</script>

<style scoped>
</style>
