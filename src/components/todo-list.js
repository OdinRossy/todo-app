import React from 'react';

import TodoListItem from './todo-list-item'

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem text="Build awesome app" /></li>
            <li><TodoListItem text="Drink cofee" /></li>
        </ul>
    );
}

export default TodoList