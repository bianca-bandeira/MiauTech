import "./style.css";
import pets from "./pets.js";
import { createPet } from "./main.js";
import { petcard } from "./main.js";
import { buttons } from "./buttons.js";

//Mostrar pop-up
const popup = document.getElementById("popup");
const btnFiltrar = document.getElementById("filtrar");
btnFiltrar.addEventListener("click", (event) => {
  popup.style.display = "flex";
  btnFiltrar.style.backgroundColor = "#EEE7D4";
});

//Fechar pop-up
const fechar = document.getElementById("fechar");
fechar.addEventListener("click", (event) => {
  popup.style.display = "none";
  btnFiltrar.style.backgroundColor = "transparent";
});

//Array para acumular os filtros selecionados
let filtros = [];

//Selecionar botão e o adicionar a um array
function selecionarBtn(btn) {
  btn.addEventListener("click", (event) => {
    btn.style.backgroundColor = "#e58233";
    btn.style.color = "white";
    btn.style.border = "none";
    filtros.push(btn);
  });
}

//Percorre cada button de buttons.js e seus elementos
buttons.forEach((b) => selecionarBtn(b.element));

//Filtragem dos pets por um botão
function filtrarPets(filtro, opcao) {
  petcard.innerHTML = "";
  const filtrados = pets.filter((pet) => pet[filtro] === opcao);
  filtrados.forEach((pet) => {
    petcard.innerHTML += createPet(pet);
  });
}

//Filtrar a partir do array
function filtrarArray() {
  petcard.innerHTML = "";
  filtros.forEach((selecionado) => {
    buttons.forEach((b) => {
      if (selecionado === b.element) {
        filtrarPets(b.filtro, b.opcao);
      }
    });
  });
}

//Buscar 
const buscar = document.getElementById("buscar");
buscar.addEventListener("click", (event) => {
    filtrarArray();
    popup.style.display = "none";
});

//Limpar
const limpar = document.getElementById("limpar");
limpar.addEventListener("click", () => {
    filtros = [];

    buttons.forEach((b) => {
        const btn = b.element;
        btn.style.backgroundColor = "transparent";
        btn.style.color = "black";
        btn.style.border = "1px solid #c4c1c1";
    });
});
