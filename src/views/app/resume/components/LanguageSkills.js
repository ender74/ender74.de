import React, { Component } from 'react'
import {Row, Col, Label} from 'react-bootstrap'
import { injectIntl } from 'react-intl'
import WithGroupHeader from '../../lib/components/withGroupHeader'
import Tags from './Tags'

const styles = {
    row: {
        marginBottom: '5px'
    }
}

class LanguageSkillEntry extends Component {
  render() {
    return (
        <div>
            <Row style={ styles.row }>
                <Col sm={4}><Label>{this.props.language}</Label></Col>
                <Col sm={8}>{this.props.fluency}</Col>
            </Row>
        </div>
    )
  }
}

class LanguageSkills extends Component {
  render() {
    const { intl } = this.props
    const title = intl.formatMessage({
        id: 'resume.languages',
        defaultMessage: 'languages'
    })

    const languages= this.props.languages.map(function (language, index) {
      return (
        <div key={index}>
            <LanguageSkillEntry
              {...language} />
        </div>
      )
    })
    return (
        <div style={ style.entry }>
            <WithGroupHeader title={title}>
                {languages}
            </WithGroupHeader>
        </div>
    )
  }
}

const style = {
    entry: {
        pageBreakInside: 'avoid'
    }
}

export default injectIntl(LanguageSkills)