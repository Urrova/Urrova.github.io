var OCs = new Array(
    "<a href=\"oc_evilution.html\"><img src=\"images/URROVA/URROVA 256.gif\" class=\"urrova1\" title=\"URROVA floating in the air . . .\"></a>",
    "<a href=\"oc_evilution.html\"><img width=480px src=\"images/URROVA/4_urrova_Veltarden.png\" class=\"urrova1\" title=\"Thank you very much, veltarden!! :)\"></a>",
    "<a href=\"oc_evilution.html\"><img src=\"images/URROVA/URROVA tomando mate.png\" class=\"urrova2\"title=\"URROVA drinking mate -w- (mate emoji)\"></a>"
)

var oc_container = document.getElementById("oc_container");
oc_container.innerHTML = OCs[getRandomInt(0,OCs.length)];