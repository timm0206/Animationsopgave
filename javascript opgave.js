$(window).on("load", startHistorie);




function startHistorie() {
    console.log("startHistorie");



    $("#vaporwave")[0].play();

    $("#mand_container").addClass("mand_move");
    $("#mand_sprite_1").addClass("mand_gaer");
    $("#mand_container").on("animationend", mandStaer);
}


function mandStaer() {
    console.log("mandStaer");

    $("#mand_container").off("animationend", mandStaer);

    $("#mand_container").removeClass("mand_move");
    $("#mand_sprite_1").removeClass("mand_gaer");

    $("#mand_sprite_1").addClass("mand_staer");
}
