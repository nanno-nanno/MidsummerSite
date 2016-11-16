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
        return Number(this.score1) + Number(this.score2) + Number(this.score3);
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

    $("#boardButton").click(function() {
        displayContestants();
    ***REMOVED***
    
    var eventCell;
    var clickedCellName;
    var clickedCellNumber;
    
    $("#myModal").on("shown.bs.modal", function() {
        $("#scoreInput").val('');
        $("#scoreInput").focus();
    ***REMOVED***

    $(document).on("click", ".cell1, .cell2, .cell3", function(event) {
        $("#myModal").modal('toggle');
        clickedCellName = $(this).attr('name');
        clickedCellNumber = $(this).attr('class');
        eventCell = event.target;
    ***REMOVED***
    
    $("#enterScore").click(function() {
        var enteredScore = $("#scoreInput").val();
        if (!enteredScore) {
            enteredScore = "0";
        }
        var candidates = contestants.filter(function(c) {
            return c.name === clickedCellName;
        ***REMOVED***
        var candidate = candidates[0];
        switch(clickedCellNumber) {
            case "cell1":
                candidate.score1 = enteredScore;
                break;
            case "cell2":
                candidate.score2 = enteredScore;
                break;
            case "cell3":
                candidate.score3 = enteredScore;
                break;
        }
        displayContestants();
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
                    "<td class='cell1' name='" + current.name + "'>" + current.score1 + "</td>" +
                    "<td class='cell2' name='" + current.name + "'>" + current.score2 + "</td>" +
                    "<td class='cell3' name='" + current.name + "'>" + current.score3 + "</td>" +
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