jQuery MGlass
===============

## Description

Displays a magnifying glass on image hover

[See the demo](http://younes.info/demos/mglass/example.html)

## Usage

In the header section of your page, write this :

	<link href="jquery.mglass.css" rel="stylesheet">
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>	<script src="jquery.mglass.js"></script>
	<script src="jquery.mglass.js"></script>


To activate the plugin call `mglass` method with options on target jQuery object. 

    <script type="text/javascript">
    $(function(){

    	$("img").mglass();

    });
    </script>

## Options

### opacity (integer)

**default**: 0.4

Sets the opacity for the overlay
 
## TODO

- Add support for CSS3 transitions  
- CSS3 magnifying glass instead of image
  
Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) licenses.

