//Funcion copiada y pegada de intArnet
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


//Identifica el idioma de la pagina.
var metas = document.getElementsByTagName("meta");
var idioma;
for (var i = 0; i < metas.length; i++){
	var element = metas[i];
	var meta_tipo = element.getAttribute("name");
	//Si es un meta de idioma, se fija si esta en ingles o español
	if (meta_tipo == "idioma"){
		idioma = element.getAttribute("content");
	}
}

//Carga la barra de navegacion
//Con zepto por que jquery es pesau y cash no tiene .load
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


document.body.onload = function(){
	//Un miniscript que cambia el texto en el marquee
	var Marquee_Texts;
	switch (idioma){
		case "ingles":
			Marquee_Texts = new Array(
				"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
				"Play ArcadeInvasion NOW, it haves 1 DOWNLOAD PER YEAR!!! xD",
				"LMAO",
				"I say semicolon jokes because im noob and i dont know that the compiler/interpreter says where is it. <b>Its here -> ;</b>",
				"Ehhhhhh yeah. Ass",
				"Anybody: Says a curly bracket joke............................................. Python programmers: XD",
				"<a href=\"wtf/tQdXky4-YF0Q-c0k2FQ-PO22Mnv-bmLHQlNh3HXFtnTGioYqJYpqH4TUyFBr1BybVdxDAdGTVJj3WsXXPUTONg/gloquendoria.ogg\">I'm Atheist</a>"
			);
			break;
		case "español":
			Marquee_Texts = new Array(
				"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
				"Juguate ArcadeInvasion AHORA, tiene 1 DESCARGA POR AÑO!!! xD",
				"LMAO",
				"Hago chistes sobre el punto y coma por que soy alto manco y no se que el compilador/interpretador dice donde esta. <b>Aca esta -> ;</b>",
				"Ehhhhhh si. Culo",
				"Alguien: hace un chiste sobre las llaves {}............................................. Programadores de python: XD",
				"<a href=\"wtf/tQdXky4-YF0Q-c0k2FQ-PO22Mnv-bmLHQlNh3HXFtnTGioYqJYpqH4TUyFBr1BybVdxDAdGTVJj3WsXXPUTONg/gloquendoria.ogg\">Soy ateo.</a>"
			);
	}

	var marquee = document.getElementById("Navbar_marquee");
	marquee.innerHTML = Marquee_Texts[getRandomInt(0,7)];
}