function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let svgDocument = document.getElementById("canvas");
let svgns = "http://www.w3.org/2000/svg";
let shape = document.createElementNS(svgns, "circle");
let shape2 = document.createElementNS(svgns, "circle");

stArray =[];

for (i = 0; i < 400; i++){
  stArray[i] = document.createElementNS(svgns, "circle");
  stArray[i].setAttributeNS(null, "cx", getRandomInt(0,screen.width));
  stArray[i].setAttributeNS(null, "cy", getRandomInt(0,screen.height));
  stArray[i].setAttributeNS(null, "r", getRandomInt(1,2));
  stArray[i].setAttributeNS(null, "fill", "white");
}


for (i = 0; i < stArray.length; i++){
  document.getElementById("canvas").appendChild(stArray[i]);
}
