import checkStatus from 'fetch-check-http-status'
import { updateIntl } from 'react-intl-redux'


const setLocale = (locale) => {
    return (dispatch) => {
        const localMessages = "/messages_" + locale + ".json"
        const defaultMessages = "/messages.json"
        const doFetch = (src) => {
            return fetch( src )
                .then(checkStatus)
                .then(response => {
                        if (!response.ok) {
                          throw new Error('Network response was not ok');
                        }
                        return response.json()
                })
                .then(messages => { dispatch(updateIntl({locale, messages})) })
        }
        doFetch(localMessages)
            .catch(error => { doFetch(defaultMessages) })
    }
}

export default {
    setLocale: setLocale
}
