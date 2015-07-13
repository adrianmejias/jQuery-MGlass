jQuery MGlass
===============

## Description

Simple jquery plugin that overlays on element hover a magnifying glass (or any other image).  
Fading animations with CSS3 and jQuery fallback. 

[See the demo](http://younes.info/demos/mglass/example.html)

## Usage

Write this in the header section :

	<link href="jquery.mglass.css" rel="stylesheet">
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="jquery.mglass.js"></script>


Then call the `mglass` method on a dom element :

    <script type="text/javascript">
    $(function() {
    	$('img').mglass();
    });
    </script>
  
**Chrome requirement**: you need to specify the image height & width CSS properties 

## Options

### opacity (integer)

**default**: 0.4

Sets the opacity for the overlay

### speed (integer)

**default**: 150

Fadein / Fadeout speed in ms. Set to 0 to disable animation.

### wrapper (boolean)

**default**: true

Wraps the element in a div 


## TODO

- CSS3 magnifying glass instead of image ?


Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) licenses.

