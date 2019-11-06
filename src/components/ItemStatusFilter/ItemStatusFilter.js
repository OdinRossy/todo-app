import React from 'react';

import './ItemStatusFilter.css';

class ItemStatusFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    onClick = (filter) => {
        this.props.onFilter(filter)
    }

    render() {
        const { filter } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            let className = 'btn';
            if (filter === name) {
                className += ' btn-info'
            } else {
                className += ' btn-outline-secondary'
            }
            return (
                <button key={name}
                    type="button"
                    onClick={() => this.onClick(name)}
                    className={className}>{label}</button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default ItemStatusFilter;