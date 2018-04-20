var antalCoins = 0;
var nokCoins = false;
var myTimer;






$(window).on("load", startHistorie);




function startHistorie() {
    console.log("startHistorie");



    $("#vaporwave")[0].play();
    $(".knap").hide();
    $(".spillet").hide();


    $("#mand_container").addClass("mand_move");
    $("#mand_sprite").addClass("mand_gaar");
    $("#kvinde_container").addClass("kvinde_move");
    $("#kvinde_sprite").addClass("kvinde_gaar");

    $("#mand_container").on("animationend", mandStaar);
}


function mandStaar() {
    console.log("mandStaar");

    $("#mand_container").off("animationend", mandStaar);

    $("#mand_container").removeClass("mand_move");
    $("#mand_sprite").removeClass("mand_gaar");

    $("#mand_container").addClass("mand_staar");
    $("#mand_sprite").addClass("mand_staar");

    $(".knap").show();
    $("#venstre").on("click", mandVenstre);
    $("#hojre").on("click", mandhojre);



}


function mandVenstre() {
    console.log("mandVenstre");
    $("#mand_container").off("animationend", mandVenstre);
    $("#mand_container").removeClass("mand_staar");
    $("#mand_sprite").removeClass("mand_staar");
    $("#mand_sprite").addClass("mand_gaar_venstre");
    $("#mand_container").addClass("mand_move_venstre");
    $(".knap").hide();
    $("#mand_container").on("animationend", mandStaarVenstre);

}


function mandStaarVenstre() {
    console.log("mandStaarVenstre");
    $("#mand_container").off("animationend", mandStaarVenstre);

    $("#mand_sprite").removeClass("mand_gaar_venstre");
    $("#mand_container").removeClass("mand_move_venstre");

    $("#mand_container").addClass("mand_staar_venstre")
    $("#mand_sprite").addClass("mand_staar_venstre_sprite")


    $("#mand_container").off("animationend", mandStaarVenstre);

}






function mandhojre() {
    console.log("mandHojre");
    $("#mand_container").removeClass("mand_staar");
    $("#mand_sprite").removeClass("mand_staar");
    $("#mand_sprite").addClass("mand_gaar_hojre");
    $("#mand_container").addClass("mand_move_hojre");
    $(".knap").hide();
    $(".spillet").show();

    randomValg();


}


function randomValg() {
    console.log("randomValg");
    var randomTal = Math.random();
    console.log("randomTal");
    if (randomTal >= 0.5) {
        kanKlikke()
        //setTimeout(mandStaarVenstre(), 10000)
        $(".game").show();
        console.log("True");
    } else {
        mand_vinder()
        console.log("False");
    }
}


function kanKlikke() {
    console.log("kanKlikke");
    $(".game").show();
    $(".game").on("click", coinGame);


}


function coinGame() {
    console.log("klikPaaCoin");
    $(".game").removeClass("puls");
    $(".game").off("click", coinGame);
    $(this).hide();
    antalCoins++;
    faerdig();
}

function faerdig() {
    console.log("Færdig med at klikke");
    if (antalCoins >= 5) {
        mand_vinder();
    } else {
        console.log("klik igen");
        kanKlikke();
    }
}

function mand_vinder() {
    console.log("Mand vinder");
    $(".spillet").hide();


}
