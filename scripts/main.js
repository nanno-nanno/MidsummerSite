/*jslint browser: true*/
/*global $*/
$(document).ready(function(){
    var contestant = {
        name: "",
        score: 0,
        setName: function(cName) {
            this.name = cName;
        },
        addToScore: function(cScore) {
            this.score += cScore;
        }
    };

    //$("#show").on("click", function() {
        //createBoard();
    //***REMOVED***
    
    //var createBoard = function() {
        $("#board").load("/html/board.html");
    //}
***REMOVED***