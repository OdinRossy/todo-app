import React from 'react';
import ReactDom from 'react-dom'


const todoElement = (
    <div>
        <h1>Todo list</h1>
        <input type="text" name="" id="" placeholder="search" />
        <ul>
            <li>Learn React</li>
            <li>Create awesome app</li>
            <li>Become smart</li>
        </ul>
    </div>
);

const rootElement = (
    <div>
        {todoElement}
    </div>
);


ReactDom.render(rootElement, document.getElementById('root'));