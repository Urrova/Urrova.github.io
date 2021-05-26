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

//Carga la barra de navegacion y el footer
//Con zepto por que jquery es pesau y cash no tiene .load
switch (idioma){
	case "ingles":
		$(function() {
			$("#Navbar_loader").load("html_modules/navbar.html");
			$("#Footer_loader").load("html_modules/footer.html");
		});
		break;
	case "español":
		$(function() {
			$("#Navbar_loader").load("html_modules/navbar_es.html");
			$("#Footer_loader").load("html_modules/footer_es.html");
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
				"Clarification: not a furry, although I like that theme :) (my OC is other thing) . . . . . . . . . . . . . . . . . . . . . THE ONE THAT IS A FURRY IS DOGEDEV",
				"Anybody: Says a curly bracket joke............................................. Python programmers: XD",
				"<a href=\"wtf/tQdXky4-YF0Q-c0k2FQ-PO22Mnv-bmLHQlNh3HXFtnTGioYqJYpqH4TUyFBr1BybVdxDAdGTVJj3WsXXPUTONg/gloquendoria.ogg\">I'm Atheist</a>",
				"Thing",
				"I BEATEN NOVATHIUM ON YOUTUBE SUBS YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
				"Really i need making a NORMAL doom wad someday...",
				"Ay el aim, ay el aim, el aim mi amor el aim... Pero agarra un arma! Tenes, una puta espectre! Tenias do* bay se dispara movido. Tenemos un afk, nay mira ahora se mueve boludo dale, dejate de joder. Una pistolita quiere ganar boludo nohohohooo... Posta boludo valorant parece en serio que, cada vez que cuando quiero jugar una partida.. No se boludo, parece que me odia el juego... Una clasic bah... Un*a clasic... Ta del otro lado miamor, lo escuchaste... Y como es obvio, una reina, pelotuda, que solo sabe irse por su cuenta, nohohohhoooohhhh..... PERO POR QUE, ME TENGO QUE ENCONTRAR A ESTA GENTE, BOLUDOOOOO!!! SON TODOS, QUE SE YO, MONONEURONALES QUE NO SABEN PENSAAAR!! POSTA QUIERO GANAR!!! QUIERO GANAR NO QUIERO PERDER UN... TRECE CERO BOLUDOOO!! DIOOOOOOS... ee es bonito volver y lo ve y lo primero que escucho es- PERO BOLUDO ES LA PRIMER PARTIDA!! LA PRIMERA!! Y SON TODOS MONONEURONALES!! NO SABEN PENSAR! LO DIGO EN SERIO! ESTOY HARTO DE QUE ME TOQUE GENTE ASI BOLUDO! NO POSTA DEJE VALORANT POR ESTA MIERDA, VUELVO A VALORANT Y ME TOCAN UN EQUIPO IGUAL! POSTA BOLUDO ESTOY HARTO DE ESTA GENTE!! DIOOOS, NO PUEDO GANAR UNA PUTA PARTIDA!! TODAS TIENEN QUE SER CON MONONEURONALES!! ONDA, AYE** Y ENTONCES LO QUE HACE ES NO DISPARARLE!! SE QUEDA QUIETO Y LO MATAN OBVIAMENTE!! DESPUES TENGO UNA ASTRA DE MIERDA QUE SE QUEDA, AFK A LA MITAD DE LA PARTIDA. DIOOOOSSSS!! Queres jugar? Ya estoy jugando pero la me... El equipo de mononeuronales, no voto surrender, cuando lo puse. No se boludo quiero ya terminar esta partida... Pero CLARO, como es un equipo de monone*uronales... como no va a ser de otra forma... no votan surrender por su orgullo de mierda... Es que la reina es pelotuda... Ayy nooo boluohhh... pfff... NO NO BOLUDO NO, MI EQUIPO ES UN.. EQUIPO DE BOLUDOS, LO DIGO EN SERIO EH. NO NO NO POSTA BOLUDO, MI EQUIPO ES UN EQUIPO DE BOLUDOS. UNA REIZ TIRANDO UN... ROBOTITO DONDE NADA. UNA REINA TIRANDO UNA FLASH MAS RANDOM, UNA... UNA PIBA QUE ESTA AFK LA MITAD DE LA PARTIDA... NO SE. LA MISMA REINA NO SABEN QUE LAS MIERDAS DE REIZ SE PUEDEN DESTRUIR, Y VA DIRECTO A LA PUTA GRANADAAAA!!111!!!11!!1 DIOOOOOOOOOS!!111!!!1 Diooooos! Posta lo digo, una partida al menos valorant de mierda! Diooooo... De repente haber comprado el battle pass de mierda! Me chupa un huevo que no sea ranked pero minimo, que se yo boludo... Y jUsTo que perdamos por que mi equipo uy, noo el equipo elnemigo fue mejor fue mejor en esa rOnDa en... que se yo, una ronda ganamos la primera y de pistolas y nada maaas! Y LA REINA PELOTUDA SIEMPRE SE VA AL OTRO MIERDA EL CUAL NO ESTA EN EQUIPO. *golpea el teclado. pobre teclado*- PERO LA PUUUUUTA MAAAAAAAAAAAAAAAAADREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!111!111!!!!!111111!!!!!!111!!!1111!!!11!1!!!111!!!!1111 NOOO CHAU BOLUDO NO QUIERO JUGAR VALORANT. POSTA LO DIGO EH. POSTA LO DIGO NO QUIERO JUGAR VALORANT. SIII ME CHUPA UN HUEVO EQUIPO DE MIEERDA DIOS JUEGO DE MIEEERDAAAAA!! COMO CARAJO ME PUSE... PUSE MIL PESOS EN ESE JUEGO DE MIERDA??''?? COMO CARAJO ME PASO POR LA CABERA???''? Diooos boludo, posta!! Ese juego saca lo peor de mi en serio, y no es que yo estaba jugando mal y por eso el equipo estaba perdiendo. TOODOS ESTABAMOS JUGANDO MAL! NO CUBRIAN, QUE SE YO YO SIEMPRE ESTABA ATRAS, COMO CUALQUIER QUIRYE Y COMO CUALQUIER CENTINELA. Y NO PODIA HACER NADA, PORQUE MORIAN A LOS DOS SEGUNDOS!! DIOOOS!  POSTA BOLUDO QUE... MONONEURONALES QUE ES LA GENTE JUGANDO AL VALORANT. Diooos... Vas al overwatch? Recordame fede no volver a jugar* valorant nunca mas. Te lo digo en serio ahora entiendo porque marcos no juegal valorant. Ni con apex me tilteo tanto boludo, en ap*ex que se yo boludo... Que? De que de la gente mononeuronal que juegal valorant? Ay no fede no puedo jugar me tengo que ir perdon."
			);
			break;
		case "español":
			Marquee_Texts = new Array(
				"XDDDDDDDDDDDDDDDDDDDDDDDDDD",
				"Juguate ArcadeInvasion AHORA, tiene 1 DESCARGA POR AÑO!!! xD",
				"LMAO",
				"Hago chistes sobre el punto y coma por que soy alto manco y no se que el compilador/interpretador dice donde esta. <b>Aca esta -> ;</b>",
				"Aclaracion: no soy furro, aunque me gusta el tema :) (mi OC es otra cosa) . . . . . . . . . . . . . . . . . . . . . EL QUE SI ES UN FURRO ES DOGEDEV.",
				"Alguien: hace un chiste sobre las llaves {}............................................. Programadores de python: XD",
				"<a href=\"wtf/tQdXky4-YF0Q-c0k2FQ-PO22Mnv-bmLHQlNh3HXFtnTGioYqJYpqH4TUyFBr1BybVdxDAdGTVJj3WsXXPUTONg/gloquendoria.ogg\">Soy ateo.</a>",
				"Coso",
				"SUPERE A NOVATHIUM EN SUBS DE YOUTUBE YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",
				"Realmente necesito hacer un wad de doom NORMAL algun dia...",
				"Ay el aim, ay el aim, el aim mi amor el aim... Pero agarra un arma! Tenes, una puta espectre! Tenias do* bay se dispara movido. Tenemos un afk, nay mira ahora se mueve boludo dale, dejate de joder. Una pistolita quiere ganar boludo nohohohooo... Posta boludo valorant parece en serio que, cada vez que cuando quiero jugar una partida.. No se boludo, parece que me odia el juego... Una clasic bah... Un*a clasic... Ta del otro lado miamor, lo escuchaste... Y como es obvio, una reina, pelotuda, que solo sabe irse por su cuenta, nohohohhoooohhhh..... PERO POR QUE, ME TENGO QUE ENCONTRAR A ESTA GENTE, BOLUDOOOOO!!! SON TODOS, QUE SE YO, MONONEURONALES QUE NO SABEN PENSAAAR!! POSTA QUIERO GANAR!!! QUIERO GANAR NO QUIERO PERDER UN... TRECE CERO BOLUDOOO!! DIOOOOOOS... ee es bonito volver y lo ve y lo primero que escucho es- PERO BOLUDO ES LA PRIMER PARTIDA!! LA PRIMERA!! Y SON TODOS MONONEURONALES!! NO SABEN PENSAR! LO DIGO EN SERIO! ESTOY HARTO DE QUE ME TOQUE GENTE ASI BOLUDO! NO POSTA DEJE VALORANT POR ESTA MIERDA, VUELVO A VALORANT Y ME TOCAN UN EQUIPO IGUAL! POSTA BOLUDO ESTOY HARTO DE ESTA GENTE!! DIOOOS, NO PUEDO GANAR UNA PUTA PARTIDA!! TODAS TIENEN QUE SER CON MONONEURONALES!! ONDA, AYE** Y ENTONCES LO QUE HACE ES NO DISPARARLE!! SE QUEDA QUIETO Y LO MATAN OBVIAMENTE!! DESPUES TENGO UNA ASTRA DE MIERDA QUE SE QUEDA, AFK A LA MITAD DE LA PARTIDA. DIOOOOSSSS!! Queres jugar? Ya estoy jugando pero la me... El equipo de mononeuronales, no voto surrender, cuando lo puse. No se boludo quiero ya terminar esta partida... Pero CLARO, como es un equipo de monone*uronales... como no va a ser de otra forma... no votan surrender por su orgullo de mierda... Es que la reina es pelotuda... Ayy nooo boluohhh... pfff... NO NO BOLUDO NO, MI EQUIPO ES UN.. EQUIPO DE BOLUDOS, LO DIGO EN SERIO EH. NO NO NO POSTA BOLUDO, MI EQUIPO ES UN EQUIPO DE BOLUDOS. UNA REIZ TIRANDO UN... ROBOTITO DONDE NADA. UNA REINA TIRANDO UNA FLASH MAS RANDOM, UNA... UNA PIBA QUE ESTA AFK LA MITAD DE LA PARTIDA... NO SE. LA MISMA REINA NO SABEN QUE LAS MIERDAS DE REIZ SE PUEDEN DESTRUIR, Y VA DIRECTO A LA PUTA GRANADAAAA!!111!!!11!!1 DIOOOOOOOOOS!!111!!!1 Diooooos! Posta lo digo, una partida al menos valorant de mierda! Diooooo... De repente haber comprado el battle pass de mierda! Me chupa un huevo que no sea ranked pero minimo, que se yo boludo... Y jUsTo que perdamos por que mi equipo uy, noo el equipo elnemigo fue mejor fue mejor en esa rOnDa en... que se yo, una ronda ganamos la primera y de pistolas y nada maaas! Y LA REINA PELOTUDA SIEMPRE SE VA AL OTRO MIERDA EL CUAL NO ESTA EN EQUIPO. *golpea el teclado. pobre teclado*- PERO LA PUUUUUTA MAAAAAAAAAAAAAAAAADREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE!!!!!!!!!!!!111!111!!!!!111111!!!!!!111!!!1111!!!11!1!!!111!!!!1111 NOOO CHAU BOLUDO NO QUIERO JUGAR VALORANT. POSTA LO DIGO EH. POSTA LO DIGO NO QUIERO JUGAR VALORANT. SIII ME CHUPA UN HUEVO EQUIPO DE MIEERDA DIOS JUEGO DE MIEEERDAAAAA!! COMO CARAJO ME PUSE... PUSE MIL PESOS EN ESE JUEGO DE MIERDA??''?? COMO CARAJO ME PASO POR LA CABERA???''? Diooos boludo, posta!! Ese juego saca lo peor de mi en serio, y no es que yo estaba jugando mal y por eso el equipo estaba perdiendo. TOODOS ESTABAMOS JUGANDO MAL! NO CUBRIAN, QUE SE YO YO SIEMPRE ESTABA ATRAS, COMO CUALQUIER QUIRYE Y COMO CUALQUIER CENTINELA. Y NO PODIA HACER NADA, PORQUE MORIAN A LOS DOS SEGUNDOS!! DIOOOS!  POSTA BOLUDO QUE... MONONEURONALES QUE ES LA GENTE JUGANDO AL VALORANT. Diooos... Vas al overwatch? Recordame fede no volver a jugar* valorant nunca mas. Te lo digo en serio ahora entiendo porque marcos no juegal valorant. Ni con apex me tilteo tanto boludo, en ap*ex que se yo boludo... Que? De que de la gente mononeuronal que juegal valorant? Ay no fede no puedo jugar me tengo que ir perdon."
			);
	}

	var marquee = document.getElementById("Navbar_marquee");
	marquee.innerHTML = Marquee_Texts[getRandomInt(0,Marquee_Texts.length)];
}