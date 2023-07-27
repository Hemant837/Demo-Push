let form = document.getElementById("addForm");

let itemList = document.getElementById("items");

form.addEventListener("submit", addItem);

itemList.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value;

  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  let buttonsContainer = document.createElement("div");
  buttonsContainer.className = "d-flex justify-content-end";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-primary btn-sm edit-btn ms-2";
  editBtn.appendChild(document.createTextNode("Edit"));

  buttonsContainer.appendChild(deleteBtn);
  buttonsContainer.appendChild(editBtn);

  li.appendChild(buttonsContainer);
  itemList.appendChild(li);
}

function removeItem(e) {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
