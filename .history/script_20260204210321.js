
//function to add item in the list
const inputBox = document.getElementById("inputBox");
 const addBtn = document.getElementById("addBtn");
 const listItems = document.querySelector(".listItems");

 function AddItem(){
    const item= inputBox.value ;
    /*if(item===""){
        inputBox.classList = "input";
        inputBox.style.borderColor = "red";
    }*/
const li = document.createElement("li");
if(item)
li.textContent=item;
listItems.appendChild(li);
 }
 addBtn.addEventListener("click", ()=>
AddItem());

 //function to remove item in the list 
 const deleteBtn = document.getElementById("deleteBtn");
 function deleteItem(){

 }

 function clearItems(){
    
 }