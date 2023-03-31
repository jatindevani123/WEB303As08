$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "characters.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function(i, character) {
                var row = $("<tr>");
                row.append($("<td>").text(character.name));
                row.append($("<td>").text(character.book));
                row.append($("<td>").text(character.gender));
                row.append($("<td>").text(character.age));
                row.append($("<td>").text(character.occupation));
                $("#characters-table tbody").append(row);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error: " + textStatus + " - " + errorThrown);
        }
    });
});