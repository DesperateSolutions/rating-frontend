<template>
    <v-container
      fluid
      style="min-height: 0;"
      grid-list-md
    >
      <v-form ref="addLeague">
        <v-layout>
          <v-flex lg6 md6 sm12 offset-lg3 offset-md3>
            <v-card>
              <v-card-title>
                <h3 class="headline mb-12">Opprett liga</h3>
              </v-card-title>
              <v-card-text class="text-xs-center">
                <v-text-field
                  label="Name:"
                  v-model="name"
                >
                </v-text-field>
              </v-card-text>
              <v-layout row wrap>
                <v-flex lg6 md6>
                  <v-card-text class="text-xs-center">
                    <v-checkbox
                      :label="`Draw allowed`"
                      v-model="checkDraw"
                    ></v-checkbox>
                  </v-card-text>
                </v-flex>
                <v-flex lg6 md6>
                  <v-card-text class="text-xs-center">
                    <v-checkbox
                      :label="`Scored results`"
                      v-model="checkScored"
                    ></v-checkbox>
                  </v-card-text>
                </v-flex>
              </v-layout>
              <v-card-text class="text-xs-center">
                <v-text-field
                  label="Period length:"
                  v-model="scoredResults"
                  :mask="scoredMask"
                >
                </v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn block
                       @click="addLeague"
                >
                  Add League
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
</template>

<script>
export default {
  name: 'AddLeague',
  data: () => ({
    scoredMask: '#',
    checkDraw: false,
    checkScored: true,
    scoredResults: '0',
    name: '',
  }),
  methods: {
    addLeague() {
      console.log(this.name)
    }
  }
};
</script>

<style scoped>
</style>
