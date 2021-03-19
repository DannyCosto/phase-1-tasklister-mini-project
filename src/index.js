const newTaskPriority = document.getElementById("new")

document.addEventListener("DOMContentLoaded", function(){
  console.log("this works")
});


const submitBtn = document.querySelector("input")
let newTaskForm = document.getElementById("create-task-form");


newTaskForm.addEventListener("click", function(){
  event.preventDefault()
  console.log("Button works!")
})

const newTaskDescription = document.getElementById("new-task-description");

function addNewItem(){
  event.preventDefault();
}