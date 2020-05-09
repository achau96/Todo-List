var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listLength = ul.getElementsByTagName("li").length;
var items = ul.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

/*Delete Function*/
function deleteItem(event){
	event.target.parentNode.remove();
}

/*Delete Button*/
function deleteButton(){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	button.onclick = deleteItem;
	return button;
}
 /* ADD DELETE BUTTON TO CURRENT LIST */
for (var i = 0; i<listLength; i++) {
	var button = deleteButton();
	items[i].appendChild(button);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var button = deleteButton();
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
/* TOGGLE STRIKETHROUGH */
ul.addEventListener("click", function(){
	event.target.classList.toggle("done");
});


