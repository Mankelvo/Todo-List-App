


//select elements from the DOM
const inputBox = document.getElementById("inputBox");
 const addBtn = document.getElementById("addBtn");
  const clearBtn = document.getElementById("clearBtn");

 const listItems = document.querySelector(".listItems");

//Data storage
const tasks = [];

 function addTask(){
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
renderTasks();

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

}

function LoadTasks(){
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if(savedTasks){
        tasks.push(...savedTasks);
        renderTasks();
    }
}

function clearList(){
    listItems.innerHTML="";
}



 addBtn.addEventListener("click", ()=>
addTask());
 

 listItems.addEventListener("click", (e)=>{

if(e.target.classList.contains("deleteBtn")){
    e.target.parentElement.remove();
  
}
 });
 
 

 window.addEventListener("DOMContentLoaded",LoadTasks);