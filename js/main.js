var content = [];

$.getJSON( "./data/data.json", function( data ) {
    var album = [];
    var titre = "";
    var i = -1;

    $.each( data, function( key, val ) {
        if (titre != key) {
            i = i + 2;
             album.push("<a class='mdl-navigation__link' href='#" + key + "' onclick='loadPhoto(" + i + ")'>" + clean(key) + "</a>");
            content.push(key);
        }
        content.push(val);
    });

    $( "<nav>", {
        "class": "mdl-navigation",
        html: album.join( "" )
    }).appendTo( ".mdl-layout__drawer" );

});

function loadPhoto(number) {
    var folder = content[number - 1];

    $(".page-content").html('');
    $.each(content[number], function( val ) {

        var titre = content[number][val].split(".", 1);
        var url = "album/" + folder + "/" + content[number][val];
        var backgroundPhoto = "background-image: url('" + "album/" + folder + "/" + content[number][val] + "');";

        /*$(".page-content").append('<a href="' + url + '" data-lightbox="' + folder +'"><div class="card"><img class="card__image" src="' + url + '" alt=""><div class="card__infos"><h4 class="infos__titre">' + titre + '</h4></div></div></a>');*/

        $(".page-content").append('<a href="' + url + '" data-lightbox="' + folder +'"><div class="demo-card-image mdl-card mdl-shadow--2dp" style="' + backgroundPhoto + '"><div class="mdl-card__title mdl-card--expand"></div><div class="mdl-card__actions"> <span class="demo-card-image__filename">' + clean(titre) + '</span></div></div></a>');

    });

    $(".title-album").html("Gallerie - " + clean(folder));


}

function clean(texte) {
    return texte.toString().replace(/_|-/g, " ");
}
