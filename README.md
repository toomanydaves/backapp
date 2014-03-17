[BackappJS](http://backbonejs.org)
==========================

> An extensible, single-page JavaScript application framework for domain-driven design.

### Jump in. ###

`npm install backapp && backapp --help`

### Back app. ###

**Backapp** is a tool for developing high-performance web **APP**s, currently built on top of [**BACK**boneJS](http://backbonejs.org).

Backbone commendably ships with as few frills as possible, including no `App` class or object.
The "backbone" of Backbone residing entirely in its `Model`, `Collection` and  `Event` classes.
They implement the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) and support a [functional programming](http://en.wikipedia.org/wiki/Functional_programming) style).

**Backapp** introduces `App`, as well as `State`, and `PersistenceStrategy` classes into the mix.

These classes provide functionality to behave optimistically when dealing network latency. 
They distinguish **backapp**s as **APP**s, as capable moving **BACK** as they are following the user's path forward.

### Learn more. ###
Visit **[backappjs.org](http://backappjs.org)**.
