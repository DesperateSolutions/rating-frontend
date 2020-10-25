<template>
  <div class="ds-col-6">
    <v-form ref="addLeague">
      <div class="ds-card">
        <h1 class="ds-title-3">Opprett liga</h1>
        <div class="form-input">
          <label>
            <input v-model="name" required />
            <span class="placeholder">Name:</span>
          </label>
        </div>

        <div class="form-input">
          <label>
            <input v-model="periodLength" type="number" />
            <span class="placeholder">Period length:</span>
          </label>
        </div>

        <div class="ds-button-col">
          <button class="ds-btn ds-btn--ghost" @click="addLeague">Add League</button>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddLeague',

  data: () => ({
    periodMask: '#',
    checkDraw: false,
    checkScored: true,
    periodLength: 0,
    name: '',
  }),

  methods: {
    ...mapActions(['addLeague']),

    async addLeague() {
      await this.addLeague({
        name: this.name,
        settings: {
          drawAllowed: this.checkDraw,
          periodLength: this.periodLength,
          scoredResults: this.checkScored,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
