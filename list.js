var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");


//use this to allow HTML visibilty while using prompt()
window.setTimeout(function () {

    while (input !== "quit") {
        //handle input
        if (input === "list") {
            console.log(todos);
        } else if (input === "new") {
            //ask for new todo
            var newTodo = prompt("Enter a new todo");
            //add to todos array
            todos.push(newTodo);
        }
        //ask again for new input
        input = prompt("What would you like to do?");
    }

    console.log("Okay, you quit the app.");

}, 500);