//variable definitions
var playerChar = {
    health: 100,
    attack: 10,
    credits: 10
};

//New game function
var newGame = function(event){
    event.preventDefault();
    var playerName = $("#player-name").val().trim();
    $("#start-modal").modal("hide");
    $("#player-name").val("");

    if(!playerName || playerName.length > 15){
        $("#initial-text").text("Please enter a valid name under 15 characters.")
        return false;
    }

    playerChar.name = playerName;

    //hide initial button and display combat buttons
    $("#initial-message").removeClass("d-flex");
    $("#initial-message").addClass("d-none");
    $("#combat-screen").removeClass("d-none");
    $("#combat-screen").addClass("d-flex");
    $("#initial-buttons").removeClass("d-flex");
    $("#initial-buttons").addClass("d-none");
    $("#combat-buttons").removeClass("d-none");
    $("#combat-buttons").addClass("d-flex");
}

//event listeners
//event listeners for new game
$("#name-confirm").click(newGame);
$("#name-input-form").submit(newGame);