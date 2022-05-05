var button = document.getElementById("button-next");

button.addEventListener("click", GoDown);

function GoDown(){

}

function ButtonHover(){
	img.src = "imagini/arrow-normal.png";
	img.style.background = "white";
}

function ButtonUnhover(){
	img.src = "imagini/arrow-hover.png";
	img.style.background = "grey";
}