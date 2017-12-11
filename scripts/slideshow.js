let index = 0;
let i;
let slides = document.getElementsByClassName("slides");
let timeout;
let paused = false;
let pausePlay = document.getElementsByClassName("pausePlay");
let timer = 15000;
pausePlay[0].style.display = "block";
pausePlay[1].style.display = "none";

let pauseButton = document.getElementById("pauseButton");
let nextButton = document.getElementById("nextButton");
let prevButton = document.getElementById("prevButton");
let slideText = document.getElementsByClassName("slideText");

pauseButton.addEventListener("click", pause);
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
	timeout = setTimeout(showSlides, timer);
}

function next() {
	clearTimeout(timeout);
	if (paused){
		pause();
	}
	showSlides();
}

function pause() {
	clearTimeout(timeout);

	if (!paused) {
		pausePlay[0].style.display = "none";
		pausePlay[1].style.display = "block";
		paused = true;
	} else {
		paused = false;
		pausePlay[0].style.display = "block";
		pausePlay[1].style.display = "none";
		timeout = setTimeout(showSlides, timer);
	}
}

function previous() {
	if (paused){
		pause();
	}
	clearTimeout(timeout);
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
	timeout = setTimeout(showSlides, timer);
}
