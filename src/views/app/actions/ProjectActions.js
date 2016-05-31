import 'whatwg-fetch'
import checkStatus from 'fetch-check-http-status'
import { update } from 'react-intl-redux'
import C from './ProjectConstants'

const loadProjects = (locale) => {
    return (dispatch) => {
        const localData = "/projects_" + locale + ".json"
        const defaultData = "/projects.json"
        const doFetch = (src) => {
            return fetch( src )
                .then(checkStatus)
                .then(response => { return response.json() })
                .then(projects => { dispatch({
                    type: C.PROJECT_SET,
                    projects: projects
                }) })
        }
        doFetch(localData)
            .catch(error => { doFetch(defaultData) })
    }
}

export default {
    loadProjects
}