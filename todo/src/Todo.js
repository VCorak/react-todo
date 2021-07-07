import React from 'react';

function Todo({ todo, toggleTodo }) { /* passing out todo element */ /* printing actual todo name from object */

    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return ( /* printing out todo */
        <div className='print-container'>
            <label className='print-row'>
                <input type = "checkbox" checked={ todo.complete } onChange={handleTodoClick} className='checkbox' />
            { todo.name }
            </label>
        </div>
    );
};

export default Todo;
