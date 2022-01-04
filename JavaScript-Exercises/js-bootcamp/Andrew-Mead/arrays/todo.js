const todos = [
    {
        text: 'study JavaScript',
        completed: true
    }, {
        text: 'finish Sass exercise',
        completed: false
    }, {
        text: 'complete SVG exercise',
        completed: false       
    }, {
        text: 'feed the monkey',
        completed: true      
    }, {
        text: 'beat mega man x9',
        completed: false
    }
];


// Create function that removes a todo by text value

function removeTodo(lstTodo, txtTodo) {

    const rmvIdx = lstTodo.findIndex(function(elm) {
        return elm.text.toLowerCase() === txtTodo.toLowerCase();        
    });   

    if (rmvIdx != -1) {
        return lstTodo.splice(rmvIdx, 1);
    }
}

// Write a function that gets the todos that have a completed value of false

function getIncomplete(todos) {
    return todos.filter(function(elm) {
        return !elm.completed;
    });
}

// Write a function that puts all incomplete todos at the top (false value)
// And puts all completed items at the bottom of the list (true value)

function sortTodos(todos) {
    todos.sort(function(a, b) {
        if (a.completed > b.completed) {
            return 1;
        } else if (a.completed < b.completed) {
            return -1;
        } else {
            return 0;
        }
    });
}


sortTodos(todos);
console.log(todos);

// console.log(getIncomplete(todos));

// removeTodo(todos, 'complete SVG exercise');
// console.log(todos);
// console.log('\r');
// removeTodo(todos, 'doggie');
// console.log(todos);







































// Challenge 1:
// Create an array with five todos
// Print message: You have x todos (x is the length of array)
// Print the first and second to last itmes -> Todo: walk the dog

// Challenge2:
// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

// Challenge 3:
/*

Print the following using forEach method:

1. First item of array
2. Second item of array
and so on

*/

// Challenge 4:
/*

Print the following using for loop:

1. First item of array
2. Second item of array
and so on

*/

// const todos = ['study JavaScript', 'finish Sass exercise', 'complete SVG exercise', 'feed the monkey', 'beat mega man x9'];
// 
// todos.splice(2, 1);
// todos.push('do 50 jumping jax');
// todos.shift();
// 
// console.log(todos);
// console.log(`You have ${todos.length} todos!`);
// 
// console.log('\r');
// 
// todos.forEach(function(todo, idx) {
    // console.log(`${idx + 1}. ${todo}`)
// });
// 
// console.log('\r');
// 
// for (let i = 0; i < todos.length; i++) {
    // console.log(`${i + 1}. ${todos[i]}`);
// }

// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length - 2]}`);