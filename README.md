# EERE Application Template
The EERE application template is intended as a cross-platform collection of tools and files. It provides the base styles and functionality needed to develop an EERE application. The pattern uploaded here is for MVC, but you can easily adapt it to other structures. Also included are several optional build and dependency tools for development.

See the ```example.html``` file for a working example. Refer to ```style_guide.html``` for common content styles.

## Installation

### For New Sites
You can download the entire repository, including the optional tools:
```shell
cd my-app-dir
git clone https://github.com/NREL/eere-app-template.git .
```

### Minimal Install
For pre-existing sites, sites with complex architecture, or if you only want the minimal number of files:
Grab the archive file https://github.com/NREL/eere-app-template/archive/master.zip
Extract these directories to your project:
```shell
/app
/assets
/public
```

## Core Features
* jQuery
* Bootstrap
* Modernizr
* Google Analytics
* Crazy Egg
* AddThis

## Optional Development Tools
* Bower - for dependency management (http://bower.io/)
* npm - for installing node modules for testing and building (https://github.com/npm/npm)
* Grunt - for running tasks such as concatination, and uglification (http://gruntjs.com/)



## To Do: Documentation for
* bower.json
* package.json
* gruntfile descriptions of each task
* style guide
* documentation for directory structure
* IE8 support (HTMLShiv and Respond)

