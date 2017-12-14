let index = 0;
let timeOut;
let timer = 15000;
let paused = false;
let pausePlay = document.getElementsByClassName("pausePlay");

let pauseButton = document.getElementById("pauseButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");

let animation = "fade 15s";

pausePlay[0].style.display = "block";
pausePlay[1].style.display = "none";

let slides = document.getElementsByClassName("slides");
let slideText = document.getElementsByClassName("slideText");

pauseButton.addEventListener("click", pause);
nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);

for(i=0; i<slides.length; i++){
  slides[i].style.animation = animation;
  slideText[i].style.animation = animation;
}

window.onload = showSlides();

function showSlides() {
  for ( i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slideText[i].style.display = "none";
  }
  index++;
  if (index > slides.length){
    index = 1;
  }
  slides[index - 1].style.display = "block";
  slideText[index-1].style.display="block";
  timeOut = setTimeout(showSlides, timer);
}

function next() {
  clearTimeout(timeOut);
  if (paused){
    pause();
  }
  showSlides();
}

function pause() {
	clearTimeout(timeOut);
  if (!paused) {
    pausePlay[0].style.display = "none";
		pausePlay[1].style.display = "block";
		paused = true;
    for(var i=0; i<slides.length; i++){
      slides[i].style.animation = "";
        slideText[i].style.animation = "";
    }
	}
  else {
		paused = false;
		pausePlay[0].style.display = "block";
		pausePlay[1].style.display = "none";
		timeout = setTimeout(showSlides, timer);
    showSlides();
    for(i=0; i<slides.length; i++){
      slides[i].style.animation = animation;
      slideText[i].style.animation = animation;
    }
	}
  clearTimeout(timeOut);
 }

function previous() {
  if (paused){
    pause();
  }
  clearTimeout(timeOut);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slideText[i].style.display = "none";
  }
  index--;
  if (index < 1){
    index = slides.length;
  }
  slides[index - 1].style.display = "block";
  slideText[index - 1].style.display = "block";
  timeOut = setTimeout(showSlides, timer);
}
