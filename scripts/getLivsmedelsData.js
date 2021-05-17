$("#search-table").hide();

$('#sok-button').on('click', function(){
        $("#search-table").show();
        $("#search-table tbody").empty();
        var search = $('#search-word').val();
        //om det finns ett innehåll
        if(search.length>0){
            //Utför en förfrågan till webbtjänsten
            $.ajax({
                url: "https://webservice.informatik.umu.se/webservice_livsmedel/getlivsmedel.php?namn=" + search + "&callback=getLivsmedel",
                dataType: "jsonp",
                data: {
                    name: search
                },

                // Om förfrågan gått bra
                success: function (response) {
                    var livsmedel = response.livsmedel;
                    // Gå igenom alla livsmedelobjekt
                    livsmedel.forEach(function (livsmedel) {
                        // Lägg till ett li-element med för- och efternamn till ul-elementet med id=resultat
                        $('#search-table tbody').append('<tr>' + '<td>' + livsmedel.namn + '</td>' + 
                        '<td>' + livsmedel.energi + '</td>' + 
                        '<td>' + livsmedel.kolhydrater + '</td>' +
                        '<td>' + livsmedel.protein + '</td>' +
                        '<td>' + livsmedel.fett + '</td>'
                        + '</tr>');
                    });

                }
            });
    }
 
    else{
        $("#search-table").hide();
    }
});
