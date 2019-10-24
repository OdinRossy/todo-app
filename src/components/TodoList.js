import React from 'react';

import TodoListItem from './TodoListItem'

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem text="Build awesome app" important /></li>
            <li><TodoListItem text="Drink cofee" /></li>
        </ul>
    );
}

export default TodoList