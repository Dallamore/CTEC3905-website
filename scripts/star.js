function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let svgDocument = document.getElementById("canvas");
let svgns = "http://www.w3.org/2000/svg";

stArray =[];

for (i = 0; i < 8000; i++){
	stArray[i] = document.createElementNS(svgns, "circle");
	stArray[i].setAttributeNS(null, "cx", getRandomInt(0,4000)); //width
	stArray[i].setAttributeNS(null, "cy", getRandomInt(0,3000)); //height
	stArray[i].setAttributeNS(null, "r", getRandomInt(1,2)); //
	stArray[i].setAttributeNS(null, "fill", "white");
	stArray[i].setAttributeNS(null, "class", "shooting");
}

for (i = 0; i < stArray.length; i++){
  svgDocument.appendChild(stArray[i]);
}
