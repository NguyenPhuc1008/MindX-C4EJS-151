//Cau 1
const myElm = document.querySelector('.titleH1');
myElm.innerHTML = " Day la noi dung";
//Cau 2
myElm.style.background = "red";
myElm.style.color = "blue";
//Cau 3
const btn = document.querySelector('.btnClick');
let isChang = false;
function changContentAndColor() {
    if (!isChang) {
        myElm.innerHTML = "Day la noi dung";
        myElm.style.color = "blue";
    } else {
        myElm.innerHTML = "This is content";
        myElm.style.color = "black";
    }
    isChang = !isChang;
}
btn.addEventListener('click', changContentAndColor);
//Cau 4 + 5
const inputElement = document.getElementById('inputContent');
const displayBtn = document.getElementById('displayButton');
const outputElement = document.getElementById('outputContent');
// displayBtn.addEventListener('click', function(){
//     const inputContent = inputElement.value;
//     outputElement.textContent ="Noi dung nhap la: " +inputContent;
// });
function addTask() {
    const taskList = JSON.parse(localStorage.getItem('listTask')) || [];
    const newTask = inputElement.value;
    if (newTask.trim() !== "") {
        taskList.push(newTask);
        localStorage.setItem('listTask', JSON.stringify(taskList));
        displayTasks();
        inputElement.value = "";
    } else {
        alert("Please enter a task !");
    }
}
function displayTasks() {
    const taskList = JSON.parse(localStorage.getItem('listTask')) || []; 
    outputElement.innerHTML = "";
    taskList.forEach(function(task){
        const li = document.createElement("li");
        li.textContent = task;
        outputElement.appendChild(li);
    });  
    }
    window.onload = function(){
        if(localStorage.getItem("listTask")){
            displayTasks();
        }
    };


