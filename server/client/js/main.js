$(function () {
    // Carousel
    $('.carousel').carousel();

    // Publications
    var templatePulications = $('#template-publications').text();

    // Populate
    $('.navbar').html(Mustache.to_html($('#template-navbar').text(), sectionsData));
    $('#wrap .container').html(Mustache.to_html($('#template-sections').text(), sectionsData));
    $('#Bio-container').html(Mustache.to_html($('#template-bio').text(), printData));
    $('#Contact-container').html(Mustache.to_html($('#template-contact').text(), printData));
    $('#Print-container').html(Mustache.to_html(templatePulications, printData));
    $('#Audio-container').html(Mustache.to_html(templatePulications, audioData));
    $('#Visual-container').html(Mustache.to_html($('#template-carousel').text(), visualData));

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
        var $this = $(this);

        $this
            .addClass('active')
            .siblings()
            .removeClass('active');

        $('html, body').animate({
            scrollTop: $('#' + $this.data('name') + '-legend').offset().top - 50 + 'px'
        }, 'fast');
    });

    // Select bio upon entry
    $('.nav li').first().click();

    // Remove space at the end of the publications
    $('#Print-container .dummy-space').last().css('margin-bottom', '-10px');
    $('#Audio-container .dummy-space').last().css('margin-bottom', '-10px');
});
