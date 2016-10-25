/*jslint browser: true*/
/*global $*/
$(document).ready(function(){
    displayContestants();
    
    function newContestant(cname, cscore1, cscore2, cscore3) {
        return {
            name: cname,
            score1: cscore1,
            score2: cscore2,
            score3: cscore3,
            total: function() {
                return this.score1 + this.score2 + this.score3;
            }
        };
    }
    
    $("#boardButton").click(function() {
        displayContestants();
    ***REMOVED***
    
    function displayContestants() {
        $("#boardTbody").empty();
        
        var contestants = [newContestant("Pappa", 0, 0, 0),
                           newContestant("Mamma", 0, 0, 0),
                           newContestant("Natanael", 4, 2, 1),
                           newContestant("Jonah", 3, 4, 1),
                           newContestant("Uffe", 0, 0, 0),
                           newContestant("Bosse", 0, 0, 0),
                           newContestant("Thomas", 0, 0, 0),
                           newContestant("Kaija", 0, 0, 0),
                           newContestant("Maria", 0, 0, 0),
                           newContestant("Kicki", 0, 0, 0),
                           newContestant("Hasse", 0, 0, 0),
                           newContestant("Annica", 0, 0, 0)];
        
        // contestants = shuffle(contestants);
        contestants.sort(compareTotal);
        contestants.reverse();
        
        for (i = 0; i < contestants.length; i++) {
            var current = contestants[i];
            $("#boardTbody").append(
                "<tr>" +
                    "<td><strong>" + (i + 1) + "</strong></td>" +
                    "<td>" + current.name + "</td>" +
                    "<td>" + current.score1 + "</td>" +
                    "<td>" + current.score2 + "</td>" +
                    "<td>" + current.score3 + "</td>" +
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