let b = document.getElementById("canvas");
let star = document.getElementById("star");
makeStars(star);

function makeStars(star){
  var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'path'); //Create a path in SVG's namespace
  newElement.setAttribute("d","M 0 0 L 10 10"); //Set path's data
  newElement.style.stroke = "#efefef"; //Set stroke colour
  newElement.style.strokeWidth = "5px"; //Set stroke width
  newElement.cx = ranNum();
  newElement.cy = ranNum();
  b.appendChild(newElement);
    // for (var i = 0; i < 100; i++) {
    //   let x = ranNum();
    //   let y = ranNum();
    //   console.log(x + "  " + y);
    //   star.cx = x;
    //   star.cy = y;
    //   b.appendChild(newElement);
    // }
}

function ranNum(){
  return Math.ceil( Math.random() * 1000 );

}
