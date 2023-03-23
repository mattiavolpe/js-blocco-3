/*
Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

const cars = [
  {
    brand: "Brand 1",
    model: "Model 1",
    fuel: "Benzina"
  },

  {
    brand: "Brand 2",
    model: "Model 2",
    fuel: "Diesel"
  },

  {
    brand: "Brand 3",
    model: "Model 3",
    fuel: "Diesel"
  },

  {
    brand: "Brand 4",
    model: "Model 4",
    fuel: "GPL"
  },

  {
    brand: "Brand 5",
    model: "Model 5",
    fuel: "Elettrico"
  },

  {
    brand: "Brand 6",
    model: "Model 6",
    fuel: "Benzina"
  },

  {
    brand: "Brand 7",
    model: "Model 7",
    fuel: "GPL"
  },

  {
    brand: "Brand 8",
    model: "Model 8",
    fuel: "Metano"
  },

  {
    brand: "Brand 9",
    model: "Model 9",
    fuel: "Diesel"
  },

  {
    brand: "Brand 10",
    model: "Model 10",
    fuel: "Benzina"
  }

];


const gasolineCars = cars.filter((car) => {
  return car["fuel"].toLowerCase() == "benzina";
})
document.body.insertAdjacentHTML("beforeend", "<strong>Auto a benzina:</strong><br>");
gasolineCars.forEach((car) => {
  document.body.insertAdjacentHTML("beforeend", `${car.brand}<br>${car.model}<br>${car.fuel}<br><br>`);
})

const dieselCars = cars.filter((car) => {
  return car["fuel"].toLowerCase() == "diesel";
})
document.body.insertAdjacentHTML("beforeend", "<strong>Auto diesel:</strong><br>");
dieselCars.forEach((car) => {
  document.body.insertAdjacentHTML("beforeend", `${car.brand}<br>${car.model}<br>${car.fuel}<br><br>`);
})

const otherCars = cars.filter((car) => {
  return car["fuel"].toLowerCase() != "benzina" && car["fuel"].toLowerCase() != "diesel";
})
document.body.insertAdjacentHTML("beforeend", "<strong>Auto con altra alimentazione:</strong><br>");
otherCars.forEach((car) => {
  document.body.insertAdjacentHTML("beforeend", `${car.brand}<br>${car.model}<br>${car.fuel}<br><br>`);
})