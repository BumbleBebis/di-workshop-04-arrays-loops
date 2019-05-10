function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  var x = 10
  var count = 5

  for (var i = 0; i < count; i++) {
    rect(x, 10, 10, 10)
    x = x + 20
  }
}
