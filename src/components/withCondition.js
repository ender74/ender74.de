import React from 'react'

const WithCondition = React.createClass({
    render: function () {
        if (!this.props.condition || !this.props.children)
            return <div/>
        else
            return this.props.children
    }
});

export default WithCondition