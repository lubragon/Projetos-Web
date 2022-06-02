
var wa = document.getElementById("grey")


function sub() {
    $("#grey")[0].style["display"]= "flex";
    $("#but")[0].style["background-color"]= "#005BBC";


    console.log("a")
}

    
function clos() {
    $("#grey")[0].style["display"]= "none";
    $("#but")[0].style["background-color"]= "#005BBC";
    console.log("a")
}



function fotoum() {
    $("#sala")[0].style["zIndex"]= "3";
    $("#quarto")[0].style["zIndex"]= "2";
    $("#cozinha")[0].style["zIndex"]= "2";

    $("#but1")[0].style["background-color"]= "#005BBC";
    $("#but2")[0].style["background-color"]= "white";
    $("#but3")[0].style["background-color"]= "white";
    console.log("a")
}

function fotodois() {
    $("#sala")[0].style["zIndex"]= "2";
    $("#cozinha")[0].style["zIndex"]= "3";
    $("#quarto")[0].style["zIndex"]= "2";

    $("#but1")[0].style["background-color"]= "white";
    $("#but2")[0].style["background-color"]= "#005BBC";
    $("#but3")[0].style["background-color"]= "white";
    console.log("a")
}

function fototres() {
    $("#sala")[0].style["zIndex"]= "2";
    $("#cozinha")[0].style["zIndex"]= "2";
    $("#quarto")[0].style["zIndex"]= "3";

    $("#but1")[0].style["background-color"]= "white";
    $("#but2")[0].style["background-color"]= "white";
    $("#but3")[0].style["background-color"]= "#005BBC";
    console.log("a")
}
