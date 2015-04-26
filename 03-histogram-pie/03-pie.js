// Inspired by https://square.github.io/intro-to-d3/examples/#a-pie-chart
function pie(){
    var svg = d3.select('#pie').attr('width', 500).attr('height', 500);
    var data = [1, 2, 3, 4, 5];
    var d3pie = d3.layout.pie();
    var pie = d3pie(data);
    window.pie = pie;

    //The arc generator
    var arc = d3.svg.arc().innerRadius(100).outerRadius(200);

    var g = svg.append('g').attr('transform', 'translate(250,250)');
    g.selectAll('path.slice').data(pie).enter()
        .append('path').classed('slice', true).attr('d', arc)
        .attr('fill', function(d){ return $c.rgb2hex(255 - 40 * d.value, 100, 40 * d.value); });
};
