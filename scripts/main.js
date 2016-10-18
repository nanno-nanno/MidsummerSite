/*jslint browser: true*/
/*global $*/

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

$("#submit").onclick(function() {
    contestant.setName("Nate");
    contestant.addToScore(10);
    $("#board").append("<p>" + contestant.name + "</p>");
    $("#board").append("<p>" + contestant.score + "</p>");
***REMOVED***