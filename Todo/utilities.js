function remove(task) {
    task.parentElement.setAttribute("id","deleting");
    const element = document.getElementById("deleting");
    element.parentNode.removeChild(element);

    const tasks = document.querySelectorAll(".check").length;
    const completed = document.querySelectorAll(":checked").length;
    const left = tasks - completed;

    document.getElementById("count").innerHTML = left;

}
function count() {
    const tasks = document.querySelectorAll(".check").length;
    const completed = document.querySelectorAll(":checked").length;
    const left = tasks - completed;

    document.getElementById("count").innerHTML = left;
}

function reset() {
    document.getElementById("taskinput").value = "";
}

function filter(e){
    document.getElementById("all").style.border = "none";
    document.getElementById("active").style.border = "none";
    document.getElementById("completed").style.border = "none";
    document.getElementById("all").style.background = "#f1ffe7";
    document.getElementById("active").style.background = "#f1ffe7";
    document.getElementById("completed").style.background = "#f1ffe7";
    document.getElementById("all").style.color = "#4f9d69";
    document.getElementById("active").style.color = "#4f9d69";
    document.getElementById("completed").style.color = "#4f9d69";
    document.getElementById(e).style.border = "thin solid #4f7969";
    document.getElementById(e).style.borderRadius = "5px";
    document.getElementById(e).style.background = "#4f7969";
    document.getElementById(e).style.color = "#fff";

    var tasks, i, checked;
    checked = document.querySelectorAll(".check:checked");
    tasks = document.querySelectorAll(".taskbox");

    if (e == "all"){
        for ( i = 0; i < tasks.length; i++){
            tasks[i].style.display = "flex";
        } 
    } else if (e == "active"){
        for ( i = 0; i < tasks.length; i++){
            tasks[i].style.display = "flex";
        } 
        for (i = 0; i < checked.length; i++){
            var test = checked[i].parentNode.style.display = "none";
        }
    } else if (e == "completed"){
        for ( i = 0; i < tasks.length; i++){
            tasks[i].style.display = "none";
        }
        for (i = 0; i < checked.length; i++){
            checked[i].parentNode.style.display = "flex";
        }
    }
    
    
}
