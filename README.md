[BackappJS](http://backbonejs.org)
==========================

> An extensible, single-page JavaScript application framework for domain-driven design.

### Jump in. ###

`npm install backapp && backapp --help`

### Back app. ###

**Backapp** is a tool for developing high-performance web **APP**s, currently built on top of [**BACK**boneJS](http://backbonejs.org).

Backbone commendably ships with as few frills as possible, including no `App` class or object (the "backbone" of Backbone residing in its `Model`, `Collection` and  `Event` classes, which implement the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) and introduce [functional programming](http://en.wikipedia.org/wiki/Functional_programming) abstractions).

**Backapp** introduces `App`, as well as `State`, and `PersistenceStrategy` classes into the mix.

These classes provide functionality to behave optimistically when dealing network latency. They distinguish **backapp**s as **APP**s, as capable moving **BACK** to previous states when the need arises, as they are following the user's path forward to new ones.

### Learn more. ###
Visit **[backappjs.org](http://backappjs.org)**.
