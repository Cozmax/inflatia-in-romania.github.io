var nounarray = [
	"Inflatia",	
	"Intuitiv",
	"Industrial"
];

var row = 0;
var index_row = 0;
var interval;

var text = document.querySelector("#text");
var blink = document.querySelector("#cursor");

function Typing(){
	var noun = nounarray[row].substring(0, index_row+1);
	text.innerHTML = noun;
	index_row++;

	if(text.innerHTML == nounarray[row]){
		blink.style.animation = 'none';

		clearInterval(interval);
		setTimeout(function(){
			interval = setInterval(Deleting, 50);
		}, 1000);
	}
}

function Deleting(){
	var noun = nounarray[row].substring(0, index_row-1);
	text.innerHTML = noun;
	index_row--;

	if(text.innerHTML === 'I'){
		clearInterval(interval);

		if(row == (nounarray.length - 1))
			row = 0;
		else row++;

		index_row = 0;

		setTimeout(function(){
			blink.style.animation = 'blink .75s step-end infinite';
			interval = setInterval(Typing, 200);
		}, 200);
	}

}

interval = setInterval(Typing, 300);