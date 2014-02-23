[backapp](http://toomanydaves.github.io/backapp)
================================================

> An extensible, single-page application framework for domain-driven design

### Getting started ###
(with [node/npm]() already installed)

`npm install -g backapp`

## backapp? ##

The name, **backapp**, i.e. *Backbone-Application*, reflects a key point about the state of this project at its inception (which also happens to be its current state): the functionality provided by **[Backbone.js](http://backbonejs.org)** provides the foundation upon which the implementation of this project currently rests.

Of course, as every developer knows, state changes; and yet, regardless of whether or not the **Backbone** source is among those listed as dependencies, the fact will remain that this project would not exist were it not for **Backbone**.

In *its* current state, **Backbone** provides no *application*, something reflective of a central design philosophy of **Backbone**, Don't try to do too much, which, it's worth mentioning, has also, in no small part, been responsible for **Backbone**'s continued relevance, even after wave after wave of alternative solutions.

Indeed, that which **Backbone** sets out to do, it does well – mainly provide base `View`, `Model` and `Collection` classes that support data-binding and functional programming (the latter of which is accomplished by **Backbone's** own and only dependency, **[underscore.js](http://underscorejs.org)**. **backapp* takes these features as given, and proceeds from there.

In a second, and equally if not more important sense, the name, *backapp*, refers to this project's own key feature, what it intends on contributing to the enterprise of application development in JavaScript. *backapp* is a reference to building *app*lications that are as capable of moving *back*ward through their previous states, as they are following the user's path forward to new ones. 

To accomplish this, aside from `Application`, **backapp** introduces two important feature implementations, `State` and `PersistenceStrategy`. Among other things, the functionality of these classes is crucial for **backapps** to exhibit **optimistic behavior** in their user experience with the capability to easily **return to any previous state** should the need arise. 

Other important implementation details of **backapp** concern its integrated support for **Test-Driven Development**, **Domain-Driven Design** and **modularity**.

Visit [backappjs.org](http://backappjs.org) to learn more.
