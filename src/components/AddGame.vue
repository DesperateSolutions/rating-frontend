<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-form ref="addGame">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title>
              <div>
                <h3 class="headline mb-0">Legg til spill</h3>
              </div>
            </v-card-title>
            <select-player
              :items="players"
              v-model="one"
              label="Player One"
            />
            <select-player
              :items="players"
              v-model="two"
              label="Player Two"
            />
            <v-card-actions>
              <v-radio-group v-model="winner" row>
                <v-radio
                  v-for="name in radioGroup"
                  :key="name.key"
                  :label="`${name.player}`"
                  :value="name.player"
                />
              </v-radio-group>
            </v-card-actions>
            <v-card-actions>
              <v-btn
                @click="submit"
              >
                Legg til spill
              </v-btn>
              <v-btn
                @click="clear"
              >
                Reset
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex';
  import SelectPlayer from './SelectPlayer';

  export default {
    name: 'add-game',
    data: () => ({
      one: '',
      two: '',
      winner: '',
      radioGroup: [
        {
          player: 'Player one', key: 1,
        },
        {
          player: 'Player two', key: 2,
        },
      ],
      items: [
        {
          text: 'Aulon',
          id: 'Aulon',
        },
        {
          text: 'Premer',
          id: 'Premer',
        },
      ],
    }),
    computed: mapState([
      'players',
    ]),
    created() {
      this.$store.dispatch('GET_ALL_PLAYERS');
    },
    components: {
      'select-player': SelectPlayer,
    },
    methods: {
      submit() {
        console.log('submit');
        console.log('submit:', this.one);
        console.log('submit:', this.two);
        console.log('submit:', this.winner);
      },
      clear() {
        console.log('clear');
      },
    },
  };
</script>

<style scoped>

</style>
