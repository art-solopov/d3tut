function partition() {
    var width = 1000;
    var height = 1000;

    var div = d3.select('#partition').style('width', width)
                .style('height', height).style('position', 'relative');
    var partition = d3.layout.partition().size([width, height]);

    d3.json('data.json', function(error, data){
        var nodes = partition.nodes(data);
        div.selectAll('.node').data(nodes).enter()
           .append('div')
           .style('position', 'absolute')
           .style('left', function(d){return d.x})
           .style('top', function(d){return d.y })
           .style('width', function(d) { return d.dx } )
           .style('height', function(d) { return d.dy } )
           .style('background-color', function(d) {
               return $c.rgb2hex(200, 200, 200 - 50 * d.depth)
           })
           .style('border', '1px solid black')
           .text(function(d) { return d.t; });
    });
}
