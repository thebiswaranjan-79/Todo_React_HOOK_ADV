import React, { useContext, useState } from 'react';
import TodoContext from '../../context/TodoContext';

const AddTodo = () => {

    const[todos, setTodos] = useContext(TodoContext);
    const[todoText, setTodoText] = useState('');

    return (

        <div>
            <input type="text" placeholder='Add Your task here...' 
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
            <button onClick={() =>{
               let nextId = todos.length +1;
               setTodos([...todos, {id: nextId, text : todoText, isFinished : false}]);
                setTodoText('')
            }}>Submit</button>
        </div>
    );
}

export default AddTodo;
