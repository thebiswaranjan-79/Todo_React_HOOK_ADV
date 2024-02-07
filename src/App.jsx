import { useEffect, useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo';
import TodoContext from './context/TodoContext';

function App() {
 const [todos, setTodos] = useState([
  {id:1, text:'todo 1', isFinished : true},
  {id:2, text:'todo 2', isFinished : false},
 ]);

//  function addTodos(todoText){
//   let nextId = todos.length+1;
//   setTodos([...todos , {id: nextId, isFinished : false, text : todoText}])
//  }



  return (
    <>
      <TodoContext.Provider value={{todos, setTodos}}>
          <AddTodo />
          <TodoList todos={todos} setTodos= {setTodos}/>
      </TodoContext.Provider>
    </>
  )
}

export default App
