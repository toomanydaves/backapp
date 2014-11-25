BackThatDomainApp
================================================
> BackThatDomainApp, or [BackApp](http://toomanydaves.github.io/backapp) for short, is a framework for developing extensible, single-page web applications using domain-driven design.

### Jump right in. ###
`npm install -g backapp && backapp --help`

### Wait a sec! Back app!? How 'bout some more info? ###
Judging by its name and the fact that it's an open-source JavaScript library, it would be reasonable to assume that "Back"-"App" is a framework for creating "app"lications in ["Back"bone.js](http://backbonejs.org), like, say, [Backbone.Marionette](http://) is.

But it's not. At least, it's not a framework for "backbone applications".

Although, it originally grew out of Backbone, BackApp no longer relies on it.

"Back"-"App" could also be interpreted as a tool for building "app"s that go "back"wards, which, in fact, it is -- because they have been designed with the capasity to rollback operations intelligently, backApps are as capable moving back to previous states, as they are following the user's interaction forward to new ones.

### But what was that about domain-driven design? ###
We'll get to that later.

### OK, so at least "Back" is more or less clear. What's with "App"? ###
This is the heart of what BackApp brings to the table. An Application class (BackApp.js), as well as a Router and a RouteController class, a ViewController and a ViewModel class, and a ModelResource and a CollectionResource class.

There's no View class because a view is supposed to be dumb and consist of non-class-like things, like HTML elements, CSS styles and JavaScript widgets (and in the future, web components).

The ModelResource and CollectionResource are the interface to the persistance layer in the form of a RESTful API. They bear some similarity to Backbone's Model and Collection classes, but have a more defined scope -- to map to resources -- and a somewhat different API.

There are a couple of dependencies, [requirejs](http://) for asynchronous module loading, [lodash](http://) for functional programming utilities, [something](http://) for events, [something](http://) for promises, [something](http://) for HTML integration and [something](http://) for HTTP.

### Back app, you said REST. What about DDD? ###
Well, you could, in theory, use the BackApp classes however you want, but you'd be missing out on the ability of domain-driven design to tackle the complexity at the heart of software development. (And also the fun code generators that allow this framework to be used with npm.)

The point is, by isolating all your framework code, you're free to focus on your domain, and that's good because your domain is what makes your software, your software. And that's where domain-driven design comes in.

There's a pattern.

Your application's domain is divided into bounded contexts. Each bounded context consists of a PageRouter and a PageController, services and resources. These services should be defined by your domain; they will often correspond to RESTful endpoints, however, while REST is confined to the mapping of a specific set of resources to a generic set of actions, a service-oriented architecture can go one domain-driven step further and map to a specific set of actions.

For example, whereas an action at the persistance layer (REST) would look something like PUT written-exams/{id}/start-time, an action at the service layer can be more explicit, like startWrittenExam/.

To flesh out the example, this could be part of the assessment context of a eLearning application, so the full path to the service might look like /eLearningApp/domain/assessment/services/startWrittenExam and to the resource, /eLearningApp/domain/resources/writtenExam.

### So what's in a service? ###
At the minimum, ViewController.js, ViewModel.js and view.html files.

### What about the page router and controller? ###
I'm glad you asked!


it is built atop the implementation of The Model/View([Observer](http://en.wikipedia.org/wiki/Observer_pattern)) Pattern provided by **[BackboneJS](http://backbonejs.org)** (And it's a tool for building applications). Of course, as any developer knows, state can change; yet were this project to stop depending on **Backbone** for this core functionality, the name **Backapp** would remain apt, and fortunately, for more than historical reasons.

In *its* current state, **Backbone** provides no **Application**, something reflective of its commendable adherence to the design principle, **Try not to do too much**, which, it's worth mentioning, has in no small part been responsible for **Backbone's** continued popularity. Indeed, that which **Backbone** sets out to do, it does well – mainly provide base `View`, `Model` and `Collection` classes that support data-binding, in addition to functional programming abstractions (the latter of which is mainly accomplished by the inclusion of **Backbone's** own and only dependency, **[UnderscoreJS](http://underscorejs.org)**). 

And that's a good start.

**Backapp** assumes these features and begins from there. In this context, the name, **Backapp**, refers to this project's key feature, what it has to contribute to the enterprise of application development in JavaScript - building **App**lications that are as capable of moving **Back**ward through their previous states, as they are following the user's path forward to new ones. 

To accomplish this, aside from `Application`, **Backapp** introduces two important feature implementations, `State` and `PersistenceStrategy`. The functionality of these classes is crucial for **backapps** to be able to implement optimistic behavior/latency compensation in their views with the capability to easily return to any previous state should the need arise. 

Similar to **Backbone's** inclusion of functional programming styles vis-a-vis **Underscore**, the core functionality of **Backapp** is complemented by integrated support for **Test-Driven Development**, **Domain-Driven Design** and **modularity**.

Visit **[backappjs.org](http://backappjs.org)** to learn more.
