[BackappJS](http://toomanydaves.github.io/backapp)
================================================
> An extensible, single-page JavaScript application framework for domain-driven design.

### Jump right in. ###
`npm install -g backapp && backapp --help`

### Backapp? ###
The name **Backapp** – as shorthand for **Back**-*bone* **App**-*lication* – derives from the current state of this project: it is built atop the implementation of the Model/View([Observer](http://en.wikipedia.org/wiki/Observer_pattern)) Pattern provided by **[BackboneJS](http://backbonejs.org)** (And it's a tool for building applications). Of course, as any developer knows, state can change; yet were this project to stop depending on **Backbone's** particular implementation of this core functionality, the name **backapp** would remain apt, and fortunately, for more than historical reasons.

In *its* current state, **Backbone** provides no *Application*, something reflective of its commendable adherence to the design principle, *Try not to do too much*, which, it's worth mentioning, has in no small part been responsible for **Backbone's** continued popularity. Indeed, that which **Backbone** sets out to do, it does well – mainly provide base `View`, `Model` and `Collection` classes that support data-binding, in addition to functional programming abstractions (the latter of which is mainly accomplished by the inclusion of **Backbone's** own and only dependency, **[UnderscoreJS](http://underscorejs.org)**). 

And that's a good start.

**Backapp** assumes these features and begins from there. In this context, the name, **Backapp**, refers to this project's key feature, what it has to contribute to the enterprise of application development in JavaScript - building **app**lications that are as capable of moving **back**ward through their previous states, as they are following the user's path forward to new ones. 

To accomplish this, aside from `Application`, **Backapp** introduces two important feature implementations, `State` and `PersistenceStrategy`. The functionality of these classes is crucial for **backapps** to be able to implement **optimistic behavior**/**latency compensation** in their user experience with the capability to easily **return to any previous state** should the need arise. In **Backapp**, this understanding of the core functionality of what an application should be able to do is complemented by integrated support for **Test-Driven Development**, **Domain-Driven Design** and **modularity**.

Visit [backappjs.org](http://backappjs.org) to learn more.
