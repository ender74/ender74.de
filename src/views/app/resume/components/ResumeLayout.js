import React, { Component } from 'react'
import { Link } from 'react-bootstrap'
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
        <footer>
        Die Daten werden aus einer <a href="/resume.json">JSON Datei</a> geladen.
        </footer>
      </article>
    )
  }
}

export default ResumeLayout