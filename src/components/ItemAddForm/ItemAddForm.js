import React, { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

    constructor() {
        super();
        this.state = {
            label: ''
        }
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        this.clearLabel()
    }

    clearLabel = () => {
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form
                className='item-add-form d-flex'
                onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Type any text"
                    value={this.state.label}
                    onChange={this.onLabelChange} />
                <button
                    className='btn btn-outline-secondary'>Add</button>
            </form>
        )
    }
}