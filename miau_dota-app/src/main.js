import "./style.css";
import pets from "./pets.js";

export function createPet(pets) {
  return `
    <div>
        <img src="${pets.image}">
        <p class="name">${pets.name}</p>
        <p class="infos-pet">${pets.age} | ${pets.sexo}</p>
        <img src="./src/imgs/miaudota/pata1.png" alt="pata1" id="pata1">
    </div>`;
}

export const petcard = document.querySelector(".pets");

pets.forEach((pets) => {
  let card = createPet(pets);
  petcard.insertAdjacentHTML("beforeend", card);
});


