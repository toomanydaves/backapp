[BackappJS](http://backbonejs.org)
==========================

> An extensible, single-page JavaScript application framework for domain-driven design.

### Jump in. ###

`npm install backapp && backapp --help`

### Back app. ###

**Backapp** is a tool for developing high-performance web **APP**s, currently built on top of [**BACK**boneJS](http://backbonejs.org).

Backbone commendably ships with as few frills as possible, including no `App` class or object. (The *backbone* of Backbone rests in its `Model` and `Collection` classes. They implement the [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) and introduce [functional programming](http://en.wikipedia.org/wiki/Functional_programming) abstractions.)

**Backapp** adds `App`, as well as `State`, and `PersistenceStrategy` classes to the mix.

These classes provide functionality for applications to behave optimistically when dealing with network latency. They allow apps to return to a prior state when the need arises. They distinguish **backapp**s as **APP**s, as capable of moving **BACK** to previous states, as they are following the user's path forward to new ones.

### Learn more. ###
Visit **[backappjs.org](http://backappjs.org)**.
