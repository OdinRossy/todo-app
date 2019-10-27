import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {



    render() {

        const { text, important = false } = this.props

        const style = {
            color: important ? 'tomato' : '#333333',
            'fontWeight': important ? 'bold' : 'normal'
        }

        return (
            <span className="todo-list-item" >
                <span className="todo-list-item-label" style={style}>{text}</span>

                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        )
    }
}


export default TodoListItem;