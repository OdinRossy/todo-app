import React, { Component } from 'react'
import './ItemAddForm.css'

export default class ItemAddForm extends Component {

    render() {
        const { onItemAdd } = this.props;
        return (
            <div className='item-add-form'>
                <button
                    onClick={() => onItemAdd('some text')}
                    className='btn btn-outline-success'>Add Item</button>
            </div>
        )
    }
}