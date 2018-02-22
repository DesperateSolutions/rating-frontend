<template>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-select
            :items="items"
            :label="label"
            v-model="pl"
            item-value="id"
            item-text="text"
            @input="selectPlayer"
            bottom
          />
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        pl: '',
      };
    },
    props: ['items', 'selected', 'label'],
    watch: {
      selected(val) {
        this.pl = val;
      },
    },
    methods: {
      selectPlayer(selected) {
        console.log('child changed: ', this.pl);
        this.$emit('change', selected);
      },
    },
  };
</script>

<style scoped>

</style>
