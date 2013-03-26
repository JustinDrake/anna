$(function () {
    // Carousel
    $('.carousel').carousel();

    // Publications
    var templatePulications = $('#template-publications').text();

    // Populate the print publications
    $('#print-container').html(Mustache.to_html(templatePulications, printArticles));

    // Populate the audio publications
    $('#audio-container').html(Mustache.to_html(templatePulications, audioArticles));

    // Populate the carousel images
    $('#carousel-container').html(Mustache.to_html($('#template-carousel').text(), carouselImages));

    // Deal with article clicks
    $('p').on('click', function () {
        if($(this).attr('href')) {
            window.open($(this).attr('href'), '_blank');
        }
    });

    $('#carousel .item').first().addClass('active');

    $('#german').on('click', function () {
        $('.english').hide();
        $('.german').show();
    });

    $('#english').on('click', function () {
        $('.english').show();
        $('.german').hide();
    });

    // Navbar
    $('.nav').on('click', 'li', function () {
        $(this).addClass('.active');
    });

    $('html, body').animate({
        scrollTop: $('#contact-legend').offset().top - 50 + 'px'
    }, 'fast');

});
