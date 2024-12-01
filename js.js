let nouveauTableau = tableau.map(function(element, index, tableau) {
  // retourne un nouvel élément
});
const nombres = [1, 2, 3, 4, 5];
const doubles = nombres.map(function(nombre) {
    return nombre * 2;
});

console.log(doubles); // [2, 4, 6, 8, 10]


let nouveauTableau = tableau.map((element, index, tableau) => {
  // retourne un nouvel élément
});
const nombres = [1, 2, 3, 4, 5];
const incrementes = nombres.map((nombre) => nombre + 1);

console.log(incrementes); // [2, 3, 4, 5, 6]
const fruits = ['pomme', 'banane', 'cerise'];
const fruitsAvecIndex = fruits.map((fruit, index) => {
    return `${index + 1}: ${fruit}`;
});

console.log(fruitsAvecIndex); // ["1: pomme", "2: banane", "3: cerise"]
const nombres = [1, 2, 3, 4, 5];
const doubles = nombres.map((nombre) => nombre * 2);

console.log(doubles); // [2, 4, 6, 8, 10]


let nouveauTableau = tableau.filter(function(element, index, tableau) {
  // retourne true ou false
});


const nombres = [1, 2, 3, 4, 5, 6];
const pairs = nombres.filter(function(nombre) {
    return nombre % 2 === 0;
});

console.log(pairs); // [2, 4, 6]


let resultat = tableau.reduce(function(accumulateur, element, index, tableau) {
  // retourne l'accumulateur mis à jour
}, valeurInitiale);


const nombres = [1, 2, 3, 4, 5];
const somme = nombres.reduce(function(accumulateur, nombre) {
    return accumulateur + nombre;
}, 0);

console.log(somme); // 15


const nombres = [1, 2, 3, 4, 5];
const somme = nombres.reduce((accumulateur, nombre) => accumulateur + nombre, 0);

console.log(somme); // 15


const fruits = ['pomme', 'banane', 'pomme', 'orange', 'banane'];
const compteFruits = fruits.reduce((accumulateur, fruit) => {
    accumulateur[fruit] = (accumulateur[fruit] || 0) + 1;
    return accumulateur;
}, {});

console.log(compteFruits); // { pomme: 2, banane: 2, orange: 1 }
