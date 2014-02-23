[backapp](http://toomanydaves.github.io/backapp)
================================================

> An extensible, single-page application framework for domain-driven design

### Getting started ###
(with [node/npm]() already installed)

`npm install -g backapp`

## backapp? ##

The name, **backapp**, as a shorthand for *Backbone Application*, derives from a central implementation detail of this project at its inception (which, at the present moment, also happens to be its current state): It has been built atop the core MV([Observer](http://en.wikipedia.org/wiki/Observer_pattern)) functionality provided by the **[Backbone.js library](http://backbonejs.org)**.

In *its* current state, **Backbone** provides no *application*, something reflective of its adoption of the design principle to try not to do too much, which, it's worth mentioning, has also, in no small part, been responsible for **Backbone**'s continued popularity.

Indeed, that which **Backbone** sets out to do, it does well – mainly provide base `View`, `Model` and `Collection` classes that support data-binding, in addition to functional programming abstractions (the latter of which being accomplished by **Backbone's** own and only dependency, **[underscore.js](http://underscorejs.org)**).

**backapp** presumes these features , and proceeds from there. Of course, as every developer knows, state changes; yet, even if this project came to stop relying on **Backbone** implementation of this core functionality, the name **backapp** would remain relevant for more than historical reasons.

In a second and equally, if not more important sense, the name, **backapp**, refers to this project's killer app, what it has to contribute to the enterprise of application development in JavaScript. **backapp** is a reference to building **app**lications that are, among other things, as capable of moving **back**ward through their previous states, as they are following the user's path forward to new ones. 

To accomplish this, aside from `Application`, **backapp** introduces two important feature implementations, `State` and `PersistenceStrategy`. The functionality of these classes is crucial for **backapps** to implement **optimistic behavior** in their user experience with the capability to easily **return to any previous state** should the need arise. 

In **backapp**, this understanding of the core functionality of what an application should be able to do is complemented by integrated support for **Test-Driven Development**, **Domain-Driven Design** and **modularity**. Visit [backappjs.org](http://backappjs.org) to learn more.
