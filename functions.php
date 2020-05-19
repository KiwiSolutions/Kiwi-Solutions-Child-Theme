<?php

/**

 * @author Divi Space

 * @copyright 2017

 */

if (!defined('ABSPATH')) die();



function ds_ct_enqueue_parent() { wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' ); }



function ds_ct_loadjs() {

	wp_enqueue_script( 'ds-theme-script', get_stylesheet_directory_uri() . '/ds-script.js',

        array( 'jquery' )

    );

}



add_action( 'wp_enqueue_scripts', 'ds_ct_enqueue_parent' );

add_action( 'wp_enqueue_scripts', 'ds_ct_loadjs' );



include('login-editor.php');



function myfont_icons($icons) {
    $icons[] = 'myicon';
    return $icons;
}
add_filter('et_pb_font_icon_symbols', 'myfont_icons');

function my_custom_fonts() { ?>
<style>
[data-icon="myicon"]::before { 
    background: url('https://i.ytimg.com/vi/OiH5YMXQwYg/maxresdefault.jpg'); 
    content:'a' !important; 
    width:16px !important; 
    height:16px !important; 
    color:rgba(0,0,0,0) !important; }
</style>
<?php
}
add_action('admin_head', 'my_custom_fonts');

function my_custom_fonts_js() { ?>
<script>
jQuery('.et-pb-icon').filter(function(){ return jQuery(this).text() == 'myicon'; }).html('<img src="https://i.ytimg.com/vi/OiH5YMXQwYg/maxresdefault.jpg"/>');
</script>
<?php
}
add_action('wp_footer', 'my_custom_fonts_js');



?>