let form = document.getElementById("addForm");

// Add Item Event Listener
let itemList = document.getElementById("items");

form.addEventListener("submit", addItem);

// Remove Item Event Listener

itemList.addEventListener("click", removeItem);

// // Add Item Function

function addItem(e) {
  e.preventDefault();

  // Taking Value from input

  let newItem = document.getElementById("item").value;

  // Creating li
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  // Created a Div and edit a class

  let buttonsContainer = document.createElement("div");
  buttonsContainer.className = "d-flex justify-content-end";

  // Delete Button

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  // Task

  // Edit Button

  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm edit-btn ms-2";
  editBtn.appendChild(document.createTextNode("Edit"));

  // Appending Delete and Edit Button in newly craeted div

  buttonsContainer.appendChild(deleteBtn);
  buttonsContainer.appendChild(editBtn);

  // Appending newly created div in newly created li

  li.appendChild(buttonsContainer);
  itemList.appendChild(li);
}

// Remove Item Function

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
