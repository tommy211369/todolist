let year = document.querySelector("#year");
let currentYear = new Date();
let displayCurrentYear = () => {
  year.textContent = currentYear.getFullYear();
};
displayCurrentYear();

// selectors
const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");
const error = document.querySelector(".error");

// event at click
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.validity.valueMissing) {
    error.textContent = "Vous n'avez rien saisie";
    error.style.color = "red";
  } else if (input.validity.valueMissing == false) {
    addTodo();
    input.validity.valueMissing;
    input.value = "";
  }
});

const addTodo = () => {
  ///////////// create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //////////// create li
  const newTodo = document.createElement("li");
  newTodo.textContent = input.value;

  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  /////////// Check button
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

  const removeItem = () => {
    todoDiv.style.display = "none";
  };

  trashButton.addEventListener("click", () => {
    todoDiv.style.animation =
      "translate 500ms ease-out, opacity-out 300ms ease-out";
    setTimeout(removeItem, 300);
  });

  //////// ajouter le todo à todo-list
  list.appendChild(todoDiv);
  error.textContent = " ";

  /////////// }
};
