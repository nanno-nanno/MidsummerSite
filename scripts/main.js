/*jslint browser: true*/
/*global $*/
$(document).ready(function(){
    
    function Contestant(cname, cscore1, cscore2, cscore3) {
        this.name = cname;
        this.score1 = cscore1;
        this.score2 = cscore2;
        this.score3 = cscore3;
        this.total = function() {
            return Number(this.score1) + Number(this.score2) + Number(this.score3);
        };
    }
    
    var contestants = [];

    var callback = function(data) {
        contestants = [];
        for (index in data) {
            var current = data[index];
            contestants.push(
                new Contestant(
                    current.name,
                    current.score1,
                    current.score2,
                    current.score3));
        }
        
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
    });
    
    $(document).on("click", ".cell1, .cell2, .cell3", function() {
        showPopover();
    });
    
    function showPopover() {
        var popOver = $("[data-toggle=popover]").popover({
            html: true, 
            content: function(event) {
                clickedCellName = $(this).attr('name');
                clickedCellNumber = $(this).attr('class');    
                return $('#popover-content').html();
            }
        });
        
        $(".popover-content").find("button").click(submitPopOver);
    }
    
    function submitPopOver(e) {
        var enteredScore = $(".popover-content #scoreInput").val();
        if (!enteredScore) {
            enteredScore = "0";
        }
        var candidates = contestants.filter(function(c) {
            return c.name === clickedCellName;
        });
        var candidate = candidates[0];
        switch(clickedCellNumber) {
            case "cell1":
                $.post("http://localhost:8000", "UPDATE contestants SET score1 = " + enteredScore + " WHERE name = '" + candidate.name + "'");
                break;
            case "cell2":
                $.post("http://localhost:8000", "UPDATE contestants SET score2 = " + enteredScore + " WHERE name = '" + candidate.name + "'");
                break;
            case "cell3":
                $.post("http://localhost:8000", "UPDATE contestants SET score3 = " + enteredScore + " WHERE name = '" + candidate.name + "'");
                break;
        }
        closeAllPopovers();
        displayContestants();
    };
    
    function displayContestants() {
        // Something is wrong with .empty()...
        $("#boardTbody").empty();
        $.post("http://localhost:8000", "SELECT name, score1, score2, score3 FROM contestants", callback, "json");
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
    });

});
