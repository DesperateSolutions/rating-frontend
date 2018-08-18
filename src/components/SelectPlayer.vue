<template>
    <v-container fluid>
        <v-select
          :items="items"
          :label="label"
          v-model="pl"
          item-value="_id"
          item-text="name"
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
    selectPlayer(selected) {
      this.$emit('input', selected);
    },
  },
};
</script>

<style scoped>
</style>
