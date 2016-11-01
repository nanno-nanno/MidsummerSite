/*jslint browser: true*/
/*global $*/
$(document).ready(function(){
    
    function Contestant(cname) {
        this.name = cname;
        this.score1 = 0;
        this.score2 = 0;
        this.score3 = 0;
    }

    Contestant.prototype.total = function() {
        return this.score1 + this.score2 + this.score3;
    };
    
    var contestants = [new Contestant("Pappa"),
                       new Contestant("Mamma"),
                       new Contestant("Natanael"),
                       new Contestant("Jonah"),
                       new Contestant("Uffe"),
                       new Contestant("Bosse"),
                       new Contestant("Thomas"),
                       new Contestant("Kaija"),
                       new Contestant("Maria"),
                       new Contestant("Kicki"),
                       new Contestant("Hasse"),
                       new Contestant("Annica")];
    
    displayContestants();
    
    $("#test").click(function openDialog() {
        prompt("Score");
    ***REMOVED***
    
    $("#boardButton").click(function() {
        displayContestants();
    ***REMOVED***
    
    var eventCell;
      
    $(".cell").click(function(event) {
        $("#myModal").modal('toggle');
        eventCell = event.target;
    ***REMOVED***
    
    $("#enterScore").click(function() {
        // CONTINUE HERE! MAKE THIS DYNAMIC AND SET THE RIGHT SCORE TO THE RIGHT CONTESTANT!
        var enteredScore = $("#scoreInput").val();
        var candidates = contestants.filter(function(c) {
            return c.name === "Natanael";
        ***REMOVED***
        var candidate = candidates[0];
        candidate.score1 = enteredScore;
    ***REMOVED***
    
    function displayContestants() {
        $("#boardTbody").empty();
        
        // contestants = shuffle(contestants);
        contestants.sort(compareTotal);
        contestants.reverse();
        
        for (i = 0; i < contestants.length; i++) {
            var current = contestants[i];
            $("#boardTbody").append(
                "<tr>" +
                    "<td ><strong>" + (i + 1) + "</strong></td>" +
                    "<td>" + current.name + "</td>" +
                    "<td class='cell'>" + current.score1 + "</td>" +
                    "<td class='cell'>" + current.score2 + "</td>" +
                    "<td class='cell'>" + current.score3 + "</td>" +
                    "<td>" + current.total() + "</td>" +
                "</tr>"
            );
        }
    }
    
    function compareTotal(c1, c2) {
        if (c1.total() < c2.total()) {
            return -1;
        }
        if (c1.total() > c2.total()) {
            return 1;
        }
        return 0;
    }
    
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    
***REMOVED***