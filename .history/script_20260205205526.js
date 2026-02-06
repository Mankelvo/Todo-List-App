


//select elements from the DOM
const inputBox = document.getElementById("inputBox");
 const addBtn = document.getElementById("addBtn");
 const listItems = document.querySelector(".listItems");

//Data storage
const tasks = [];

 function AddTask(){
    const inputValue= inputBox.value ;
  
if(inputValue.trim()==="" || inputValue===null){
alert("Please enter a value");
return;
}
const task = {
    text:inputValue
};
tasks.push(task);
saveTasks();
renderTasks()

}
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
 
function renderTasks(){
    tasks.forEach(task=>{
const li = document.createElement("li");
/*li.textContent = task.text;
listItems.appendChild(li);
let button = document.createElement("button");
button.textContent="X";
button.classList.add("deleteBtn"); 
li.appendChild(button);
inputBox.value = "";
*/
li.innerHTML = `{
${tas}
}`

    });

}

function deleteTask(){

}
 addBtn.addEventListener("click", ()=>
AddTask());
 deleteBtn.addEventListener("click",(e)=>deleteItem(e))

 listItems.addEventListener("click", (e)=>{
if(e.target.classList.contains(deleteBtn)){
    e.target.parentElement.remove();
}
 })