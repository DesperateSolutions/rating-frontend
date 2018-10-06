<template>
    <v-snackbar v-model="show">
      {{snack}}
      <v-btn flat @click="show = false">Close</v-btn>
    </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Snackbar',
  computed: mapState(['snack']),
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
</style>
