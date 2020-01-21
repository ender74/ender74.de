import checkStatus from 'fetch-check-http-status'
import { update } from 'react-intl-redux'
import C from './ResumeConstants'

const loadResume = (locale) => {
    return (dispatch) => {
        const localData = "/resume_" + locale + ".json"
        const defaultData = "/resume.json"
        const doFetch = (src) => {
            return fetch( src )
                .then(checkStatus)
                .then(response => {
                        if (!response.ok) {
                          throw new Error('Network response was not ok');
                        }
                        return response.json()
                })
                .then(resume => { dispatch({
                    type: C.RESUME_SET,
                    resume: resume
                }) })
        }
        doFetch(localData)
            .catch(error => { doFetch(defaultData) })
    }
}

export default {
    loadResume
}
