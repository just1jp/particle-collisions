var svg = d3.select('svg');
var g = svg.append('g');
var screenW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var screenH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Create food data set
var food = [];
var renderFood = function(n) {
  for (var i = 0; i < n; i++) {
    var newFood = {};
    newFood.id = i;
    newFood.x = Math.round(Math.random() * screenW);
    newFood.y = Math.round(Math.random() * screenH);
    food.push(newFood);
  }
};
var moveFood = function() {
  for (var i = 0; i < food.length; i++) {
    food[i].x = Math.round(Math.random() * screenW);
    food[i].y = Math.round(Math.random() * screenH);
  }
};

var update = function(data) {
  // DATA JOIN
  // Join new data with old elements if any
  var circle = g.selectAll('circle').data(data, function(d) {
    return d.id;
  });

  // UPDATE
  // Place elements on screen
  circle.enter().append('circle')
    .attr('r', 5 + 'px')
    .attr('cx', function(d) { return Math.round(Math.random() * screenW); })
    .attr('cy', function(d) { return Math.round(Math.random() * screenH); });
};

// The initial food display
renderFood(10);
update(food);

// // Food changing location
// d3.interval(function() {
//   update(d3.shuffle(food));
// }, 1500);