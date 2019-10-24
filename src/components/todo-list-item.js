import React from 'react'

const TodoListItem = ({ text, important = false }) => {
    const style = {
        color: important ? 'tomato' : '#333333',
        'font-weight': important ? 'bold' : 'normal'
    }
    return (
        <span style={style}>{text}</span>
    );
}

export default TodoListItem;