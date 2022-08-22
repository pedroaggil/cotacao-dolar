<?php

/**
 * Plugin Name:       Cotação de Dólar
 * Plugin URI:        https://github.com/pedroaggil/cotacao-dolar/
 * Description:       Sistema de cotação de dólar via API.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Pedro Gil & Anderson Muniz
 * Author URI:        https://github.com/pedroaggil/
 *
 */

function cotacao(){	
	return file_get_contents(plugins_url().'/cotacao/cotacao-dolar.php');
}


add_shortcode("cotar","cotacao");

?>