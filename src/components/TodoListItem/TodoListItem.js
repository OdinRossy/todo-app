import React from 'react'
import './TodoListItem.css'

class TodoListItem extends React.Component {

    constructor() {
        super();

        this.state = {
            done: false,
            important: false
        }
    }

    toggleDone = () => {
        console.log(this.props.label)
        this.setState(({ done }) => {
            return {
                done: !done,
                important: false
            }
        })
    }

    toggleImportant = () => {
        this.setState(({ important }) => {
            return {
                done: false,
                important: !important
            }
        })
    }

    render() {
        const { label } = this.props
        const { done, important } = this.state;

        let classNames = 'todo-list-item';

        if (done) {
            classNames += ' done'
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames} >
                <span
                    className="todo-list-item-label"
                    onClick={this.toggleDone}
                >{label}
                </span>

                <button type="button"
                    onClick={this.toggleImportant}
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