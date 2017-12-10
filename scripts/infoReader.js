(function(){
  let slideImages = document.getElementById("slideImgs");
  let centreSection = document.getElementById("centre");
  let obj = JSON.parse(jsonString);

  let titleArray = [];
  let imgLocationArray = [];
  let imgTextArray = [];

  for(i = 0; i<obj.siteContent.length; i++){
    titleArray[i] = obj.siteContent[i].imgTitle;
    imgLocationArray[i] = obj.siteContent[i].imgLocation;
    imgTextArray[i] =  obj.siteContent[i].imgText;
  }

  for(i = 0; i < imgLocationArray.length; i++){
    let im = document.createElement("IMG");
    im.setAttribute("src", imgLocationArray[i]);
    im.setAttribute("alt", "Slide"+i);
    im.setAttribute("class", "slides");
    slideImages.appendChild(im);
  }

  for(i = 0; i < titleArray.length; i++){
    let tt = document.createElement("SECTION");
    tt.setAttribute("class", "slidetext");
    let h1 = document.createElement("H1");
    let h2 = document.createTextNode(titleArray[i]);
    h1.appendChild(h2);
    let p1 = document.createElement("P");
    let p2 = document.createTextNode(imgTextArray[i]);
    p1.appendChild(p2);
    tt.appendChild(h1);
    tt.appendChild(p1);
    centreSection.appendChild(tt);
  }
}());
