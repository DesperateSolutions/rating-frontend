<template>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-select
            :items="items"
            :v-model="player"
            label="Player One"
            bottom
          />
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    name: 'SelectPlayer',
    data() {
      return {
        player: null,
        items: [
          { text: 'Aulon' },
          { text: 'Premer' },
          { text: 'Sjur' },
        ],
      };
    },
    props: [
      'player',
      'items',
    ],
  };
</script>

<style scoped>

</style>
