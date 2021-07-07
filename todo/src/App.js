import React, { useState, useRef } from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState([]) /* state- when state of application changes it renders it,
     we need to store todos in a state so we can render this todos and every time we adda todo, delete a todo, change it, it will rerender entire component
       - our default state here is empty array (first time app reloads it does not have any todos)
       - then we are setting a state to a variable (const) that it returns an array and we can destructure that
        array and set it equal to useState- first element is all of our todos, second element is function that allow us to
          update our todos- this is called object destructuring*/
    const todoNameRef = useRef()

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    let uniqueID = ( function() { /* this function randomizes id instead of downloading uuidv4*/
        let id =
            Math.floor(Math.random() * Math.floor(Math.pow(2,32)-1));
        return function() { return id++ };
    })();


    function handleAddNew(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => { /* function giving us previous todos and change that by adding new todos in array*/
            return [...prevTodos, { id: uniqueID(), name: name, complete: false}]
        })
        todoNameRef.current.value = null /*clearing out input after pressing the button*/

    }

  return (
      <>
      <div className="circle-one"></div>
          <div className="circle-two"></div>
          <div className="circle-three"></div>
      <div className='todo-app'>
          <h1>TODO APP</h1>
          <form className='todo-form'>
              <input ref={todoNameRef} type= "text" className='todo-input' placeholder='Add a todo' />
          <button onClick={handleAddNew} className='add-todo-button' type="button" value="Submit">Add new</button>
          <button className='clear-todo-button' type='button' value="Submit">Done</button>
          </form>
          <div className='left-todo'>0 left to do</div>
          <TodoList todos={todos} toggleTodo = {toggleTodo} />
      </div>
      </>

  );
}

export default App;

/* <TodoList todos = {todos} /> - passing props to component- like passing attributes to html element */
/*[{ id: 1, name: 'Todo 1', complete: false }]) - we can not just store the name of our todo, we have to store an object
     weather or not is complete, we need to have properties of name, id and complete - but this is just hardcoded, default, erase it later, bcs we need empty array*/
//* useRef- allow us to reference elements inside our html- in this case we need it for referencing input value*/
/*Can this be used instead that uuidv4??
* // just a random unique id
var uniqueID = ( function() {
  var id =
    Math.floor(Math.random() * Math.floor(Math.pow(2,32)-1));
  return function() { return id++ };
})();*/