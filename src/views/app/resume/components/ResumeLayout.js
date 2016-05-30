import React, { Component } from 'react'
import { Link } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import Title from './Title'

class ResumeLayout extends Component {
  render() {
    return (
      <article>
        <header>
            <Title basics={this.props.data.basics} />
        </header>
        <main>
            {this.props.children}
        </main>
        <footer className='hide-when-printing'>
            <FormattedMessage
                id='json.note1'
                defaultMessage='The data is loaded from a'
            />
            &nbsp;
            <a href="/resume.json">
            <FormattedMessage
                id='json.note2'
                defaultMessage='JSON file'
            />
            <FormattedMessage
                id='json.note3'
                defaultMessage='geladen.'
            />
            </a>
        </footer>
      </article>
    )
  }
}

export default ResumeLayout