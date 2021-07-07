import React, { useState } from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false }]) /* state- when state of application changes it renders it,
     we need to store todos in a state so we can render this todos and every time we adda todo, delete a todo, change it, it will rerender entire component
       - our default state here is empty array (first time app reloads it does not have any todos)
       - then we are setting a state to a variable (const) that it returns an array and we can destructure that
        array and set it equal to useState- first element is all of our todos, second element is function that allow us to
          update our todos- this is called object destructuring*/
  return (

      <div className='todo-app'>
          <h1> TODO APP</h1>
          <form className='todo-form'>
        <input placeholder='Add a todo' type= "text"
        className='todo-input'/>
          <button className='add-todo-button'>Add new</button>
          <button className='clear-todo-button'>Done</button>
          </form>
          <div className='left-todo'>0 left to do</div>
          <TodoList todos={todos} />

      </div>

  );
}

export default App;

/* <TodoList todos = {todos} /> - passing props to component- like passing attributes to html element */
/*[{ id: 1, name: 'Todo 1', complete: false }]) - we can not just store the name of our todo, we have to store an object
     weather or not is complete, we need to have properties of name, id and complete          */