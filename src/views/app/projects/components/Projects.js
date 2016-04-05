import React, { Component } from 'react'
import ProjectList from './Project'

const Projects = ( { title, events } ) => {
    if (typeof events == 'undefined')
        return <div>Lade Daten...</div>
    return <ProjectList events={events}/>
}

export default Projects