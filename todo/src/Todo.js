import React from 'react';

function Todo({ todo }) { /* passing out todo element */ /* printing actual todo name from object */
    return ( /* printing out todo */
        <div>
            <label>
                <input type = "checkbox" checked={ todo.complete } />
            { todo.name }
            </label>
        </div>
    );
};

export default Todo;
