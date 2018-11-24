<template>
  <v-select
    :items="items"
    :label="label"
    v-model="pl"
    item-value="id"
    item-text="name"
    @change="selectPlayer"
    clearable
  />
</template>

<script>
export default {
  data() {
    return {
      pl: '',
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
  },
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
