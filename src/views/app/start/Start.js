import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { Jumbotron } from 'react-bootstrap'

const Start = () => {
    return (
        <div>
            <Jumbotron>
                <h1>ender74.de</h1>
                <h3>
                    <FormattedMessage
                        id='jumbotron.slogan'
                        defaultMessage='Welcome to my homepage.'
                    />
                </h3>
            </Jumbotron>
        </div>
    )
}

export default Start