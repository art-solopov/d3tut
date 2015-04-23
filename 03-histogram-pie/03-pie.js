// Inspired by https://square.github.io/intro-to-d3/examples/#a-pie-chart
function pie(){
    var svg = d3.select('#pie');
    var data = [1, 2, 3, 4, 5];
    var d3pie = d3.layout.pie();
    var pie = d3pie(data);
    window.pie = pie;ь
};
