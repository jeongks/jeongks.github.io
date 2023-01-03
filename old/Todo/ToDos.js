function makeTask(){
    const taskinput = document.getElementById("taskinput").value;
    const taskbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskname = document.createElement("div");
    const deletetask = document.createElement("div");

    taskbox.setAttribute("class", "taskbox");
    
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "count()");
    checkbox.setAttribute("class", "check");
    taskname.setAttribute("class", "taskname strikethrough");
    if (taskinput == ""){
        taskname.textContent = "Task";
    } else {
        taskname.textContent = taskinput;
    }
    deletetask.setAttribute("class", "deletetask");
    deletetask.setAttribute("onclick", "remove(this)");
    deletetask.textContent = "X";
    
    
    taskbox.appendChild(checkbox);
    taskbox.appendChild(taskname);
    taskbox.appendChild(deletetask);
    
    document.getElementById("taskcontainer").appendChild(taskbox);
    
}