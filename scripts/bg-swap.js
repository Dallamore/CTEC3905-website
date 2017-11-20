if (window.attachEvent) {window.attachEvent('onload', bgSwap);}
else if (window.addEventListener) {window.addEventListener('load', bgSwap, false);}
else {document.addEventListener('load', bgSwap, false);}

document.getElementById("background").addEventListener("onload", bgSwap,false);

function bgSwap()
{
	var totalCount = 5;
	var num = Math.ceil( Math.random() * totalCount );
	document.body.background = 'bgimages/'+num+'.jpg';
	document.body.style.backgroundSize = "cover";// Background repeat
	document.body.style.position = "center";

}
