var svg = d3.select('svg');
var g = svg.append('g');
var screenW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var screenH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// Create food data set
var createFoodArray = function(foodNumber) {
  var food = [];
  for (var i = 0; i < foodNumber; i++) {
    var newFood = {};
    newFood.id = i;
    newFood.x = Math.round(Math.random() * screenW);
    newFood.y = Math.round(Math.random() * screenH);
    food.push(newFood);
  }
  return food;
};
var updateFoodLocation = function(food) {
  for (var i = 0; i < food.length; i++) {
    food[i].x = Math.round(Math.random() * screenW);
    food[i].y = Math.round(Math.random() * screenH);
  }
  return food;
};

var render = function(data) {
  // DATA JOIN
  // Join new data with old elements if any
  var circle = g.selectAll('circle').data(data, function(d) {
    return d.id;
  });

  // UPDATE
  // Place elements on screen
  circle.enter().append('circle')
    .attr('r', 5 + 'px')
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; })
    .style('class', 'zombie');
};

var update = function(data) {
  var circle = d3.selectAll('circle').data(data, function(d) {
    return d.id;
  });
  circle
    .transition().duration(1000)
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; });
}

// The initial food display
food = createFoodArray(10);
render(food);

// Moving food at intervals
// d3.interval(function() {
//   food = updateFoodLocation(food);
//   update(food);
// }, 1000);





