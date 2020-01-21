import polyfills from './polyfills'

function init() {
    polyfills()
}

function renderApp() {
    require('./main')
}

window.onerror = function(message, source, lineno, colno, error) {
    alert(message)
}

init()
renderApp()