<template>
  <v-container
    fluid
    style="min-height: 0;"
    grid-list-lg
  >
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-title>
            <div>
              <h3 class="headline mb-0">Legg til spill</h3>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-radio-group>
              <v-radio
                v-for="name in radioGroup"
                :key="name.key"
                :label="`${name.player}`"
                :value="name.player"
              />
            </v-radio-group>
          </v-card-actions>
          <v-card-actions>
            <v-btn>Legg til spill</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'add-game',
    data() {
      return {
        radioGroup: [
          {
            player: 'Player one', key: 1,
          },
          {
            player: 'Player two', key: 2,
          },
        ],
      };
    },
  };
</script>

<style scoped>

</style>
