import React from 'react';
import Todo from "./Todo";
import './App.css';

function TodoList({ todos }) { /* rendering out todos */
    return (
        todos.map(todo => { /* inside of an array we loop and map all over our todos
         so for each on of our todos we wanna return a todo element in a Todo component and pass it todo  */
            return <Todo key = { todo.id } todo = { todo } /> /* returning todo with id*/
        })
    );
};

export default TodoList;

/* key- react doesnt know to update this properly without key,
every time our todo array changes it is gonna render every single todo in our list
but we wonna rerender ones that change so we are adding the unique key- in this case this is name of
of array that we are using- what is does- it actually tells react to only rerender or change the components that change in that array
instead of rerendering all every single time
 */