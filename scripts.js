//Funcion copiada y pegada de intArnet
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//Un miniscript que cambia el texto en el marquee
var Marquee_Texts = new Array(
	"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
	"Play ArcadeInvasion now, it haves 1 download per year :/",
	"LMAO",
	"I say semicolon jokes because im noob and i dont know that the compiler/interpreter says wheere is it. <b>Its here -> ;</b>",
	"Ehhhhhh yeah. Ass"
);

var marquee = document.getElementById("Navbar_marquee");
marquee.innerHTML = Marquee_Texts[getRandomInt(0,5)];