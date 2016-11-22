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

    var clickedCellName;
    var clickedCellNumber;
    
    $("[data-toggle=popover]").popover({
        html: true, 
        content: function(event) {
            clickedCellName = $(this).attr('name');
            clickedCellNumber = $(this).attr('class');
            return $('#popover-content').html();
        }
    ***REMOVED***
    
    $(document).on("click", ".cell1, .cell2, .cell3", function() {
        showPopover();
    ***REMOVED***
    
    function showPopover() {
        var popOver = $("[data-toggle=popover]").popover({
            html: true, 
            content: function(event) {
                clickedCellName = $(this).attr('name');
                clickedCellNumber = $(this).attr('class');    
                return $('#popover-content').html();
            }
        ***REMOVED***
        
        $(".popover-content").find("button").click(submitPopOver);
    }
    
    function submitPopOver(e) {
        var enteredScore = $(".popover-content #scoreInput").val();
        console.log(enteredScore);
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
        closeAllPopovers();
        displayContestants();
    };
    
    function displayContestants() {
        $("#boardTbody").empty();
        
        contestants.sort(compareTotal);
        contestants.reverse();
        
        for (i = 0; i < contestants.length; i++) {
            var current = contestants[i];
            $("#boardTbody").append(
                $("<tr>" +
                    "<td ><strong>" + (i + 1) + "</strong></td>" +
                    "<td>" + current.name + "</td>" +
                    "<td class='cell1' name='" + current.name + "' data-placement='bottom' data-toggle='popover' data-container='body' data-html='true'>" + current.score1 + "</td>" +
                    "<td class='cell2' name='" + current.name + "' data-placement='bottom' data-toggle='popover' data-container='body' data-html='true'>" + current.score2 + "</td>" +
                    "<td class='cell3' name='" + current.name + "' data-placement='bottom' data-toggle='popover' data-container='body' data-html='true'>" + current.score3 + "</td>" +
                    "<td>" + current.total() + "</td>" +
                "</tr>")
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
    
    function closeAllPopovers() {
        $('[data-toggle="popover"]').popover('hide');
    }
    
    $('body').on('click', function (e) {
        if ($(e.target).data('toggle') !== 'popover'
            && $(e.target).parents('.popover.in').length === 0) { 
            $('[data-toggle="popover"]').popover('hide');
        }
    ***REMOVED***

***REMOVED***