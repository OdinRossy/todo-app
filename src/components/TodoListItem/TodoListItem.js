import React from 'react'
import './TodoListItem.css'

const TodoListItem = ({ text, important = false }) => {
    const style = {
        color: important ? 'tomato' : '#333333',
        'fontWeight': important ? 'bold' : 'normal'
    }
    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={style}>{text}</span>

            <button type="button"
                className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation" />
            </button>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
}

export default TodoListItem;