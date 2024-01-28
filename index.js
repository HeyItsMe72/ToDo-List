const d = document,
$newTask = d.getElementById("newTaskInput"),
$tasksList = d.querySelector(".list-content");

function saveTask() {
    localStorage.setItem("data", $tasksList.innerHTML)
}

function getTasks() {
    $tasksList.innerHTML = localStorage.getItem("data");
}

getTasks();


d.addEventListener("submit", e => {
    e.preventDefault();
    if(e.target.matches("form")){
        if (!$newTask.value) return alert("¿What do you have to do? Write it!");
        let $li = d.createElement("li");
        $li.innerHTML = $newTask.value; 
        let $delete = d.createElement("span");
        $delete.innerHTML = "\u00d7"; 
        $li.appendChild($delete);
        $tasksList.appendChild($li);
    }
    $newTask.value = "";
    saveTask();
})

d.addEventListener("click", e => {
    if(e.target.matches("span")){
        e.target.parentElement.remove();
    }
    if(e.target.matches("li")) {
        e.target.classList.toggle("checked");
    }
    saveTask();
})
