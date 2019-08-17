<template>
  <v-container fluid style="min-height: 0;" grid-list-md>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-12">Statistikk</h3>
        <statistic-instance />
      </v-card-title>
    </v-card>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-12">Statistikk</h3>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
import StatisticInstance from './StatisticInstance.vue';

export default {
  name: 'Statistics',
  components: {
    StatisticInstance,
  },
};
</script>

<style scoped></style>
