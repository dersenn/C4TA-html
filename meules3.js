const sketch3 = document.getElementById("sketch3")

// dom.stage = document.createElement("stage")
// dom.stage.style.transform = "translateX(" + (ngn.center.x * ngn.res) + "px) translateY(" + (ngn.center.y * ngn.res) + "px)"
// dom.stage.id = "stage3"

// document.body.appendChild(dom.stage)

svg.makeLayer({ parent: sketch3, id: "svgLayer3", x: ngn.min/2, y: ngn.min/2})


//drehung
lineRotation = function ({ stageCenter, center, radius, rotation }) {

  return [
    { x: center.x + Math.sin(rotation) * radius, y: center.y + Math.cos(rotation) * radius },
    { x: center.x - Math.sin(rotation) * radius, y: center.y - Math.cos(rotation) * radius }
  ];
};

for (let i = 0; i < 1000; i++) {

  let angle = getRandomInt(0,360)
  let col = "#0f0"
  let stroke = 0.3

  let lineCenter = { x: (-1 + Math.random() * 2) * 50, y: (-1 + Math.random() * 2) * 50 }
  let stageCenter = {x: 0, y: 0}


  // OUTPUTS :-) COMMENT/UNCOMMENT BLOCKS

  // SQUARISH STACK
  // if (lineCenter.y < -20) {
  //     angle = getRandomInt(160, 200)
  //     stroke = 0.7
  // } else if (lineCenter.y > 40) {
  //     angle = getRandomInt(60, 120) 
  // } else if (lineCenter.x < -40 || lineCenter.x > 40) {
  //     angle = getRandomInt(160, 200)
  //     stroke = 0.7
  // } else {
  //     angle = Math.random() * 360
  //     stroke = 1.5
  // }
  ///////////////////////////////

  // STRICT CIRCLE STACK
   if (getDistance(stageCenter, lineCenter) < 50) {
       angle = Math.random() * 180
       col = "#0f0"
   } else {
       angle = Math.random() * 180/6
       if (Math.random() < .5) {
           angle *= -1
       }
       col = "#000"
  }
  ///////////////////////////////

  // FLOW???
  // let dist = getDistance(stageCenter, lineCenter)
  // if (Math.random() < .5) {
  //     let flip = -1
  // }
  // angle = mapValues(dist, 0, 50, 90, 0)
  ///////////////////////////////

  // FLUID CIRCLE STACK
  // let flip
  // let dist = getDistance(stageCenter, lineCenter)
  // if (Math.random() < .5) {
  //   flip = -1
  // } else {
  //   flip = 1
  // }
  // angle = flip * getRandomInt(0, mapValues(dist, 0, Math.sqrt(60**2), 360, 0))
  // let colval = mapValues(dist, 0, Math.sqrt(60**2), 255, 20)
  // col = "rgb(0," + colval + ",0)"
  // stroke = mapValues(dist, 0, Math.sqrt(60**2), .2, .9)
  ///////////////////////////////


  // DRAW STUFF
  let line = lineRotation({
    stageCenter: stageCenter,
    center: lineCenter,
    rotation: radians(angle),
    radius: 7
  });

  let path = svg.path(line);

  svg.makeLine({
    id: "line_" + i, 
    parent: dom.svgLayer3, 
    cap: "round", //doesn't work, hmmm...
    stroke: stroke, 
    color: col, 
    d: path
  });
}