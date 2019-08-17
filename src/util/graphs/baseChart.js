import d3 from 'd3';

function BaseChart(svg) {
  this.data = {};
  this.height = 0;
  this.witdh = 0;
  this.padding = { top: 30, right: 40, bottom: 40, left: 120 };
  this.max = 0;
  this.min = 0;
  this.strokeWidth = 1.5;

  this.init = function() {
    this.svg = d3.select(svg);

    this.svg.attr('xmlns:xlink', 'http://www.w3.org/1999/xlink').attr('xmlns', 'http://www.w3.org/2000/svg');

    // Clear the contents of the svg
    this.svg.selectAll('*').remove();

    this.background = this.svg
      .append('rect')
      .attr('class', 'background')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'black');

    // Append heading element
    this.heading = this.svg
      .append('text')
      .attr('class', 'heading')
      .attr('font-weight', 500)
      .attr('font-size', '1em')
      .attr('y', '1em');

    // Append canvas element
    this.canvas = this.svg
      .append('g')
      .attr('class', 'canvas')
      .attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    // Append common axis elements
    this.xAxis = this.canvas.append('g').attr('class', 'axis x');
    this.yAxis = this.canvas.append('g').attr('class', 'axis y');
    this.x2Axis = this.canvas.append('g').attr('class', 'axis x2');
    this.y2Axis = this.canvas.append('g').attr('class', 'axis y2');

    this.created();
  };

  // The parent container width is needed for each render of a template.
  this.parentWidth = function() {
    const { width } = svg.parentNode.getBoundingClientRect();
    const paddingLeft = +getComputedStyle(svg.parentNode).paddingLeft.split('px')[0];
    const paddingRight = +getComputedStyle(svg.parentNode).paddingRight.split('px')[0];
    const paddingSum = paddingLeft + paddingRight;
    return width - paddingSum;
  };

  // Placeholder for operations to be run once a child template is initialized
  this.created = function() {};

  // All templates share these common operations when rendered
  this.commonRender = function(data) {
    if (data === undefined || data.data === undefined) return;
    this.data = data;

    this.canvas.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`);

    this.width = this.parentWidth() - this.padding.left - this.padding.right;
    this.height = Array.isArray(this.data.data) ? this.data.data.length * this.rowHeight : 500;

    return true;
  };

  // Placeholder for the render method
  this.render = function() {};
}


export default BaseChart;
