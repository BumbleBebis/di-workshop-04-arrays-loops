var ys = [20, 100, 180]
var speeds = [3, 3, 3]

function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  background(200)

  for (var i = 0; i < 3; i++) {
    ys[i] = ys[i] + speeds[i]
    if (ys[i] < 0 || ys[i] > height) {
      speeds[i] = speeds[i] * -1
    }
    rect(30 * (i + 1), ys[i], 20, 20)
  }
}
