jQuery MGlass
===============

## Description

Simple jquery plugin that overlays on element hover a magnifying glass (or any other image).  

[See the demo](https://adrianmejias.com/jQuery-MGlass/)

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

## Options

### large (string)

**default**: 'example-large.jpg'

Set the larger image for magnification effect.

Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) licenses.

