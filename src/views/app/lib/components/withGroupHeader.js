import React from 'react'

const WithGroupHeader = React.createClass({
    render: function () {
        return (
            <div className='group' >
                <h2 className='groupHeader'>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
});

export default WithGroupHeader