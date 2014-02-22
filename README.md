[backapp](http://toomanydaves.github.io/backapp)
================================================

> An extensible, single-page application framework for domain-driven design

`npm install -g backapp`

The name, *backapp*, i.e. Backbone-Application, reflects a key point about the state of this project at its inception – which also happens to be its current state: the functionality provided by [Backbone.js](http://backbonejs.org) provides the foundation upon which the source code of this project rests.

Of course, as every developer knows, state changes; yet, regardless of whether its source will always remain a dependency of future versions of this codebase, the fact will always be true that this project would not exist where it not for [Backbone.js](http://backbonejs.org).

**Backbone** itself provides no *application* - part of a central design philosophy to avoid being monolithic and impose as little as possible on its users, which, it's worth mentioning, has, in no small part, been responsible for Backbone's continued relevance to JavaScript, even after wave after wave of alternative solutions.

It tries and does a few things well – mainly provide a base `View` and `Model` and `Collection` classes that support data-binding and functional programming (the latter, accomplish by Backbone's own and only dependency, [underscore.js](http://underscorejs.org).

The name, *backapp*, however, also refers to a key attribute of this project's own intended contribution to application development in JavaScript, hopefully both in and outside of what is currently considered the province of "Backbone". In this context, *backapp* is a reference to building applications that are as capable of moving backwards through their previous states, as they are following the user's path forward. 

To accomplish this, aside from the `Application` class, **backapp** introduces two important feature implementations, `State` and `PersistenceStrategy`. The functionality of these classes is crucial for **backapps** to show optimistic behavior with the confidence of being able to return to any previous state should the need arise. 

Other important implementation details of **backapp** concern its integrated support for **Test-Driven Development**, **Domain-Driven Design** and **modularity**. Visit [backappjs.org](http://backappjs.org) to learn more.
