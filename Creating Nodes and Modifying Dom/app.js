let itemList = document.querySelector("#items");

// ParentNode

// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode);

// ParentElement

// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement);

// ChildNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);

// FirstChild

// console.log(itemList.firstChild);

// FirstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello'

// LastChild

// console.log(itemList.lastChildChild);

// LastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.innerText = "Hello";

// NextSibling

// console.log(itemList.nextSibling);

// NextElementSibling

// console.log(itemList.nextElementSibling);

// PreviousSibling

// console.log(itemList.previousSibling);

// PreviousElementSibling

// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'blue';

// CreateElement

// let newDiv = document.createElement("div");
// newDiv.className = "hello";
// newDiv.id = "hello1";
// newDiv.setAttribute("title", "Hello Div");
// let newDivText = document.createTextNode("Hello World");

// AppendChild

// newDiv.appendChild(newDivText);
// console.log(newDiv);

// InsertBefore

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// Task 1

// let newDivText = document.createTextNode("Hello World");
// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDivText, h1);

// Task 2

// let itemText = document.createTextNode("Hello World");

// let listGroup = document.querySelector("#items");
// let item1 = document.querySelector(".list-group-item");

// listGroup.insertBefore(itemText, item1);