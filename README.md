[Backapp JS](http://backbonejs.org)
==========================

> An extensible, single-page JavaScript application framework for domain-driven design.

### Jump in. ###

`npm install backapp && backapp --help`

### Back app. ###

Backapp is a tool for developing high-performance web **APP**lications, currently built on top of [**BACK**boneJS](http://backbonejs.org).

[Backbone](http://backbonejs.org) itself provides no `Application` object or class. The *backbone* of Backbone is its `Model` and `Collection` classes. They implement [the Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern) and introduce [functional programming](http://en.wikipedia.org/wiki/Functional_programming) abstractions.

Backapp adds `Application`, `State`, and `PersistenceStrategy` classes to the mix.

These classes provide functionality for behaving optimistically, compensating for network latency, and returning to previous states when the need arises. They distinguish backapps as web **APP**lications as capable of moving **BACK**ward to previous states, as they are following the user's path forward to new ones.

### Learn more. ###
Visit **[backappjs.org](http://backappjs.org)**.
