import React, { useState } from 'react';

const AddTodo = ({addTodos}) => {
    const[todoText, setTodoText] = useState('');

    return (

        <div>
            <input type="text" placeholder='Add Your task here...' 
              onChange={(e) => setTodoText(e.target.value)}
              value={todoText}
            />
            <button onClick={() =>{
                addTodos(todoText);
                setTodoText('')
            }}>Submit</button>
        </div>
    );
}

export default AddTodo;
