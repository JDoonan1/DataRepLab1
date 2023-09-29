myArray = [];

let addTask = (task) => {
    //push or adds a task to the top of the list
    myArray.push(task);
    console.log("Task " + task + " was added to tasks");
    //returns the length of string
    return myArray.length;
}
//prints out all items that was added in the addTask function
let listAllTasks = () => {
    myArray.forEach((item) => {
        console.log(item);
    })
}
//deletes the first item from the task using .splice
let deleteTask = (task) => {
    let x = myArray.indexOf(task);
    if (x > -1) {
        // prints to the console which item/task that is being deleted
        myArray.splice(x, 1);
        console.log("Task " + task + " was deleted from tasks");
    }
    else {
        console.log("Task " + task + " wnot found in tasks");
    }
}

//functions are called in order to show adding,displaying and deletion of tasks
addTask("LEARNJS");
addTask("LEARN REACT");
listAllTasks();
deleteTask("LEARN JS");
listAllTasks();