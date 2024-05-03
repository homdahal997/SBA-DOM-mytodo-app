// Create an array to hold todos 
let todos = [];

// function to add todos
function addTodo() {
    let todo = document.getElementById("form2").value; // get the field from html
    // validation for empty todo adding
    if (todo === "") {
        alert`Todo item cannot be empty`
    } else {
        // push new todo to our created array.
        todos.push(todo);
        viewTodos();
    }
}

// function to view todos
function viewTodos() {
    // Empty string variable to hold each todo data
    let data = "";

    // Loop through each item in the todos array
    for (let i = 0; i < todos.length; i++) {
        // Append a string to the data variable. This string is a list item that includes:
        // - a checkbox than send checked todos to completed tabs
        // - a span that displays the todo text 
        data += `
        <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #f4f6f7;">
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." onclick="completedTodo(${i})" />
            <span id="todo${i}">${todos[i]}</span>
            <i id="" onclick="" class="fas fa-edit ms-2" style="cursor: pointer;"></i>
        </li>
        `;
    }

    // Find the HTML element with the id "mytodo" and set its innerHTML to the data string
    document.getElementById("mytodo").innerHTML = data;
}

// Function for completed todos
function completedTodo(i) {
    // Get todo element using todo name with corresponding index
    let todoEl = document.getElementById(`todo${i}`);
    // Clone the parent element of the todo element
    let clonedNode = todoEl.parentElement.cloneNode(true);

    // Get the checkbox from the cloned node
    let checkbox = clonedNode.querySelector('input[type="checkbox"]');

    // Remove the checkbox from the cloned node
    clonedNode.removeChild(checkbox);

    // Create a delete icon
    let deleteIcon = document.createElement("i");

    // Set the class name, cursor style, and margin-left style of the delete icon
    deleteIcon.className = "fas fa-trash-alt btn btn-danger";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.style.marginLeft = "auto";

    // Add an event listener to the delete icon to remove its parent element when clicked
    deleteIcon.addEventListener("click", (evt) => {
        evt.target.parentElement.remove();
    });
    // Append the delete icon to the cloned node
    clonedNode.appendChild(deleteIcon);

    // Append the cloned node to the element with the id "completedTodo"
    document.getElementById("completedTodo").appendChild(clonedNode);

    // Remove the parent element of the original todo element
    todoEl.parentElement.remove();

    // Remove the todo at the given index from the todos array
    todos.splice(i, 1);

    // Update the todos after checked
    viewTodos();
}