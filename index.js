var input = document.getElementById("input");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function createElement(element, text, append){
	var el = document.createElement(element);
	el.appendChild(document.createTextNode(text));
	append.appendChild(el);
	return el;
}

function addOnClickEvent(el, callback){
	el.addEventListener("click", callback);
}

function removeListItem(event){
	var listItem = event.target.parentElement;
	listItem.remove();
}

function addTextDecoration(event){
	var listItem = event.target.parentElement;
	return listItem.style.textDecoration = "line-through";
}

function createLiElement(){
	var li = createElement("li", input.value, ul);
	var deleteButton = createElement("button", "delete", li);
	var readyButton = createElement("button", "ready", li);

	addOnClickEvent( deleteButton, removeListItem );
	addOnClickEvent( readyButton, addTextDecoration );

	input.value = "";
}

function getInputLength(){
	return input.value.length;
}

function AddShoppingListItem(event){
	var	isEnterButton	= event.target.id === "enter";
	var isEnterKey		= event.keyCode === 13;
	var isInputEmpty	= getInputLength === 0;

	if ( ! isInputEmpty && ( isEnterKey || isEnterButton ) ) {
		createLiElement();
	}
}

addOnClickEvent(button, AddShoppingListItem);
input.addEventListener("keypress", AddShoppingListItem);
	