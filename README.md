# Resume

- [Summary](#summary)
- [TODO List](#todo-list)

#### Summary

This project is based on react. Its purpose is to display an resume. 
The data to be displayed is loaded from a json file (see [jsonresume.org](https://jsonresume.org/) for the schema).

To use this project simply copy your resume.json to the src folder.

The installation process is as follows:

To build the project you need to have node.js installed. [You can get it From here](https://nodejs.org/en/download/)

As first step you need to install the dependencies. 
This is done with npm, the package manager which comes 
with node.js. The needed dependencies can be installed with
the following command: 

```
npm install
```
after this you can build the static website by either running
```
node build-static.js
```
or 
```
npm run build-static
```

If everything works as expected, there should be a new directory
named static-website which contains an index.html file together with
some needed resources. Simple open this file in your browser or copy
the whole directory to your webserver.

#### TODO List
- [ ] support languages
- [ ] support interests
- [ ] support references
- [ ] support rewards
- [ ] support volunteer
- [ ] support an routable map to your location
