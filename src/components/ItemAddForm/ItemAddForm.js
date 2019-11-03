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

    render() {
        const { onItemAdd } = this.props;
        return (
            <div className='item-add-form d-flex'>
                <span>
                    <input
                        placeholder="Type any text"
                        onChange={this.onLabelChange}
                        className="form-control label-input"
                        type="text" />
                </span>
                <span>
                    <button
                        onClick={() => onItemAdd(this.state.label)}
                        className='btn btn-outline-secondary'>Add Item</button>
                </span>
            </div >
        )
    }
}