var srcFolder = './src'
var tgtFolder = 'static-website'

var React = require('react')
var ReactDOM = require('react-dom/server')
require('node-jsx').install()
var Resume = React.createFactory(require(srcFolder + '/components/resume.jsx'))
var fs = require('fs-extra')
var data = require(srcFolder + '/resume.json')

var Header = '<!DOCTYPE HTML><html><head><meta charset="utf-8" /><title>Über mich</title><link rel="stylesheet" href="resume.css" /></head><body>'
var Footer = '</body></html>'
var ResumeHTML = ReactDOM.renderToString(Resume({ data: data }));
fs.mkdir(tgtFolder, function (e) {
    if (!e || (e && e.code === 'EEXIST')) {
        fs.writeFile(tgtFolder + '/index.html', Header + ResumeHTML + Footer, function (err) {
            if (err) {
                return console.log(err);
            }

            console.log('index.html saved.');
        });
        var toCopy = ['portrait.jpg', 'resume.css', 'foaf.rdf', 'resume.json', 'diplom']
        toCopy.forEach(function (f) {
            fs.copy(srcFolder + '/' + f, tgtFolder + '/' + f)
            console.log(f + ' saved.');
        })
    } else {
        //debug
        console.log(e);
    }
})
