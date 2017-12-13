let index = 0;
let timeOut;
let timer = 15000;

let pauseButton = document.getElementById("pauseButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");

let slides = document.getElementsByClassName("slides");
let slideText = document.getElementsByClassName("slideText");

nextButton.addEventListener("click", next);
prevButton.addEventListener("click", previous);

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
  showSlides();
}

function previous() {

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
