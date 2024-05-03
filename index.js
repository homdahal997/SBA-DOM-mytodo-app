// Create an array to hold todos 
let todos = [];

// function to add todos
function addTodo(){
    let todo = document.getElementById("form2").value; // get the field from html
    // validation for empty todo adding
    if(todo === ""){
        alert `Todo item cannot be empty`
    }else{
        // push new todo to our created array.
        todos.push(todo);
    }
}