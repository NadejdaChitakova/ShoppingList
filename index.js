var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function createElement(element, text, append){
	var el = document.createElement(element);
	el.appendChild(document.createTextNode(text));
	append.appendChild(el);
	return el;
}

function DeleteEvent(deleteButton, element){
	deleteButton.addEventListener("click", function(){
		return element.remove();
	});

}

function createLiElement(){
	var li = createElement("li", input.value, ul);
	var deleteButton = createElement("button", "delete", li);
	var readyButton = createElement("button", "ready", li);

	DeleteEvent(deleteButton, li);
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
	