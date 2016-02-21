'use strict'

import fs from 'fs-extra'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Resume from './views/app/resume/resume'

const data = require('./static/resume.json')
const react = ReactDOM.renderToString(<Resume data={data} />)
console.log(react.length)