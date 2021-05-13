let button = document.getElementById("button");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let listItem = document.getElementsByTagName("li");
let inputLength = () => {
    return input.value.length;
}
function createElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function markDone(){
        li.classList.toggle("finished");
    }
    li.addEventListener("click", markDone);
    var mark = document.createElement("button")
    mark.setAttribute("id", "littleButton")
    mark.innerHTML = '<i class="fas fa-trash-alt">';
    li.appendChild(mark);
    mark.addEventListener("click", deleteItem);

    function deleteItem() {
        li.classList.add("delete");
    }
}
function addAfter() {
    if (inputLength() > 0) {
        createElement();
    }
}
function addAfterKey(event){
    if (inputLength() > 0 && event.which === 13){
        createElement();
    }
}
button.addEventListener("click", addAfter);
input.addEventListener("keypress", addAfterKey);

