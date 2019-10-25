import React from 'react'

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'

import './App.css'

const App = () => {
    const todoListItems = [
        { id: 1, text: 'Build awesome app', important: true },
        { id: 2, text: 'Drink some cofee', important: false },
        { id: 3, text: 'Have a nice day', important: false },
    ]

    return (
        <div className="todo-app">
            <AppHeader todoCount={1} doneCount={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList items={todoListItems} />
        </div>
    )
}

export default App