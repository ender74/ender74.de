import React from 'react'
import Footer from './footer'
import Title from './title'

const ResumeLayout = React.createClass({
  render: function () {
    var style = {
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
})

export default ResumeLayout