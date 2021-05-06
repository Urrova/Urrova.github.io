var OCs = new Array(
    "<img src=\"images/URROVA/URROVA 256.gif\" class=\"urrova1\">",
    "<img src=\"images/URROVA/URROVA tomando mate.png\" class=\"urrova2\">"
)


var oc_container = document.getElementById("oc_container");
oc_container.innerHTML = OCs[getRandomInt(0,2)];