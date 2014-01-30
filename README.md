JS Flex Vertical Center
===========================

This JS plugin provides an easy way to vertically center an element in its parent. Even if the parents height changes after resizing the browser window, in a fluid or responsive layout for example.


Usage
-----

Simply include this file in your project (after loading jQuery) like this:

<script defer src="js/flexverticalcenter.js"></script>

Then call the plugin on the element which needs to be vertically centered in it's parent.

	<script>
	    window.flexVerticalCenter( document.getElementsByClassName('vertical-center'));
	</script>

This will take the parents height, the elements own height and calculate the distance the element should have from the parents top to be vertically centered. This value is applied to the top margin of the element by default.


Note
----

The code is a modification of Paul Sprangers' "jQuery Flex Vertical Center" plugin (https://github.com/PaulSpr/jQuery-Flex-Vertical-Center), and by extension, Dave Rupert's FitText.js (http://fittextjs.com/)