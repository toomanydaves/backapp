# [BackappJS](http://backbonejs.org) #
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][daviddm-url]][daviddm-image] 
> An extensible, single-page JavaScript application framework for domain-driven design.

## Jump in. ##
`npm install backapp`

## Back app. ##
**BACKAPP** is a tool for developing high-performance web **APP**s, currently built on top of
[**BACK**boneJS](http://backbonejs.org).

Backbone commendably ships with as few frills as possible, including no `App` class or object.
The "*backbone*" of Backbone resides entirely in its `Model`, `Collection` and  `Event` classes.
They implement the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern)
and support a [functional programming style](http://en.wikipedia.org/wiki/Functional_programming).

**BACKAPP** introduces `App`, as well as `State`, and `PersistenceStrategy` classes into the mix.

These classes provide functionality to behave optimistically when dealing network latency. 
They distinguish **BACKAPP**s as **APP**s as capable moving **BACK** to prior states,
as they are following the user's path forward to new ones.

## Learn more. ##
Visit **[backappjs.org](http://backappjs.org)**, or check the
[Docs](http://toomanydaves.github.io/backapp/docs).

## Contribute a verse. ##
In the spirit of open source software development:
* If you find a bug/issue, please
[report it](http://github.com/toomanydaves/backapp/issues).
* If you're interested in contributing, but don't know where to start, consult the
[Road Map](http://trello.com/toomanydaves/backapp).
* For any style related questions, these are the
[Coding Guidelines](http://toomanydaves.github.io/backapp/style-guide).
* If you just like what you see,
[give a shout]() or
[a coffee](https://pledgie.com/campaigns/24553)

## Run with it: Tasks ##
Currently **BACKAPP** uses [GruntJS](http://gruntjs.com) as its task runner.

### Install dependencies. ###
`grunt install`

### Build a distribution. ###
`grunt build`

### Generate documentation. ###
`grunt docs`
