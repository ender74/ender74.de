# Resume

- [Summary](#summary)
- [TODO List](#todo-list)

#### Summary

This project is based on react. Its purpose is to display an resume. 
The data to be displayed is loaded from a json file (see [jsonresume.org](https://jsonresume.org/) for the schema).

To use this project simply copy your resume.json to the src folder.

The installation process is as follows:

To build the project you need to have node.js installed. [You can get it from here](https://nodejs.org/en/download/)

The build is automated with gulp. First you need to install it globally:

npm -g install gulp

After that you need to install the project dependencies. The needed dependencies can be installed with
the following command: 

```
npm install
```
after this you can build the website by running either
```
gulp release
```
or 
```
npm run build
```

If everything works as expected, there should be a new directory
named dist which contains an index.html file together with
some needed resources. Simply open this file in your browser or copy
the whole directory to your webserver.

#### TODO List
- [ ] support missing sections from json
- [ ] internationalization
- [X] support an routable map to your location