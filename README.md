# [BackappJS](http://backbonejs.org) #
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-url]][depstat-image] 
> An extensible, single-page JavaScript application framework for domain-driven design.

## Jump in. ##
`npm install backapp` or `git clone http://github.com/toomanydaves/backapp`.

## Back app. ##
**BACKAPP** is a tool for developing high-performance web **APP**s, currently built on top of
[**BACK**boneJS](http://backbonejs.org).

Backbone commendably ships with as few frills as possible, including no `App` class or object.
The *backbone* of Backbone resides entirely in its `Model`, `Collection` and  `Event` classes.
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
* If you find a bug/issue, please [report it][backapp-issues-url].
* If you're interested in contributing, but don't know where to start, consult the [Road Map][backapp-road-map-url].
* For any style related questions, here's the [Style Guide][backapp-style-guide-url].
* If you just like what you see, give the repo a star or [a coffee][backapp-pledges-url].

## Run with it: Tasks ##
Currently **BACKAPP** uses [GruntJS](http://gruntjs.com) as its task runner.

### Install dependencies. ###
`grunt install`

Running this task will put the dependency source in `lib/`
([List of dependencies](https://github.com/toomanydaves/backapp/blob/master/bower.json)).

### Build a distribution. ###
`grunt build`

Running this task will put the built source in `dist/[version]/`
([Version information](https://github.com/toomanydaves/backapp/blob/master/package.json)).

### Generate documentation. ###
`grunt docs`

Running this task will put the documentation in `docs/` and start a server at `localhost:8080`.

[backapp-issues-url]: http://github.com/toomanydaves/backapp/issues
[backapp-pledges-url]: https://pledgie.com/campaigns/24553
[backapp-road-map-url]: http://trello.com/toomanydaves/backapp
[backapp-style-guide-url]: http://toomanydaves.github.io/backapp/style-guide

[npm-url]: https://npmjs.org/package/gulp
[npm-image]: https://badge.fury.io/js/gulp.png
[travis-url]: https://travis-ci.org/gulpjs/gulp
[travis-image]: https://travis-ci.org/gulpjs/gulp.png
[coveralls-url]: https://coveralls.io/r/gulpjs/gulp
[coveralls-image]: https://coveralls.io/repos/gulpjs/gulp/badge.png
[depstat-url]: https://david-dm.org/gulpjs/gulp
[depstat-image]: https://david-dm.org/gulpjs/gulp.png
