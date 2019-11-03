import React from 'react'

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'

import './App.css'

const todoListItems = [
    { id: 1, label: 'Build awesome app', important: true },
    { id: 2, label: 'Drink some cofee', important: false },
    { id: 3, label: 'Have a nice day', important: false },
]

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todoListItems: []
        }
    }

    componentDidMount() {
        this.setState({
            todoListItems: todoListItems
        })
    }

    generateItemId = () => {
        const size = this.state.todoListItems.length;
        return size + 1;
    }

    onItemDelete = (itemId) => {
        this.setState(({ todoListItems }) => {

            const indexOfItemToDelete = todoListItems.findIndex(
                (item) => item.id === itemId
            );

            return {
                todoListItems: [
                    ...todoListItems.slice(0, indexOfItemToDelete),
                    ...todoListItems.slice(indexOfItemToDelete + 1)
                ]
            };
        })
    }

    onItemAdd = (label) => {
        console.log('onItemAdd', label)

        const newItem = {
            id: this.generateItemId(),
            label,
            important: false
        }

        this.setState(({ todoListItems }) => {
            const items = [...todoListItems, newItem];

            return {
                todoListItems: items
            }
        })
    }

    render() {
        return (
            <div className="todo-app" >
                <AppHeader todoCount={1} doneCount={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    items={this.state.todoListItems}
                    onItemDelete={this.onItemDelete}
                />

                <ItemAddForm
                    onItemAdd={this.onItemAdd} />
            </div>
        )
    }

}

export default App