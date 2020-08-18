<template>
  <v-snackbar
    :value="snack.visible"
    :color="snack.color"
    :timeout="snack.timeout"
    :multi-line="true"
    @input="CLOSE_SNACKBAR"
  >
    {{ snack.message }}{{ snack.info }}
    <v-btn text @click="CLOSE_SNACKBAR">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Snackbar',
  computed: mapState(['snack']),
  methods: mapMutations(['CLOSE_SNACKBAR']),
};
</script>

<style scoped></style>
