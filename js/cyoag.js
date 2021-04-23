/*Plays click sound when header items are selected"*/
 var Click = new Audio();
Click.src ="Click.mp3";

/* Back button function*/
function goBack() {
  window.history.back();
  
/* let btnBack = document.querySelector('button');
 btnBack.addEventListener('click', () => {
	 window.history.back();
 });*/
 
 
 /*Header text animation*/
 const text = document.querySelector(".animate");
 const strText = text.textContent;
 const splitText = strText.split("");
 text.textContent = "";
 
 for (let i=0; i < splitText.length; i++) {
	 text.innerHTML += "<span>" + splitText[i] + "</span>";
 }
 
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
	const span = text.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++
	if(char == splitText.length){
		complete();
		return;
	}
}
funtion complete(){
	clearInterval(timer);
	timer = null;
}