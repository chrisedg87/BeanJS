[![BeanJS Logo](https://raw.githubusercontent.com/chrisedg87/BeanJS/master/public/modules/core/img/BeanJS-full-small.png)](http://github.com/chrisedg87/beanjs)

BeanJS is a full stack open source framework for using SQL with Node. BeanJS is build on the very powerful Bookshelf.js. Inspired by the superb [MeanJS](https://github.com/meanjs/mean).

MeanJS is a great project and thoroughly recommended, however using a NoSQL solution isn't always the best option which is where this framework comes in. 

BeanJS is extremely lightweight and ideal for getting small projects off the ground quickly without all the initial baggage found in other frameworks. 

It uses the powerful Knex query builder so you don't to worry about configuring your database schema manually! The Knex migration tools will take care of all this for you through the Yo generator, however at present this is still in development. 

## Before You Begin 
Read about the building blocks for the BeanJS application: 
* Bookshelf.JS - Go through [Bookshelf.js Official Website](http://bookshelfjs.org/) and look at their API documentation.
* Knex - It may also be good to get familiar with the [Knex Query Builder](http://knexjs.org/) as this will help with the migration scripts.
* Express - The best way to understand express is through its [Official Website](http://expressjs.com/), particularly [The Express Guide](http://expressjs.com/guide.html); you can also go through this [StackOverflow Thread](http://stackoverflow.com/questions/8144214/learning-express-for-node-js) for more resources.
* AngularJS - Angular's [Official Website](http://angularjs.org/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and the [Egghead Videos](https://egghead.io/).
* Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

## Prerequisites
Make sure you have installed all these prerequisites on your development machine.
* Node.js - [Download & Install Node.js](http://www.nodejs.org/download/) and the npm package manager, if you encounter any problems, you can also use this [Github Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* Postgres / mySQL / any SQL engine - Install your required database engine and configure a database and user account, checkout later how to set it up
* Bower - You're going to use the [Bower Package Manager](http://bower.io/) to manage your front-end packages, in order to install it make sure you've installed Node.js and npm, then install bower globally using npm:

```
$ npm install -g bower
```

* Grunt - You're going to use the [Grunt Task Runner](http://gruntjs.com/) to automate your development process, in order to install it make sure you've installed Node.js and npm, then install grunt globally using npm:

```
$ sudo npm install -g grunt-cli
```

* Knex - Install Knex globally in order to make use of the migration scripts for generating your SQL Schema.

```
$ sudo npm install -g knex
```

## Quick Install
The first thing you should do is install the Node.js dependencies. The boilerplate comes pre-bundled with a package.json file that contains the list of modules you need to start your application, to learn more about the modules installed visit the NPM & Package.json section.

To install Node.js dependencies you're going to use npm again, in the application folder run this in the command-line:

```
$ npm install
```

## Configure your DB engine

BeanJS is relational database agnostic but there is a couple off steps that needs to be done for your particular Database Engine:

First Edit your config files in /app/config/env  (development.js,production.js and test.js needs to be edited).

Finally use Knex to generate the example module. 

```
$ knex migrate:latest
```

## Running Your Application
After the install process is over, you'll be able to run your application using Grunt, just run grunt default task:

```
$ grunt
```

Your application should run on the 3000 port so in your browser just go to [http://localhost:3000](http://localhost:3000)

## Contribution

This project is still fairly early in development so we're always looking for contributions!