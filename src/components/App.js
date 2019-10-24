import React from 'react'

import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList'

const App = () => {
    const todoListItems = [
        { id: 1, text: 'Build awesome app', important: true },
        { id: 2, text: 'Drink some cofee', important: false },
        { id: 3, text: 'Have a nice day', important: false },
    ]

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList items={todoListItems} />
        </div>
    )
}

export default App