import React, { Component } from 'react';
import './SerchPanel.css'

export default class SearchPanel extends Component {

    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    onSearchType = (e) => {
        const term = e.target.value

        this.setState({
            term
        })

        this.props.onSearchType(term)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Type to search"
                value={this.state.term}
                onChange={this.onSearchType} />
        )
    }

}