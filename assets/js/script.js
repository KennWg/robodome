//New game function
var newGame = function(event){
    event.preventDefault();
    var playerName = $("#player-name").val().trim();
    $("#start-modal").modal("hide");
    $("#player-name").val("");

    if(!playerName || playerName.length > 15){
        $("#initial-text").text("Please enter a valid name under 15 characters.")
    }
}

//event listeners for new game
$("#name-confirm").click(newGame);
$("#name-input-form").submit(newGame);