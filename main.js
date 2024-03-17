const today = '03-17';

$(document).ready(function () {
    document.querySelector('input#dzisiaj').value = `2024-${today}`;
    let jqxhr = $.getJSON('kalendarium.json', function (data) {
        $.each(data[today], function (key, val) {
            $('nav').append(`<a href="#${val}">${val}</a>`);

            $.getJSON('biblia.json', function (biblia) {
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
    jqxhr.fail(function (err) {
        console.log('failed!');
        $('main').html(`<p>Coś poszło nie tak.</p>`);
    });
    jqxhr.always(function () {
        $('.img-loader').remove();
    });
});
