const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const today = `${month}-${day}`;
const dzisiaj = document.querySelector('input#dzisiaj');

let Kalendarium = {};
let Biblia = {};

function getOnlyMMDD(date){
    const [_, mm, dd] = [...date.split("-")];
    return `${mm}-${dd}`;
}

function inputOneIntoMain(rozdzial){
    $('<section>').attr('id', rozdzial).appendTo('main');
    $('<h2>').text(rozdzial).appendTo(`section#${rozdzial}`);
    let wersy = [];
    (Biblia[rozdzial]).forEach((el, i, arr) => {
        wersy.push(`<li>${el}</li>`);
    });
    $('<ol>', {
        class: 'wersy',
        html: wersy,
    }).appendTo(`section#${rozdzial}`);
}

$(document).ready(function(){
    dzisiaj.value = `${year}-${month}-${day}`;
    $.when($.getJSON('kalendarium.json'), $.getJSON('biblia.json')).done(function(k, b){
        Kalendarium = k[0];
        Biblia = b[0];
        $('.img-loader').remove();
    }).done(function(){
        (Kalendarium[today]).forEach(function(roz){
            $('#menu').append(`<a href="#${roz}">${roz}</a>`);
            inputOneIntoMain(roz);
        });
    }).fail(function(){
        $('main').html('<p>Error</p>');
    });

    dzisiaj.addEventListener('input', function(event){
        console.log(event.target.value); // example: 2024-04-13
        const newDate = getOnlyMMDD(event.target.value);
        $('main').children().remove();
        $('#menu').children().remove();
        (Kalendarium[newDate]).forEach(function(roz){
            $('#menu').append(`<a href="#${roz}">${roz}</a>`);
            inputOneIntoMain(roz);
        });
    });
});
/*
$(document).ready(function(){
    dzisiaj.value = `${year}-${month}-${day}`;
    let jqxhr = $.getJSON('kalendarium.json', function (data) {
        Kalendarium = data;

        $.each(data[today], function(_, val){
            $('nav').append(`<a href="#${val}">${val}</a>`);

            $.getJSON('biblia.json', function (biblia) {
                Biblia = biblia;
                $(`<section>`).attr('id', val).appendTo('main');
                $('<h2>').html(val).appendTo(`section#${val}`);
                let wersy = [];
                $.each(biblia[val], function (_, wers) {
                    // TODO: _ zastąpić numerem, bo może będę kiedyś chciał jakoś inaczej traktować dane wersy,
                    // np. wers 0 wyświetl na czerwono, a pozostałe większą czcionką.
                    wersy.push(`<li>${wers}</li>`);
                });

                $('<ol>', {
                    class: 'wersy',
                    html: wersy,
                }).appendTo(`section#${val}`);
            });
        });
    });

    jqxhr.fail(function(err){
        console.log('failed!');
        $('main').html(`<p>Coś poszło nie tak.</p>`);
    });

    jqxhr.always(function(){
        $('.img-loader').remove();
    });

    dzisiaj.addEventListener('input', function(event){
        console.log(event.target.value); // example: 2024-04-13
        console.log(getOnlyMMDD(event.target.value));
    });
});
*/
