<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
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
            <v-layout row wrap>
              <v-flex xs6 sm6>
                <v-card-text>
                  <v-text-field
                    label="Player 1 score:"
                    :mask="whiteMask"
                    v-model="whiteValue"
                  />
                </v-card-text>
              </v-flex>
              <v-flex xs6 sm6>
                <v-card-text>
                  <v-text-field
                    label="Player 2 score:"
                    :mask="blackMask"
                    v-model="blackValue"
                  />
                </v-card-text>
              </v-flex>
            </v-layout>
            <v-card-actions>
              <v-btn
                @click="submit"
              >
                Legg til spill
              </v-btn>
              <v-tooltip bottom>
                <v-btn
                  @click="clear"
                  slot="activator"
                >
                  Reset
                </v-btn>
                <span>Resetter ikke dropdown-menyen ordentlig, velg spillere på nytt</span>
              </v-tooltip>
            </v-card-actions>
            <v-snackbar
              :timeout="timeout"
              :color="color"
              :multi-line="true"
              v-model="snackbar"
            >
              {{ text }}
              <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
            </v-snackbar>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import SelectPlayer from './SelectPlayer.vue';

export default {
  name: 'add-game',
  data: () => ({
    whiteMask: '##',
    blackMask: '##',
    whiteValue: '',
    blackValue: '',
    one: '',
    two: '',
    color: '',
    timeout: 6000,
    snackbar: false,
    text: '',
  }),
  computed: mapState(['players']),
  created() {
    this.$store.dispatch('GET_ALL_PLAYERS', {
      league: this.$route.params.name,
    });
  },
  components: {
    'select-player': SelectPlayer,
  },
  methods: {
    submit() {
      this.$store.dispatch('ADD_A_GAME', {
        league: this.$route.params.name,
        whiteId: this.one,
        blackId: this.two,
        result: `${this.whiteValue}-${this.blackValue}`,
      });
      if (this.$store.state.success === true) {
        this.color = 'success';
        this.text = 'Game added!';
        this.snackbar = true;
      } else if (this.$store.state.success === false) {
        this.color = 'failed';
        this.snackbar = true;
      }
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
