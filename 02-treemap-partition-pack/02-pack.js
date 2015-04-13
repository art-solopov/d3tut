function pack() {
    var width = 1000;
    var height = 1000;

    var svg = d3.select('svg')
                .attr('width', width).attr('height', height);
    var pack = d3.layout.pack().size([width, height]);

    d3.json('data.json', function(error, data){
        var nodes = pack.nodes(data);
        svg.selectAll('circle').data(nodes).enter().append('circle')
           .attr('cx', function(d) { return d.x })
           .attr('cy', function(d) { return d.y })
           .attr('r', function(d) { return d.r } )
           .attr('stroke', 'black')
           .attr('stroke-width', '1')
           .attr('fill', function(d) {
               return $c.rgb2hex(200, 200, 200 - 50 * d.depth)
           });
    });
}
