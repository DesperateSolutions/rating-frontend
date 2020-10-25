<template>
  <div class="ds-card">
    <form ref="addGame">
      <h1 class="ds-title-3">Legg til spill</h1>
      <div class="ds-row">
        <div class="ds-col-6">
          <div class="ds-select__container">
            <label for="select" class="sr-only">Player one</label>
            <select id="select" v-model="playerone" class="ds-select__input ds-btn ds-btn--ter select--input">
              <option selected value="default">Player one</option>
              <option v-for="p in players" :key="p.id">{{ p.name }}</option>
            </select>
          </div>
        </div>
        <div class="ds-col-6">
          <div class="ds-select__container">
            <label for="select2" class="sr-only">Player two</label>
            <select id="select2" v-model="playertwo" class="ds-select__input ds-btn ds-btn--ter select--input">
              <option selected value="default">Player two</option>
              <option v-for="p in players" :key="p.id">{{ p.name }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="ds-row">
        <div class="ds-col-6">
          <div class="form-input" style="margin: 0">
            <label>
              <input v-model="whiteValue" required type="number"/>
              <span class="placeholder">Player 1 score:</span>
            </label>
          </div>
        </div>
        <div class="ds-col-6">
          <div class="form-input" style="margin: 0">
            <label>
              <input v-model="blackValue" required type="number" />
              <span class="placeholder">Player 2 score:</span>
            </label>
          </div>
        </div>
      </div>
      <div class="ds-row">
        <div class="ds-col-6">
          <label class="ds-checkbox" for="checkboxDate">
            <input id="checkboxDate" v-model="checkbox" type="checkbox" />
            <span style="margin-left: 1rem">Spesifiser dato og tidspunkt</span>
          </label>
        </div>
      </div>
      <div v-if="checkbox" class="ds-row">
        <flat-pickr v-model="date" :config="flatPickerConfig" name="date" placeholder="Velg dato"></flat-pickr>
      </div>

      <div class="ds-button-row">
        <button class="ds-btn ds-btn--pri" @click="submit">Legg til spill</button>
        <button class="ds-btn ds-btn--sec" @click="clear">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex';
import flatPickr from 'vue-flatpickr-component';
import { isObjectEmpty } from '@/util/helpers';
import 'flatpickr/dist/flatpickr.css';
import 'flatpickr/dist/themes/material_blue.css';

moment.locale('nb');

export default {
  name: 'AddGame',

  components: {
    flatPickr,
  },

  data: () => ({
    whiteValue: '',
    blackValue: '',
    playerone: 'default',
    playertwo: 'default',
    date: new Date(),
    checkbox: false,
    flatPickerConfig: {
      altInput: true,
      altFormat: 'd.m.Y H:i',
      minDate: null,
      maxDate: null,
      dateFormat: 'Z',
      time_24hr: true,
      enableTime: true,
    },
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
        leagueId: this.selectedLeague.id,
        whiteId: this.playerone,
        blackId: this.playertwo,
        result: `${this.whiteValue}-${this.blackValue}`,
        date: moment(new Date(this.date)).format(),
      });
      this.$refs.addGame.reset();
    },

    clear() {
      this.$refs.addGame.reset();
    },
  },
};
</script>

<style scoped lang="scss">
.select--input {
  border-bottom: 1px solid black;
}
</style>
