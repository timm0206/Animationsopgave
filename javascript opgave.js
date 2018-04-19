$(window).on("load", startHistorie);




function startHistorie() {
    console.log("startHistorie");



    $("#vaporwave")[0].play();

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

    $("#knap_venstre").on("click", mandVenstre);
    $("#knap_højre").on("click", mandhojre);



}


function mandVenstre() {
    console.log("mandVenstre");
    $("#mand_container").off("animationend", mandVenstre);
    $("#mand_container").removeClass("mand_staar");
    $("#mand_sprite").removeClass("mand_staar");
    $("#mand_sprite").addClass("mand_gaar_venstre");
    $("#mand_container").addClass("mand_move_venstre");
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
    //$("#mand_container").off("animationend", mandhojre);
    $("#mand_container").removeClass("mand_staar");
    $("#mand_sprite").removeClass("mand_staar");
    $("#mand_sprite").addClass("mand_gaar_hojre");
    $("#mand_container").addClass("mand_move_hojre");
    //$("#mand_container").on("animationend", mandStaarHojre);

}
