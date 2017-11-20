(function(){
	let sent = document.getElementById("sentence");
	let sentForm = document.getElementById("sentence-form");
	let space = document.getElementById("space-for-paragraphs");
	

  function doStuff(ev) {
    let para = document.createElement("p");
    let txt = document.createTextNode(sent.value);
    para.appendChild(txt);
    space.appendChild(para);
	ev.preventDefault();
  }

  sentForm.addEventListener("submit", doStuff);
	
}());