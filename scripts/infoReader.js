(function(){
  let slideImages = document.getElementById("slideImgs");
  let centreSection = document.getElementById("tileTextTarget");
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

  function createSection(x, y){
    let tt = document.createElement("SECTION");
    tt.setAttribute("class", "slideText slideAnimation");
    tt.appendChild(createTitle(x));
    tt.appendChild(createText(y));
    return tt;
  }

  function createTitle(x){
    let h1 = document.createElement("H2");
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
    j.setAttribute("class", "slides slideAnimation");
    return j;
  }

/*MAP TILE START*/

  let mapTileTitle = "De Montfort University";
  let mapTileText = "44Lorem Ipsum is simply dummy text of the printing and typesetting industry. 11Lorem Ipsum is simply dummy text of the printing and typesetting industry. 11Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  centreSection.appendChild(createSection(mapTileTitle,mapTileText));

  let mapDiv = document.createElement("DIV");
  mapDiv.setAttribute("id", "map");
  mapDiv.setAttribute("class", "map slides slideAnimation");
  slideImages.appendChild(mapDiv);

  function initMap() {

    let latitude = 52.6295784;
    let longitude = -1.1388043;

    google.maps.event.trigger(map, 'resize');
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:parseFloat(latitude), lng:parseFloat(longitude)},
      zoom: 15
    });

    let marker = new google.maps.Marker({
          position: {lat:parseFloat(latitude), lng:parseFloat(longitude)},
          map: map,
          title: 'Hello World!'
        });
  }

  let map_canvas = document.getElementById('map');
  // function required to correctly load map when no longer hidden
  function visibleMapPlz() {
    setTimeout(function () {
        if (map_canvas.style.display !== 'none') {
            initMap();
        } else {
            visibleMapPlz();
        };
    }, 100);
};

visibleMapPlz();


/*MAP TILE END*/
}());
