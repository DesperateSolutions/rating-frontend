<template>
  <div>
    <svg ref="svg" class="pie" width="300" height="300" />
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'PieChart',

  props: {
    stats: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    pie: null,
  }),

  watch: {
    stats(newStats) {
      this.drawChart(newStats);
    },
  },

  mounted() {
    const svg = d3.select(this.$refs.svg);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const margin = { top: 20, left: 0, bottom: 20, right: 0 };

    const chartWidth = width - (margin.left + margin.right);
    const chartHeight = height - (margin.top + margin.bottom);

    this.chartLayer = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

    this.arc = d3
      .arc()
      .outerRadius(0)
      .innerRadius(chartHeight / 2);

    this.pieG = this.chartLayer.append('g').attr('transform', `translate(${chartWidth / 2}, ${chartHeight / 2})`);

    this.drawChart(this.stats);
  },

  methods: {
    drawChart(stats) {
      d3.selectAll('path').remove();

      const arcs = d3
        .pie()
        .sort(null)
        .value(d => d.value)(stats);

      const block = this.pieG.selectAll('.arc').data(arcs);

      block.select('path').attr('d', this.arc);

      const newBlock = block.join('g').classed('arc', true);

      newBlock
        .join('path')
        .append('path')
        .attr('d', this.arc)
        .attr('id', (d, i) => `arc-${i}`)
        .attr('fill', d => (d.data.label === 'wins' ? '#00ff00' : '#ff0000'));

      newBlock
        .append('text')
        .attr('dx', 10)
        .attr('dy', -5)
        .attr('fill', 'white')
        .append('textPath')
        .attr('xlink:href', (d, i) => `#arc-${i}`)
        .text(d => d.data.label);
    },
  },
};
</script>

<style scoped></style>
