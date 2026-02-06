
//function to add item in the list
const inputBox = document.getElementById("inputBox");
 const addBtn = document.getElementById("addBtn");
 const listItems = document.querySelector(".listItems");

 function AddItem(){
    const inputValue= inputBox.value ;
    /*if(item===""){
        inputBox.classList = "input";
        inputBox.style.borderColor = "red";
    }*/
const li = document.createElement("li");
if(inputValue.trim()==="" || inputValue===null){
alert("Please enter a value");
return;
}
else{
li.textContent=inputValue;
listItems.appendChild(li);
let button = document.createElement("button");
button.textContent="Delete";
button.classList.add("deleteBtn");
li.appendChild(button);

}
inputBox.value = "";
}
 
 addBtn.addEventListener("click", ()=>
AddItem());
 deleteBtn.

 //function to remove item in the list 
 const deleteBtn = document.getElementById("deleteBtn");
 function deleteItem(){

 }

 function clearItems(){
    
 }