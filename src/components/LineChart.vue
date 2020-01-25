<template>
  <div>
    <v-card-subtitle>Rating</v-card-subtitle>
    <resize-observer @notify="handleResize" />
    <svg ref="svgLine" class="pie" />
  </div>
</template>

<script>
import * as d3 from 'd3';
import { mapGetters } from 'vuex';
import {startOfYear, endOfYear, format} from 'date-fns';

export default {
  name: 'LineChart',

  props: {
    stats: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    line: null,
    width: 500,
    height: 300,
    padding: {
      top: 20,
      left: 0,
      bottom: 20,
      right: 0,
    },
    svg: null,
    svgSelection: null,
    chartWidth: 0,
    chartHeight: 0,
    x: null,
    y: null,
    xAxis: null,
    yAxis: null,
    update: null,
    xFormat: '%d-%b',
  }),

  computed: {
    ...mapGetters(['ratingOverTime']),
  },

  watch: {
    stats(newStats) {
      this.updateChart(newStats);
    },
  },

  mounted() {
    this.svg = this.$refs.svgLine;

    this.drawChart();
  },

  methods: {
    drawChart() {
      this.svg = d3.select(this.svg);

      this.height = this.height - this.padding.top - this.padding.bottom;
      this.width = this.width - this.padding.left - this.padding.right;

      this.svg
        .attr('width', this.width)
        .attr('height', this.height)
        .attr('viewBox', `-40 -40 ${this.width + 40} ${this.height + 60}`)
        .style('font-size', '14px')
        .append('g')
        .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

      this.x = d3.scaleLinear().range([0, this.width]);
      this.xAxis = d3.axisBottom().scale(this.x).tickFormat(d3.timeFormat(this.xFormat));

      this.svg
        .append('g')
        .attr('transform', `translate(0, ${this.height})`)
        .attr('class', 'xAxis');

      this.y = d3.scaleLinear().range([this.height, 0]);
      this.yAxis = d3.axisLeft().scale(this.y);

      this.svg.append('g').attr('class', 'yAxis');

      this.updateChart(this.stats);
    },

    updateChart() {
      const parseTime = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");
      const startOfTheYear = startOfYear(parseTime(this.ratingOverTime[0].timestamp));
      const endOfTheYear = endOfYear(parseTime(this.ratingOverTime[0].timestamp));

      this.x.domain([startOfTheYear, endOfTheYear]);
      this.svg
        .selectAll('.xAxis')
        .transition()
        .duration(1000)
        .call(this.xAxis);

      this.y.domain(d3.extent(this.ratingOverTime, d => +d.rating));
      this.svg
        .selectAll('.yAxis')
        .transition()
        .duration(1000)
        .call(this.yAxis);

      this.update = this.svg.selectAll('.lineTest').data([this.ratingOverTime], d => +d.rating);

      this.update
        .enter()
        .append('path')
        .merge(this.update)
        .transition()
        .duration(1000)
        .attr(
          'd',
          d3
            .line()
            .x(time => this.x(parseTime(time.timestamp)))
            .y(rate => this.y(+rate.rating)).curve(d3.curveMonotoneX))
        .style('fill', 'none').style('stroke', 'steelblue').style('stroke-width', 2.5).style('color', 'white');
    },

    handleResize() {
      console.log('resize');
    },
  },
};
</script>

<style scoped></style>
