var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "data.json"
});

function goscreen2() {
	"use strict";
    animation.playSegments([45,144], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "inline";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
		document.getElementById("starter").style.display = "none";

//	about hide the btn after click> https://www.w3schools.com/jsref/prop_style_display.asp
}
document.querySelector('.goscreen2').addEventListener('click', goscreen2);

function goscreen3() {
	"use strict";
    animation.playSegments([145,209], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "inline";
	document.getElementById("screen4").style.display = "none";
		document.getElementById("starter").style.display = "none";

}
document.querySelector('.goscreen3').addEventListener('click', goscreen3);

function goscreen4() {
	"use strict";
    animation.playSegments([210,326], true);
	document.getElementById("screen1").style.display = "none";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "inline";
		document.getElementById("starter").style.display = "none";

}
document.querySelector('.goscreen4').addEventListener('click', goscreen4);

function goscreen1() {
	"use strict";
    animation.playSegments([0,44], true);
	document.getElementById("screen1").style.display = "inline";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
		document.getElementById("starter").style.display = "none";

}
document.querySelector('.goscreen1').addEventListener('click', goscreen1);


function start() {
	"use strict";
    animation.playSegments([0, 44], true);
	document.getElementById("screen1").style.display = "inline";
	document.getElementById("screen2").style.display = "none";
	document.getElementById("screen3").style.display = "none";
	document.getElementById("screen4").style.display = "none";
	document.getElementById("starter").style.display = "none";
//	playSegments allow for infinite looping if the loop param is set to true
}
document.querySelector('.start').addEventListener('click', start);

