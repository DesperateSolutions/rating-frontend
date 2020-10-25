<template>
  <div class="ds-card">
    <form ref="addGame">
      <h1 class="ds-title-3">Legg til spill</h1>
      <div class="ds-row">
        <div class="ds-col-6">
          <select-player v-model="playerone" :items="players" label="Player One" />
        </div>
        <div class="ds-col-6">
          <select-player v-model="playertwo" :items="players" label="Player Two" />
        </div>
      </div>
      <v-row>
        <v-col lg="6" md="6">
          <v-text-field v-model="whiteValue" label="Player 1 score:" :mask="whiteMask" type="tel" />
        </v-col>
        <v-col lg="6" md="6">
          <v-text-field v-model="blackValue" label="Player 2 score:" :mask="blackMask" type="tel" />
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="6" md="6">
          <v-checkbox v-model="checkbox" :label="`Spesifiser dato og tidspunkt`" />
        </v-col>
      </v-row>
      <v-row v-if="checkbox">
        <v-col lg="6" md="6">
          <v-menu
            v-model="datemenu"
            :close-on-content-click="true"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <v-text-field slot="activator" v-model="date" label="Velg dato" prepend-icon="event" readonly />
            <v-date-picker v-model="date" @input="datemenu = false" />
          </v-menu>
        </v-col>
        <v-col lg="6" md="6">
          <v-menu
            ref="menu"
            v-model="timemenu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="time"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <v-text-field slot="activator" v-model="time" label="Velg tidspunkt" prepend-icon="access_time" readonly />
            <v-time-picker v-if="timemenu" v-model="time" format="24hr" @change="$refs.menu.save(time)" />
          </v-menu>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn slot="activator" @click="clear"> Reset </v-btn>
        <v-spacer />
        <v-btn @click="submit"> Legg til spill </v-btn>
      </v-card-actions>
    </form>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import { isObjectEmpty } from '@/util/helpers';
import SelectPlayer from './SelectPlayer.vue';

moment.locale('nb');

export default {
  name: 'AddGame',

  components: {
    'select-player': SelectPlayer,
  },

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

  computed: mapState(['players', 'selectedLeague', 'leagues']),

  async created() {
    if (isObjectEmpty(this.selectedLeague)) {
      await this.fetchAllLeagues();
      const league = this.leagues.find((item) => item.name === this.$route.params.name);
      await this.fetchAllPlayers({ leagueId: league.id });
      this.selectLeague({ league });
    } else {
      await this.fetchAllPlayers({ leagueId: this.selectedLeague.id });
    }
  },

  methods: {
    ...mapActions(['fetchAllLeagues', 'fetchAllPlayers', 'selectLeague', 'addGame']),

    async submit() {
      await this.addGame({
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

<style scoped></style>
