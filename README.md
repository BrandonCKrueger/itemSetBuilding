## Riot Item Set Application
This is the frontend application for the Item Set Builder created for Riot's API Challenge 2.0.  The associated backend is located [here](https://github.com/BrandonCKrueger/itemSetBuilding-API)

This application is currently live at [http://app-itemsetbuilder.rhcloud.com/](http://app-itemsetbuilder.rhcloud.com/), hosted for free by [OpenShift](https://www.openshift.com/).

The application is build using [AngularJS 1.4.x](https://angularjs.org/).  The code is maintained using [JSHint](http://jshint.com/) for code linting, [JSCS](http://jscs.info/) for maintaining code style, and [Karma](http://karma-runner.github.io/0.13/index.html) with [Jasmine](http://jasmine.github.io/) for unit tests.  The application uses [Grunt](http://gruntjs.com/) to handle building the application for deployment, including code analysis.

### How To Use
---
Feel free to register an account to create Item Set builds and test the application.  You do not need an account to download existing item builds however!

Item Set Builds are guaranteed to exist on the following champions:
* Annie
* Shaco
* Vladimir

Hopefully everything is easy and intuitive.  If you need any help, contact me at brandon.c.krueger@gmail.com.

### Requirements
---
* Have Node v0.12.7 or higher installed
* Have Bower CLI installed (`npm install -g bower`)

### Setup
---
* Run `git clone https://github.com/BrandonCKrueger/itemSetBuilding.git` to clone the repository
* Run `npm install` to install dependencies
* Run `bower install` to install external components
* Update the [/src/api/api.config.js](https://github.com/BrandonCKrueger/itemSetBuilding/blob/master/src/api/api.config.js) file with the domain of your API endpoint.  `http://localhost:3000` will work if you're running the [API](https://github.com/BrandonCKrueger/itemSetBuilding-API) locally as well.
* Run `grunt serve` from the terminal to launch the application

### Unit Tests
---
* Unit tests are done using [Karma](http://karma-runner.github.io/0.13/index.html) with [Jasmine](http://jasmine.github.io/))
* Unit tests code quality is maintained with the help of [JSHint](http://jshint.com/) and [JSCS](http://jscs.info/)
* To run code analysis and unit tests: `grunt analyze`
* Unit test coverage is virtully zero at the moment
