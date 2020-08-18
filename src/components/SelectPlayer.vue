<template>
  <v-select
    v-model="pl"
    :items="items"
    :label="label"
    item-value="id"
    item-text="name"
    clearable
    @change="selectPlayer"
  />
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    pl: '',
  }),

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

<style scoped></style>
