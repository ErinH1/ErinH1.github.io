(function($) {
    $(document).ready(function() {
	
	$('#myanim').scianimator({
	    'images': ['images/myanim1.png', 'images/myanim2.png', 'images/myanim3.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#myanim').scianimator('play');
    });
})(jQuery);
