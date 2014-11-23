BackThatDomainApp
================================================
> BackThatDomainApp, or [BackApp](http://toomanydaves.github.io/backapp) for short, is a framework for developing extensible, single-page web applications using domain-driven design.

### Jump right in. ###
`npm install -g backapp && backapp --help`

### Wait a sec! "BackApp"!? How 'bout some more info...###
*BackApp* could be understood as a framework of creating applications in [Backbone](http://backbonejs.org), but that's not the case. However, it was inspired by backbone, but it no longer depends on it. BackApp could also be interpreted as a tool for apps that go backwards, which is in fact true, and also an important feature -- because they can roll back operations intelligently, backapps are as capable moving back to previous states, as they are following the user's interaction forward to new ones.

### What was that about domain-driven design? ###
We'll get to that later.

### OK, so at least "Back" is more or less clear. What's with "App"? ###
This is the heart of what BackApp brings to the table. An Application class, as well as a PageRouter and PageController class, a ViewController and ViewModel class, and a ModelResource and a CollectionResource class. There's no View class because the view itself is assumed to be custom HTML templates, CSS styles and JavaScript widgets.

The ModelResource and CollectionResource are the interface to the persistance layer in the form of a RESTful API. They bear some similarity to Backbone's Model and Collection classes, but have a more defined scope -- to map to resources -- and a different API.

### And now, domain-driven design? ###
Well, you could in theory use the BackApp classes however you want, but you'd be missing out on the ability of domain-driven design to tackle the complexity at the heart of software development. By isolating all your framework code, you're free to focus on your domain, and that's good because your domain is what makes your software, your software. 
### But there's more ###
For example, modules. Each file

the aderives from the current state of this project: it is built atop the implementation of The Model/View([Observer](http://en.wikipedia.org/wiki/Observer_pattern)) Pattern provided by **[BackboneJS](http://backbonejs.org)** (And it's a tool for building applications). Of course, as any developer knows, state can change; yet were this project to stop depending on **Backbone** for this core functionality, the name **Backapp** would remain apt, and fortunately, for more than historical reasons.

In *its* current state, **Backbone** provides no **Application**, something reflective of its commendable adherence to the design principle, **Try not to do too much**, which, it's worth mentioning, has in no small part been responsible for **Backbone's** continued popularity. Indeed, that which **Backbone** sets out to do, it does well – mainly provide base `View`, `Model` and `Collection` classes that support data-binding, in addition to functional programming abstractions (the latter of which is mainly accomplished by the inclusion of **Backbone's** own and only dependency, **[UnderscoreJS](http://underscorejs.org)**). 

And that's a good start.

**Backapp** assumes these features and begins from there. In this context, the name, **Backapp**, refers to this project's key feature, what it has to contribute to the enterprise of application development in JavaScript - building **App**lications that are as capable of moving **Back**ward through their previous states, as they are following the user's path forward to new ones. 

To accomplish this, aside from `Application`, **Backapp** introduces two important feature implementations, `State` and `PersistenceStrategy`. The functionality of these classes is crucial for **backapps** to be able to implement optimistic behavior/latency compensation in their views with the capability to easily return to any previous state should the need arise. 

Similar to **Backbone's** inclusion of functional programming styles vis-a-vis **Underscore**, the core functionality of **Backapp** is complemented by integrated support for **Test-Driven Development**, **Domain-Driven Design** and **modularity**.

Visit **[backappjs.org](http://backappjs.org)** to learn more.
