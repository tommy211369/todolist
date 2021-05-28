import { annee, anneeActuelle, afficheAnnee } from "../../main/app.js";

afficheAnnee();

// selecteurs
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");
const erreur = document.querySelector(".erreur");

// ecouteur ajout todo
button.addEventListener("click", checkTodo);

//fonctions
function checkTodo(e) {
  e.preventDefault();
  if (input.validity.valueMissing) {
    console.log("Vide");
    erreur.textContent = "Vous n'avez rien saisie";
    erreur.style.color = "red";
  } else if (input.validity.valueMissing == false) {
    console.log("Tâche créée");
    addTodo();
    input.validity.valueMissing;
    input.value = "";
  }
}

function addTodo() {
  ///////////// crée la Div todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //////////// crée le Li
  const newTodo = document.createElement("li");
  newTodo.textContent = input.value;

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  /////////// bouton Check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  completedButton.addEventListener("click", () => {
    newTodo.style.backgroundColor = "grey";
    newTodo.style.transition = "background-color 400ms ease-out";
    newTodo.style.textDecoration = "line-through";
  });

  ////////// bouton Supprimer
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  function removeItem() {
    todoDiv.style.display = "none";
  }

  trashButton.addEventListener("click", () => {
    todoDiv.style.animation =
      "translate 500ms ease-out, opacity-out 300ms ease-out";
    setTimeout(removeItem, 300);
  });

  //////// ajouter le todo à todo-list
  list.appendChild(todoDiv);
  erreur.textContent = " ";

  /////////// }
}
