import React, { Component } from 'react'
import 'whatwg-fetch'
import checkStatus from 'fetch-check-http-status'
import {connect} from 'react-redux'
import Resume from './components/Resume'

function mapStateToProps(state) {
    const locale = state.intl.locale
    const data = state.resume.data

    return {
        locale,
        data
    }
}

var mapDispatchToProps = function(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume)