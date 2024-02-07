import React from 'react';

const Todo = ({deleteTodo, text, isFinished}) => {

    return (
        <div>
            <input type="checkbox" checked = {isFinished} />
            <span>{text}</span>
            <button>Edit</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    );
}

export default Todo;
