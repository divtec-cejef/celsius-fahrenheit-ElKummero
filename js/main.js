/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  const celcius = parseFloat(prompt("Température en C° : "));

  function celciusToFah(cel) {
    return (cel * 9 / 5) + 32;
  }

  alert (celciusToFah(celcius));

}()); // Main IIFE

