var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function createButton(){
	var button = document.createElement("BUTTON");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
}

function DeleteMethod(){
	li.remove();
}

function createLiElement(){
	var li = document.createElement("li");
	var button = document.createElement("BUTTON");
	button.appendChild(document.createTextNode("Delete"));

	li.appendChild(button);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	button.addEventListener("click", function(){
		return li.remove();
	})
	input.value = "";
}

function GetInputLength(){
	return input.value.length;
}

function addListAfterClick(){
	if (GetInputLength() > 0) {
		createLiElement();
	}
}

function addAfterKeypress(event){
	if (GetInputLength() > 0 && event.keyCode === 13) {
		createLiElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addAfterKeypress);
	