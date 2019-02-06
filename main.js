$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/Boolean/example/server.php',
        method: 'GET',
        success: function(data)
        {
            var results = JSON.parse(data);

            printResults(results);
        },
        error: function()
        {
            alert('Si è verificato un errore');
        }
    });
});


function printResults(results)
{

    for (var i = 0; i < results.length; i++) {
        var result = results[i];

        //var source   = document.getElementById("entry-template").innerHTML;
        var source   = $('#entry-template').html();
        var template = Handlebars.compile(source);

        var context = {
            'id': result.id,
            'room_number': result.room_number,
            'floor': result.floor,
            'beds': result.beds,
            'created_at': result.created_at,
            'updated_at': result.updated_at
        };
        var html    = template(context);

        $('tbody').append(html);
    }

}
