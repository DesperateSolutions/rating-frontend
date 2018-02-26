<template>
    <v-container fluid>
        <v-select
          :items="items"
          :label="label"
          v-model="pl"
          item-value="id"
          item-text="text"
          v-on:change="selectPlayer"
          bottom
        />
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        pl: '',
      };
    },
    props: ['items', 'label'],
    watch: {
      selected(val) {
        this.pl = val;
      },
    },
    methods: {
      selectPlayer: function(selected) {
        console.log('child changed: ', selected);
        this.$emit('input', selected);
      },
    },
  };
</script>

<style scoped>

</style>
