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
        viewTodos();
    }
}

// function to view todos
function viewTodos(){
    // Empty string variable to hold each todo data
    let data = "";

    // Loop through each item in the todos array
    for (let i = 0; i < todos.length; i++) {
        // Append a string to the data variable. This string is a list item that includes:
        // - a checkbox 
        // - a span that displays the todo text
        data += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." onclick="" />
            <span id="todo${i}">${todos[i]}</span>
        </li>
        `;
    }

    // Find the HTML element with the id "mytodo" and set its innerHTML to the data string
    document.getElementById("mytodo").innerHTML = data;
}