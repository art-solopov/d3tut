var width = 1000;
var height = 1000;

var svg = d3.select('svg')
            .attr('width', width).attr('height', height);
var tree = d3.layout.tree().size([width, height]);

d3.json('data.json', function(error, data){
    var nodes = tree.nodes(data);
    var links = tree.links(nodes);
    svg.selectAll('.link').data(links).enter()
       .append('line').attr('class', 'link')
       .attr('x1', function(d){return d.source.x})
       .attr('y1', function(d){return d.source.y})
       .attr('x2', function(d){return d.target.x})
       .attr('y2', function(d){return d.target.y})
       .attr('stroke', 'blue');
    svg.selectAll('.node').data(nodes).enter()
       .append('text').attr('x', function(d){return d.x})
       .attr('y', function(d){return d.y})
       .text(function(d){ return d.t;});
});
