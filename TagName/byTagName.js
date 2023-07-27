// Task First

let li = document.getElementsByTagName("li");

let lists = document.getElementById("items");

let item5 = document.createElement("li");

item5.innerText = "Item 5";

lists.appendChild(item5);

// Task Second

// item5.classList.add("list-group-item");

// Task Third

let li5 = document.getElementsByTagName("li")[4];

li5.classList.add("list-group-item");