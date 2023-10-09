//ESERCIZIO 1:

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  isHeOlder = function (x, y) {
    if (x.age > y.age) {
      return `${x.firstName} è più anziano di ${y.firstName}`;
    } else {
      return `${x.firstName} è più giovane di ${y.firstName}`;
    }
  };
}

const Carlo = new User("Carlo", "Vitetta", 27, "Milan");
console.log(Carlo);
const Federico = new User("Federico", "Pigna", 21, "Foggia");
console.log(Federico);
console.log(Federico.isHeOlder(Carlo, Federico));

//ESERCIZIO 2:

let Form = document.getElementById("myForm");
let PetNameInput = document.getElementById("petName");
let OwnerNameInput = document.getElementById("OwnerName");
let SpeciesInput = document.getElementById("species");
let BreedInput = document.getElementById("breed");

const Pets = [];
class Pet {
  constructor(_PetName, _OwnerName, _Species, _Breed) {
    this.PetName = _PetName;
    this.OwnerName = _OwnerName;
    this.Species = _Species;
    this.Breed = _Breed;
  }
  ShareOwner(x, y) {
    if (x === y) {
      return console.log(true);
    }
  }
}

// scriviamo qui renderList()
const renderList = function () {
  // prima di tutto prendo un riferimento alla lista <ul>
  const contactsList = document.querySelector("ul");
  // per sicurezza, la svuoto prima di riempirla
  contactsList.innerHTML = "";
  // ora, per ogni contatto, creo un <li> e lo appendo alla <ul>
  Pets.forEach((Pet) => {
    // cosa faccio per ogni contatto?
    // 1) creo un <li> vuoto
    const newLi = document.createElement("li");
    // 2) riempio <li> con i dati
    newLi.innerText = `${Pet.PetName} ${Pet.OwnerName} - ${Pet.Species} ${Pet.Breed}`;
    // 3) appendo <li> alla <ul>
    contactsList.appendChild(newLi);
  });
};

const formReference = document.querySelector("form");
formReference.addEventListener("submit", function (e) {
  e.preventDefault(); // blocco il comportamento di default del form
  // creo un oggetto di tipo Contact con i valori recuperati dal form
  const newPet = new Pet(
    PetNameInput.value,
    OwnerNameInput.value,
    SpeciesInput.value,
    BreedInput.value
  );

  console.log("PET CREATO", newPet);
  // pusho il contatto dentro la lista contatti
  Pets.push(newPet);
  // svuoto i campi del form
  PetNameInput.value = "";
  OwnerNameInput.value = "";
  SpeciesInput.value = "";
  BreedInput.value = "";
  renderList();
  if (Pets.length === 2) {
    newPet.ShareOwner(Pets[0].OwnerName, Pets[1].OwnerName);
  }
});
