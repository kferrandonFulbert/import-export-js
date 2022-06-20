// mon system solaire est le point central de mon application js
// il fait appel au module qu'il a besoin pour fonctionner
import { Planets } from './modules/planets.js';
import { Naines } from './modules/naines.js';

let sysSol = document.getElementById('planets');
let naines = document.getElementById('naines');
/*
Rappel des boucles for en JS
sysSol.innerHTML += "<ul>";
for (var i = 0; i < Planets.length; i++) {
    sysSol.innerHTML += "<li>"+Planets[i]+"</li>";
    console.log(Planets[i]);
  }
sysSol.innerHTML += "</ul>";
console.log(Planets);
*/
sysSol.innerHTML += "<h2>Planets:</h2><ul>";
Planets.forEach(planet=>sysSol.innerHTML += "<li>"+planet+"</li>");
sysSol.innerHTML += "</ul>";

naines.innerHTML += "<h2>Naines:</h2><ul>";
var i=-1;
Naines.planete.forEach(naine=>{i++;console.log(i);naines.innerHTML += "<li>"+naine+" ("+Naines.nbSatelite[i]+")</li>"});
naines.innerHTML += "</ul>";

