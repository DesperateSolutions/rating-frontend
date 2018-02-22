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
            <SelectPlayer
              :selected="one"
              :items="items"
              label="Player One"
              @change="playerChanged"
            />
            <!--<SelectPlayer
              :selected="playerTwo"
              :items="items"
              label="Player Two"
              @change="playerChanged()"
            />
            -->
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
  import SelectPlayer from './SelectPlayer';

  export default {
    name: 'add-game',
    data() {
      return {
        one: '',
        playerTwo: '',
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
          { text: 'Aulon',
            id: 'Aulon',
          },
          { text: 'Premer',
            id: 'Premer',
          },
        ],
      };
    },
    components: {
      SelectPlayer,
    },
    methods: {
      submit() {
        console.log('submit');
      },
      clear() {
        console.log('clear');
      },
      playerChanged() {
        console.log('player changed: ', this.one);
      },
    },
  };
</script>

<style scoped>

</style>
