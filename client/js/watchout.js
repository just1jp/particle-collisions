// Create food data set
var food = [];
for (var i = 0; i < 10; i++) {
  food.push(i);
}

var svg = d3.select('svg');
var g = svg.append('g');
var screenW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var screenH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var update = function(data) {
  // DATA JOIN
  // Join new data with old elements if any
  var circle = g.selectAll('circle').data(data);

  // UPDATE
  // Place elements on screen
  circle.enter().append('circle')
    .attr('r', 5 + 'px')
    .attr('cx', function(d) { return Math.round(Math.random() * screenW); })
    .attr('cy', function(d) { return Math.round(Math.random() * screenH); })
}

update(food);