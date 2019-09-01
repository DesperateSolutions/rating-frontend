<template>
  <v-container
    fluid
  >
    <v-form ref="addLeague">
      <v-row>
        <v-col
          lg="6"
          md="6"
          sm="12"
          offset-lg="3"
          offset-md="3">
          <v-card 
            class="elevation-24"
          >
            <v-card-title>
              <h3 class="headline mb-12">Opprett liga</h3>
            </v-card-title>
            <v-card-text class="text-center">
              <v-text-field
                label="Name:"
                v-model="name"
              />
            </v-card-text>
            <v-row>
              <v-col
                lg="6"
                md="6">
                <v-card-text class="text-center">
                  <v-checkbox
                    :label="`Draw allowed`"
                    v-model="checkDraw"
                  />
                </v-card-text>
              </v-col>
              <v-col
                lg="6"
                md="6">
                <v-card-text class="text-center">
                  <v-checkbox
                    :label="`Scored results`"
                    v-model="checkScored"
                  />
                </v-card-text>
              </v-col>
            </v-row>
            <v-card-text class="text-center">
              <v-text-field
                label="Period length:"
                v-model="periodLength"
                :mask="periodMask"
              />
            </v-card-text>
            <v-card-actions>
              <v-btn
                block
                @click="addLeague"
              >
                Add League
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
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
    addLeague() {
      this.$store.dispatch('ADD_A_LEAGUE', {
        name: this.name,
        settings: {
          drawAllowed: this.checkDraw,
          periodLength: parseInt(this.periodLength, 10),
          scoredResults: this.checkScored,
        },
      });
    },
  },
};
</script>

<style scoped>
</style>
