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
        <div className="container">
            <div className="col-3"></div>
            <div className="col-6"><AppHeader />
                <SearchPanel />
                <TodoList items={todoListItems} /></div>
            <div className="col-3"></div>

        </div>
    )
}

export default App