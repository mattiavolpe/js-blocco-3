/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const words = ["fabio", "lucA", "aLEx", "MAttiA", "fabrIZio", "LorENzO", "ROBERTO", "franCESco"];

const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
console.log(capitalizedWords);