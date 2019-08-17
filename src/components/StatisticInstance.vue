<template>
  <div>
    <svg class="graph__svg" ref="svg" />
  </div>
</template>

<script>
import BarChart from '../util/graphs/barChart';
import { mapState } from 'vuex';

export default {
  name: 'StatisticInstance',
  data() {
    return {
      svg: false,
    };
  },
  computed: {
    ...mapState(['players'])
  },
  mounted() {
    this.draw();
  },
  methods: {
    draw(options = {}) {
      this.svg = new BarChart(this.$refs.svg);
      this.svg.render(this.players);
    },
  },
};
</script>

<style scoped></style>
