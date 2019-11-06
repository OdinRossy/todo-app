import React from 'react'

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'

import './App.css'

class App extends React.Component {



    constructor() {
        super();
        this.state = {
            todoListItems: [
                this.createItem('Build awesome app'),
                this.createItem('Drink some cofee'),
                this.createItem('Have a nice day'),
            ],
            term: ''
        }
    }

    itemsCounter = 0;

    findItemIndexById = (id, list) => {
        return list.findIndex(
            (item) => item.id === id
        );
    }

    createItem = (label) => {
        if (label !== '') {
            return {
                id: this.itemsCounter++,
                label,
                important: false,
                done: false
            }
        }
    }

    toggleProperty = (propName, id, arr) => {
        const i = this.findItemIndexById(id, arr)
        const oldItem = arr[i]
        return [
            ...arr.slice(0, i),
            { ...oldItem, [propName]: !oldItem[propName] },
            ...arr.slice(i + 1)
        ]
    }

    onItemDelete = (itemId) => {
        this.setState(({ todoListItems }) => {

            const indexOfItemToDelete = this.findItemIndexById(itemId, todoListItems)

            return {
                todoListItems: [
                    ...todoListItems.slice(0, indexOfItemToDelete),
                    ...todoListItems.slice(indexOfItemToDelete + 1)
                ]
            };
        })
    }

    onItemAdd = (label) => {
        const newItem = this.createItem(label);

        if (newItem) {
            this.setState(({ todoListItems }) => {
                const items = [...todoListItems, newItem];
                return {
                    todoListItems: items
                }
            })
        }
    }


    onToggleImportant = (id) => {
        this.setState(({ todoListItems }) => {
            return {
                todoListItems: this.toggleProperty('important', id, todoListItems)
            }
        })
    }

    onToggleDone = (id) => {
        this.setState(({ todoListItems }) => {
            return {
                todoListItems: this.toggleProperty('done', id, todoListItems)
            }
        })
    }

    onSearchType = (term) => {
        this.setState({
            term: term
        })
    }

    searchItems = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((it) => {
            return it.label.toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    filterItems = (items, criteria) => {
        return items.filter((it) => {
            return it[criteria]
        })
    }

    render() {
        const { todoListItems, term } = this.state
        const itemsToShow = this.searchItems(todoListItems, term)
        const doneCount = todoListItems.filter((item) => item.done).length;
        const todoCount = todoListItems.length - doneCount;

        return (
            <div className="todo-app" >
                <AppHeader todoCount={todoCount} doneCount={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearchType={this.onSearchType} />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    items={itemsToShow}
                    onItemDelete={this.onItemDelete}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />

                <ItemAddForm
                    onItemAdd={this.onItemAdd} />
            </div>
        )
    }

}

export default App