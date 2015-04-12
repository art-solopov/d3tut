var width = 1000;
var height = 1000;
var margin = 5;

var svg = d3.select('svg')
            .attr('width', width).attr('height', height);
var treeMap = d3.layout.treemap().size([width, height]);

d3.json('data.json', function(error, data){
    var nodes = treeMap.nodes(data);
    svg.selectAll('.node').data(nodes).enter()
       .append('rect').attr('x', function(d){return d.x + margin * d.depth})
       .attr('y', function(d){return d.y + margin * d.depth})
       .attr('width', function(d) { return d.dx - 2 * margin * d.depth } )
       .attr('height', function(d) { return d.dy - 2 * margin * d.depth } )
       .attr('fill', function(d) { return $c.rgb2hex(50, 50, 50 + 50 * d.depth); })
       .attr('stroke', 'black')
       .attr('stroke-width', 1);
});
