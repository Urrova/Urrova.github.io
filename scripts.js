//Funcion copiada y pegada de intArnet
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


//Carga la barra de navegacion
//Con zepto por que jquery es pesau y cash no tiene .load
var metas = document.getElementsByTagName("meta");
for (var i = 0; i < metas.length; i++){
	var element = metas[i];
	var meta_tipo = element.getAttribute("name");
	//Si es un meta de idioma, se fija si esta en ingles o español
	if (meta_tipo == "idioma"){
		var idioma = element.getAttribute("content");
		switch (idioma){
			case "ingles":
				$(function() {
					$("#Navbar_loader").load("navbar.html");
				});
				break;
			case "español":
				$(function() {
					$("#Navbar_loader").load("navbar_es.html");
				});
				break;
		}
	}
}


document.body.onload = function(){
//Un miniscript que cambia el texto en el marquee
var Marquee_Texts = new Array(
	"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
	"Play ArcadeInvasion now, it haves 1 download per year :/",
	"LMAO",
	"I say semicolon jokes because im noob and i dont know that the compiler/interpreter says wheere is it. <b>Its here -> ;</b>",
	"Ehhhhhh yeah. Ass",
	"Anybody: Says a curly bracket joke............................................. Python programmers: XD"
);

var marquee = document.getElementById("Navbar_marquee");
marquee.innerHTML = Marquee_Texts[getRandomInt(0,6)];
}