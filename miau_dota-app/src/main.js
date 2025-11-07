import "./style.css";
import pets from "./pets";

function createPet(pets) {
  return `
    <div>
        <img src="${pets.image}">
        <p class="name">${pets.name}</p>
        <p class="infos-pet">${pets.age} | ${pets.sexo}</p>
        <img src="src/imgs/Itens miaudota/pata1.png" alt="pata1" id="pata1">
    </div>`;
}

const petcard = document.querySelector(".pets");

pets.forEach((pets) => {
  let card = createPet(pets);
  petcard.insertAdjacentHTML("beforeend", card);
});

// Filtragem dos pets
function filtrarPets(filtro, opcao) {
  petcard.innerHTML = "";
  const filtrados = pets.filter((pet) => pet[filtro] === opcao);
  filtrados.forEach((pet) => {
    petcard.innerHTML += createPet(pet);
  });
}

//Tratamento de eventos do botão Sexo
const btnSexo = document.getElementById("btnSexo");
const opcoesSexo = document.getElementById("opcoesSexo");
const btnFemea = document.getElementById("btnFemea");
const btnMacho = document.getElementById("btnMacho");

btnSexo.addEventListener("mouseover", (event) => {
  opcoesSexo.style.display = "flex";
  btnFemea.style.backgroundColor = "#FCF9F3";
  btnFemea.style.color = "#452824";
  btnMacho.style.backgroundColor = "#FCF9F3";
  btnMacho.style.color = "#452824";
});

dropdownSexo.addEventListener("mouseover", (event) => {
  opcoesSexo.style.display = "flex";
});

opcoesSexo.addEventListener("mouseleave", (event) => {
  opcoesSexo.style.display = "none";
});

// Filtragem dos pets por sexo
btnFemea.addEventListener("click", (event) => {
  filtrarPets("sexo", "femea");
  btnFemea.style.color = "#e58233";
});

btnMacho.addEventListener("click", (event) => {
  filtrarPets("sexo", "macho");
  btnMacho.style.color = "#e58233";
});

//Tratamento de evento do botão Miau
const btnMiau = document.getElementById("btnMiau");

btnMiau.addEventListener("click", (event) => {
  filtrarPets("type", "cat");
});

//Tratamento de evento do botão Auau
const btnAuau = document.getElementById("btnAuau");

btnAuau.addEventListener("click", event => {
    filtrarPets("type", "dog");
});

//Tratamento de eventos do botão Porte
const opcoesPorte = document.getElementById("opcoesPorte");
const btnPorte = document.getElementById("btnPorte")
const btnP = document.getElementById("btnP");
const btnM = document.getElementById("btnM");
const btnG = document.getElementById("btnG");

btnPorte.addEventListener("mouseover", (event) => {
  opcoesPorte.style.display = "flex";
  btnP.style.backgroundColor = "#FCF9F3";
  btnP.style.color = "#452824";
  btnM.style.backgroundColor = "#FCF9F3";
  btnM.style.color = "#452824";
  btnG.style.backgroundColor = "#FCF9F3";
  btnG.style.color = "#452824";
});

dropdownPorte.addEventListener("mouseover", (event) => {
  opcoesPorte.style.display = "flex";
});

opcoesPorte.addEventListener("mouseleave", (event) => {
  opcoesPorte.style.display = "none";
});

// Filtragem dos pets por porte
btnP.addEventListener("click", (event) => {
  filtrarPets("size", "p");
  btnP.style.color = "#e58233";
});

btnM.addEventListener("click", (event) => {
  filtrarPets("size", "m");
  btnM.style.color = "#e58233";
});

btnG.addEventListener("click", (event) => {
    filtrarPets("size", "g");
    btnG.style.color = "#e58233"
});