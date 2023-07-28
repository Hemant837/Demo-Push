let form = document.getElementById("addForm");

// Add Item Event Listener
let itemList = document.getElementById("items");

form.addEventListener("submit", addItem);

// Remove Item Event Listener

itemList.addEventListener("click", removeItem);

// Adding Search Property
let filter = document.getElementById("filter");

filter.addEventListener("keyup", filterItems);

// // Add Item Function

function addItem(e) {
  e.preventDefault();

  // Taking Value from inputs

  let newItem = document.getElementById("item").value;

  let description = document.getElementById("item2").value;

  // Creating li
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  // Filter Task - 1 - Add Description

  li.appendChild(document.createTextNode(" " + description));

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
      let li = e.target.parentElement.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Item Function

function filterItems(e) {
  let text = e.target.value.toLowerCase();

  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent.toLowerCase();
    let description = item.textContent.toLowerCase();

    // Filter Task - 2 - Check if either the item name or the description contains the search text

    if (itemName.indexOf(text) !== -1 || description.indexOf(text) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
