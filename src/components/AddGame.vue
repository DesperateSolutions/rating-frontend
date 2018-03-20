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
            <v-card-text>
              <v-text-field label="Player 1" :mask="whiteMask" v-model="whiteValue"></v-text-field>
            </v-card-text>
            <v-card-text>
              <v-text-field label="Player 2" :mask="blackMask" v-model="blackValue"></v-text-field>
            </v-card-text>
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
      whiteMask: '##',
      blackMask: '##',
      whiteValue: '',
      blackValue: '',
      one: '',
      two: '',
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
        this.$store.dispatch('ADD_A_GAME', { whiteId: this.one, blackId: this.two, result: `${this.whiteValue}-${this.blackValue}` });
      },
      clear() {
        this.whiteValue = '';
        this.blackValue = '';
        this.one = '';
        this.two = '';
      },
    },
  };
</script>

<style scoped>

</style>
