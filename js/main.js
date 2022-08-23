/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  const celcius = prompt("Température en C° : ");

  function celciusToFah(cel) {
      if (isNaN(cel)) {
        return prompt("Veuillez insérer un nombre.");
      } else {
        let fah = (cel * 9 / 5) + 32;
        return alert(`Degrés en Fahrenheit : , ${fah} , .`);
      }
  }

  celciusToFah(celcius);
}()); // Main IIFE

