


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
    listItems.innerHTML="";
    tasks.forEach(task=>{
const li = document.createElement("li");
li.innerHTML =`
${task.text}
<button class="deleteBtn">X</button>
`
listItems.appendChild(li);
inputBox.value = "";

    });
    saveTasks();

}



 addBtn.addEventListener("click", ()=>
AddTask());

 listItems.addEventListener("click", (e)=>{
if(e.target.classList.contains("deleteBtn")){
    e.target.parentElement.remove();
}
AudioListener
 });

 window.addEventListener("DOMContentLoaded",LoadTasks);