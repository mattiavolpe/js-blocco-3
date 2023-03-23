/*
Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [

  {
    nome: 'leone',
    famiglia: 'felidi',
    classe: 'mammiferi'
  },

  {
    nome: 'cane',
    famiglia: 'canidi',
    classe: 'mammiferi'
  },

  {
    nome: 'gallina',
    famiglia: 'fasianidi',
    classe: 'uccelli'
  },

  {
    nome: 'ape',
    famiglia: 'apidae',
    classe: 'insetti'
  },

  {
    nome: 'scoiattolo',
    famiglia: 'sciuridae',
    classe: 'mammiferi'
  }

];

const mammalAnimals = animals.filter(animal => animal.classe.toLowerCase() == "mammiferi");
console.log(mammalAnimals);