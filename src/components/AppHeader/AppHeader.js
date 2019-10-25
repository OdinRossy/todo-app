import React from 'react';
import './AppHeader.css'

const AppHeader = ({ todoCount, doneCount }) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo list</h1>
            <h2>{todoCount} more todo, {doneCount} done.</h2>
        </div>
    );
}

export default AppHeader;