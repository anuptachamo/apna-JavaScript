/**
 *  ? Todo app
 *      -> list - to show all todos
 *      -> add  - to add a todo
 *      -> delete - to delete a task
 *      -> quit - to exit the todo 
 */

let todo = [];
let req = prompt ("Please enter your request")

while(true){
    if (req == "quit"){
        console.log("quitting app")
        break
    }

    if(req == "list"){
        console.log("-----------")
        for(let i =0; i<todo.length; i++){
            console.log(i, todo[i])
        }
        console.log("--------")

    }else if (req == "add"){
        let task = prompt ("Please enter the task you want to add")
        todo.push(task); //push help to add task
        console.log("task added")

    } else if (req == "delete"){
        let idx = prompt ("Please enter the task index you want to delete")
        todo.splice(idx, 1)   //splice help to remove the index
        console.log("task deleted")
    }else{
        console.log("wrong request")
    }

    req = prompt ("Please enter your request")

}