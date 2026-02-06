
const inputBox = document.getElementById("inputBox");
 const addBtn = document.getElementById("addBtn");
 const listItems = document.querySelector(".listItems");

//function to add item in the list
 function AddItem(){
    const item= inputBox.value ;
const li = document.createElement("li");
li.textContent=item;
listItems.appendChild(li);
 }
 addBtn.addEventListener("click", ()=>
AddItem());