$(function () {
	// Carousel
	$('.carousel').carousel();

	// Publications
	var templatePulications = $('#template-publications').text();

	console.log(templatePulications);

	// Populate the print publications
	$('#print-container').html(Mustache.to_html(templatePulications, print));

	// Populate the audio publications
	$('#audio-container').html(Mustache.to_html(templatePulications, audio));

	// Deal with article clicks
	$('p').on('click', function () {
		if($(this).attr('href')) {
			window.open($(this).attr('href'), '_blank');
		}
	});

	$('#german').on('click', function () {
		$('.english').hide();
		$('.german').show();
	});

	$('#english').on('click', function () {
		$('.english').show();
		$('.german').hide();
	});
});
