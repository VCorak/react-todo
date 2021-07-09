import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from "./TodoList";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
    const [todos, setTodos] = useState([]) /* state- when state of application changes it renders it,
     we need to store todos in a state so we can render this todos and every time we adda todo, delete a todo, change it, it will rerender entire component
       - our default state here is empty array (first time app reloads it does not have any todos)
       - then we are setting a state to a variable (const) that it returns an array and we can destructure that
        array and set it equal to useState- first element is all of our todos, second element is function that allow us to
          update our todos- this is called object destructuring*/


    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) // this is a string and we need to parse it using json and this will convert it to array
        if (storedTodos) setTodos(storedTodos) // store todos if we have them from local storage- it is only browser accessible

    }, []) // empty array means we just want to call this function once right when our component loads,
    // and bcs empty array never changes it will not call it again

    useEffect(() => { // function to do things- anytime something changes in array we call this function to save our todos in local storage
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]) // array of properties

    function toggleTodo(id) {
        const newTodos = [...todos] // never modify directly a state variable, always create a copy to set a new state
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    let uniqueID = ( function() { /* this function randomizes id instead of downloading uuidv4*/
        let id =
            Math.floor(Math.random() * Math.floor(Math.pow(2,32)-1));
        return function() { return id++ };
    })();

    const todoNameRef = useRef()

    function handleAddNew(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => { /* function giving us previous todos and change that by adding new todos in array*/
            return [...prevTodos, { id: uniqueID(), name: name, complete: false}]
        })
        todoNameRef.current.value = null /*clearing out input after pressing the button*/
    }

    function handleDone() { // set todo list to new list that does not have our complete ones
        const newTodos = todos.filter(todo => !todo.complete) // variable
        setTodos(newTodos)
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
          <button onClick={handleDone} className='clear-todo-button' type='button' value="Submit">Done</button>
          </form>
          <div className='left-todo'>{todos.filter(todo => !todo.complete).length} left to do</div>
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
/* {todos.filter(todo => !todo.complete).length} filter ones which are not complete*/
//The Local Storage is designed for storage that spans multiple windows and lasts beyond the current session. In particular, Web applications may wish to store megabytes of user data, such as entire user-authored documents or a user's mailbox, on the client side for performance reasons. Cookies do not handle this case well because they are transmitted with every request.
//
// Local Storage is available for every page and remains even when the web browser is closed, but you cannot read it on the server.
//
// The stored data has no expiration date in local storage. With cookies, you can set the expiration duration.
//
// If you want to clear local storage, then do it by clearing the browser cache. You can also use JavaScript for this. Local Storage is for client side, whereas cookies are for the client as well as server side.