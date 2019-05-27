import d3 from 'd3';
import baseChart from './baseChart'

function barChart(svg) {
  baseChart.apply(this, svg);

  this.render = function(data) {
    this.filteredData = JSON.parse(JSON.stringify(this.data);)
  }
}
