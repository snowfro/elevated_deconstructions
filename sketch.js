
let canvasWidth = 2400;
let canvasHeight = 2400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noLoop()
}


function draw() {
  noFill()
  let a = 600
  let b = 1800
  let m = random(10,30)
  let x1 = random(a, b)
  let y1 = random(a, b)
  let x2 = random(a, b)
  let y2 = random(a, b)
  let x3 = random(a, b)
  let y3 = random(a, b)
  let x4 = random(a, b)
  let y4 = random(a, b)
  let x5 = random(a, b)
  let y5 = random(a, b)
  let x6 = random(a, b)
  let y6 = random(a, b)
  let x7 = random(a, b)
  let y7 = random(a, b)
  let x8 = random(a, b)
  let y8 = random(a, b)
  stroke("#111111")
  background("#eeeeee")
  for (let i = 0; i <= random(10,30); i++) {
    strokeWeight(5)
    line(x1 + i * m, y1 + i * m, x2 + i * m, y2 + i * m)
    line(x3 + i * m, y3 + i * m, x4 + i * m, y4 + i * m)
    line(x5 + i * m, y5 + i * m, x6 + i * m, y6 + i * m)
    line(x7 + i * m, y7 + i * m, x8 + i * m, y8 + i * m)
  }

  for (let i = 0; i < random(10,30); i++) {
    strokeWeight(random(1,10))
    circle(x1,y1, random(10,200))
  }
strokeWeight(10)
  circle(1200,1200,2000)
  strokeWeight(100)
strokeWeight(0.05)
stroke("pink")
for (let i = 0; i < 15000; i++) {
  line(random(-1200,3600), random(-1200,3600), random(-1200,3600), random(-1200,3600))
}




}


