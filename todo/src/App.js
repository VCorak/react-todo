import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
  return (

      <div className='todo-app'>
          <h1> TODO APP</h1>
          <form className='todo-form'>
        <input placeholder='Add a todo' type= "text"
        className='todo-input'/>
          <button className='add-todo-button'>Add todos</button>
          <button className='clear-todo-button'>Clear todos</button>
          </form>
          <div className='left-todo'>0 left to do</div>
          <TodoList />
      </div>
  );
}

export default App;
