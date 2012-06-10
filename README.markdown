jQuery Image Magnifier plugin
=============================

## Description

Displays a magnifying glass (or other image) as an overlay on an image

[See the demo](http://younes.info/demos/image-magnifier/example.html)

## Usage

In the header section of your page :

	<link href="jquery.imagemagnifier.css" rel="stylesheet">
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="jquery.imagemagnifier.js"></script>

To activate the plugin call `imageMagnifier` method with options on target jQuery object. 

    <script type="text/javascript">
    $(function(){

    	$("img").imageMagnifier();

    });
    </script>

## Options

### opacity (integer)

**default**: 0.4

Sets the opacity for the overlay
 
## TODO

- Add support for CSS3 transitions  

  
Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) licenses.

