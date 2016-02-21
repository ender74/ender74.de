import React, { Component } from 'react'
import Footer from './components/footer'
import Title from './components/title'

class ResumeLayout extends Component {
  render() {
    const style = {
        width: '100%',
        background: 'white',
        fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
        fontSize: '1.0em'
    }
    return (
      <section style={style}>
        <header>
            <Title basics={this.props.data.basics} />
        </header>
        <main>
            {this.props.children}
        </main>
        <footer>
            <Footer basics={this.props.data.basics} />
        </footer>
      </section>
    )
  }
}

export default ResumeLayout