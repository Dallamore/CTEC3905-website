(function(){
  let slideImages = document.getElementById("slideImgs");
  let centreSection = document.getElementById("centre");
  let obj = JSON.parse(jsonString);

  let tileTitleArray = [];
  let tileFeatureArray = [];
  let tileTextArray = [];
  let numOfTiles = obj.siteContent.length;

  for(i = 0; i < numOfTiles; i++){
    tileTitleArray[i] = obj.siteContent[i].tileTitle;
    tileFeatureArray[i] = obj.siteContent[i].tileFeature;
    tileTextArray[i] =  obj.siteContent[i].tileText;
  }

  for(i = 0; i < numOfTiles; i++){
    slideImages.appendChild(createImg(tileFeatureArray[i]));
    centreSection.appendChild(createSection(tileTitleArray[i],tileTextArray[i]));
  }



  centreSection.appendChild(createSection("Map","Places to go"));



  let mapDiv = document.createElement("DIV");
  mapDiv.setAttribute("id", "map");
  mapDiv.setAttribute("class", "map slides");
  slideImages.appendChild(mapDiv);




  function createSection(x, y){
    let tt = document.createElement("SECTION");
    tt.setAttribute("class", "slideText");
    tt.appendChild(createTitle(x));
    tt.appendChild(createText(y));
    return tt;
  }

  function createTitle(x){
    let h1 = document.createElement("H1");
    let h1x = document.createTextNode(x);
    h1.appendChild(h1x);
    return h1;
  }

  function createText(x){
    let p1 = document.createElement("P");
    let p1x = document.createTextNode(x);
    p1.appendChild(p1x);
    return p1;
  }

  function createImg(x){
    let j = document.createElement("IMG");
    j.setAttribute("src", x);
    j.setAttribute("alt", "Slide"+i);
    j.setAttribute("class", "slides");
    return j;
  }



}());
