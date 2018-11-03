<template>
  <v-select
    :items="items"
    :label="label"
    v-model="pl"
    item-value="id"
    item-text="name"
    v-on:change="selectPlayer"></v-select>
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
