function histogram(){
    var values = d3.range(500).map(d3.random.normal(4.0, 1.0));
    var div = d3.select('#histogram');
    var histogram = d3.layout.histogram()(values);
    window.histogram = histogram;
    div.selectAll('div')
        .data(histogram)
        .enter().append('div').classed('bin', true)
        .style('position', 'absolute')
        .style('left', function(d){ return d.x * 50; })
        .style('width', function(d){ return d.dx * 50; })
        .style('top', function(d) { return 800 - d.y * 5; })
        .style('height', function(d){ return d.y * 5 })
        .style('background-color', 'blue')
        .style('border', '1px solid black');
}
