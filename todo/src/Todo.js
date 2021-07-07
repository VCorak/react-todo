import React from 'react';

function Todo({ todo }) { /* passing out todo element */ /* printing actual todo name from object */
    return ( /* printing out todo */
        <div>
            { todo.name }
        </div>
    );
};

export default Todo;
