<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-md
  >
    <v-form ref="addGame">
      <v-card>
        <v-container>
          <v-card-title>
            <h3 class="headline mb-0">Legg til spill</h3>
          </v-card-title>
          <v-layout 
            row 
            wrap>
            <v-flex 
              lg6 
              md6>
              <select-player
                :items="players"
                v-model="playerone"
                label="Player One"
              />
            </v-flex>
            <v-flex 
              lg6 
              md6>
              <select-player
                :items="players"
                v-model="playertwo"
                label="Player Two"
              />
            </v-flex>
          </v-layout>
          <v-layout 
            row 
            wrap>
            <v-flex 
              lg6 
              md6>
              <v-text-field
                label="Player 1 score:"
                :mask="whiteMask"
                v-model="whiteValue"
                type="tel"
              />
            </v-flex>
            <v-flex 
              lg6 
              md6>
              <v-text-field
                label="Player 2 score:"
                :mask="blackMask"
                v-model="blackValue"
                type="tel"
              />
            </v-flex>
          </v-layout>
          <v-layout 
            row 
            wrap>
            <v-flex 
              lg6 
              md6>
              <v-checkbox
                :label="`Spesifiser dato og tidspunkt`"
                v-model="checkbox"
              />
            </v-flex>
          </v-layout>
          <v-layout 
            v-if="checkbox" 
            row 
            wrap>
            <v-flex 
              lg6 
              md6>
              <v-menu
                :close-on-content-click="true"
                v-model="datemenu"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="date"
                  label="Velg dato"
                  prepend-icon="event"
                  readonly
                />
                <v-date-picker 
                  v-model="date" 
                  @input="datemenu = false"/>
              </v-menu>
            </v-flex>
            <v-flex 
              lg6 
              md6>
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                v-model="timemenu"
                :nudge-right="40"
                :return-value.sync="time"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="time"
                  label="Velg tidspunkt"
                  prepend-icon="access_time"
                  readonly
                />
                <v-time-picker
                  v-if="timemenu"
                  v-model="time"
                  full-width
                  @change="$refs.menu.save(time)"
                  format="24hr"
                />
              </v-menu>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-btn
              @click="clear"
              slot="activator"
            >
              Reset
            </v-btn>
            <v-spacer/>
            <v-btn
              @click="submit"
            >
              Legg til spill
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import moment from 'moment';
import { mapState } from 'vuex';
import SelectPlayer from './SelectPlayer.vue';
import { isObjectEmpty } from "../util/helpers";

moment.locale('nb');

export default {
  name: 'AddGame',
  data: () => ({
    whiteMask: '##',
    blackMask: '##',
    whiteValue: '',
    blackValue: '',
    playerone: '',
    playertwo: '',
    date: new Date().toISOString().substr(0, 10),
    datemenu: false,
    time: moment().format('LT'),
    timemenu: false,
    checkbox: false,
  }),
  computed: mapState(['players', 'selectedLeague']),
  async created() {
    if (isObjectEmpty(this.$store.state.selectedLeague)) {
      await this.$store.dispatch('GET_ALL_LEAGUES').then(() => {
        const league = this.$store.state.leagues.find(league => league.name === this.$route.params.name);
        this.$store.dispatch('GET_ALL_PLAYERS', { league: league.id });
        this.$store.dispatch('SELECT_LEAGUE', { selectedLeague: league });
      });
    }
    this.$store.dispatch('GET_ALL_PLAYERS', { league: this.$store.state.selectedLeague.id });
  },
  components: {
    'select-player': SelectPlayer,
  },
  methods: {
    submit() {
      this.$store.dispatch('ADD_A_GAME', {
        league: this.$store.state.selectedLeague.id,
        whiteId: this.playerone,
        blackId: this.playertwo,
        result: `${this.whiteValue}-${this.blackValue}`,
        date: moment(new Date(`${this.date} ${this.time}`)).format(),
      });
      this.$refs.addGame.reset();
    },
    clear() {
      this.$refs.addGame.reset();
    },
  },
};
</script>

<style scoped>
</style>
