import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {

    onLabelClick = () => {
        console.log(this.props.label)
    }

    render() {
        const { label, important = false } = this.props

        const style = {
            color: important ? 'steelblue' : '#333333',
            'fontWeight': important ? 'bold' : 'normal'
        }

        return (
            <span className="todo-list-item" >
                <span
                    className="todo-list-item-label"
                    onClick={this.onLabelClick}
                    style={style}>{label}
                </span>

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