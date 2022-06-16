(function($) {
    $(document).ready(function() {
	
	$('#myimage').scianimator({
	    'images': ['images/myimage1.png'],
	    'width': 480,
	    'delay': 1000,
	    'loopMode': 'loop'
	});
	$('#myimage').scianimator('play');
    });
})(jQuery);
