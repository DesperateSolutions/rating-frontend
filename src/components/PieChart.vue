<template>
  <div>
    <v-card-subtitle>Wins/Losses</v-card-subtitle>
    <resize-observer @notify="handleResize" />
    <svg ref="svg" class="pie" />
  </div>
</template>

<script>
import * as d3 from 'd3';
import debounce from '../util/debounce';

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
    width: 300,
    height: 300,
    padding: {
      top: 20,
      left: 0,
      bottom: 20,
      right: 0,
    },
    svg: null,
    svgSelection: null,
  }),

  watch: {
    stats(newStats) {
      this.updateChart(newStats);
    },
  },

  mounted() {
    this.width = this.parentWidth();
    this.svg = this.$refs.svg;

    this.drawChart();
  },

  methods: {
    drawChart() {
      this.svgSelection = d3.select(this.svg);
      this.svgSelection.attr('width', this.width).attr('height', this.height);
      const chartWidth = this.width - (this.padding.left + this.padding.right);
      const chartHeight = this.height - (this.padding.top + this.padding.bottom);

      this.chartLayer = this.svgSelection.append('g').attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

      this.arc = d3
        .arc()
        .outerRadius(chartHeight / 2)
        .innerRadius(chartHeight / 4)
        .padAngle(0.05);

      this.pieG = this.chartLayer.append('g').attr('transform', `translate(${chartWidth / 2}, ${chartHeight / 2})`);

      this.updateChart(this.stats);
    },

    parentWidth() {
      const { svg } = this.$refs;
      const { width } = svg.parentNode.getBoundingClientRect();
      const paddingLeft = +getComputedStyle(svg.parentNode).paddingLeft.split('px')[0];
      const paddingRight = +getComputedStyle(svg.parentNode).paddingRight.split('px')[0];
      const paddingSum = paddingLeft + paddingRight;
      return width - paddingSum;
    },

    handleResize() {
      this.width = this.parentWidth();
      d3.select(this.svg)
        .transition()
        .attr('height', this.padding.top + this.height + this.padding.bottom)
        .attr('width', this.padding.left + this.width + this.padding.right);

      debounce(function () {
        this.drawChart()
      }, 250);
    },

    updateChart(stats) {
      d3.selectAll('path').remove();
      console.log(this.parentWidth());

      const total = d3.sum(this.stats.map(stat => stat.value));

      const arcs = d3
        .pie()
        .sort(null)
        .value(d => d.value)(stats);

      const block = this.pieG.selectAll('.arc').data(arcs);

      block.select('path').attr('d', this.arc);

      console.log(this.pieG.node());

      this.pieG.append('span').attr('id', 'info');

      const infoBlock = d3.select('#info');

      console.log(infoBlock);

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
