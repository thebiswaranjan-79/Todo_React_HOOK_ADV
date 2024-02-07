import React, { useState } from 'react';

const Todo = ({finishTodo, deleteTodo, editTodo, text, isFinished}) => {

    const[isEditing, setIsEditing] = useState(false);
    const[todoText, setTodoText] = useState(text);
    return (
        <div>
            <input type="checkbox" checked = {isFinished} onChange={()=> finishTodo(!isFinished)}/>
            {isEditing ? <input type='text' value = {todoText} onChange={(e) => setTodoText(e.target.value)}/> :  <span>{text}</span>}
            <button onClick={() =>{
                setIsEditing(!isEditing);
                editTodo(todoText);

            }}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default Todo;
