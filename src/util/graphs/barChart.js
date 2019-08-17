import d3 from 'd3';
import BaseChart from './baseChart'

function barChart(svg) {
  BaseChart.apply(this, svg);
  console.log(this);
  console.log(svg);

  this.render = function(data) {
    this.filteredData = JSON.parse(JSON.stringify(data));
    console.log(this.filteredData);
  }

  this.created = function() {
    console.log('hello')
  }
}


export default barChart;
