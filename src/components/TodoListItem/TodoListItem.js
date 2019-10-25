import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ text, important = false }) => {
    const style = {
        color: important ? 'tomato' : '#333333',
        'fontWeight': important ? 'bold' : 'normal'
    }
    return (
        <span className="todo-list-item" style={style}>{text}</span>
    );
}

export default TodoListItem;