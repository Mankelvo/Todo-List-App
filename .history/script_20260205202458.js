


//select elements from the DOM
const inputBox = document.getElementById("inputBox");
 const addBtn = document.getElementById("addBtn");
 const listItems = document.querySelector(".listItems");

//Data storage
const tasks = [];

 function AddTask(){
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
const task = {
    text:inputValue
};
tasks.push(task);
saveTasks();
li.textContent=inputValue;
listItems.appendChild(li);
let button = document.createElement("button");
button.textContent="X";
button.classList.add("deleteBtn"); 
li.appendChild(button);

inputBox.value = "";
}
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
 
function renderTasks(){
    
}
 addBtn.addEventListener("click", ()=>
AddTask());
 deleteBtn.addEventListener("click",(e)=>deleteItem(e))

 //function to remove item in the list 
 const deleteBtn = document.querySelector("deleteBtn");
 function deleteItem(){
    button.parentElement.remove();
 }

 function clearItems(){
    
 }