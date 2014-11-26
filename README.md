BackThatDomainApp
================================================
> BackThatDomainApp, or [BackApp](http://toomanydaves.github.io/backapp) for short, is a framework for developing extensible, single-page web applications using domain-driven design.

### Jump right in. ###
`npm install -g backapp && backapp --help`

### Wait a sec! Back app!? Say what? ###
Judging by its name and the fact that it's an open-source library for the web, it would be reasonable to assume that *Back*-*App* is a framework for creating *app*-lications in [*Back*-bone.js](http://backbonejs.org), like, say, [Backbone.Marionette](http://) is.

But it's not. At least, it's not a framework for *Backbone* applications.

Although, it originally grew out of Backbone, BackApp no longer has any dependency on Backbone.

*Back*-*App* could also be interpreted as a tool for building *app*-s that go *back*-wards, which, in fact, it is -- because they have been designed with the capasity to rollback operations intelligently, backApps are as capable moving back to previous states, as they are following the user's interaction forward to new ones.

### OK, so at least *Back* is more or less clear. What's with *App*? ###
This is the heart of what BackApp brings to the table. An Application class (BackApp.js), as well as a Router and a FrontController class, a ViewController and a ViewModel class, and a Resource and a ResourceCollection class.
There's no View class because in traditional MVC, views are best served lean, i.e. dumb, and should not be class-like things, but instead more like templates, here HTML nodes, CSS styles and JavaScript widgets (and in the future, web components).

The Resource and ResourceCollection are the interface to persistance over a RESTful API. They bear some similarity to Backbone's Model and Collection classes, but have a slightly smaller, more defined scope -- to represent resources associated with specific URLs and handle persistance and the syncing of data.

There are a couple of dependencies, [requirejs](http://) for asynchronous module loading, [lodash](http://) for functional programming utilities, [something](http://) for events, [something](http://) for promises, [something](http://) for HTML integration and [something](http://) for HTTP.

### Back app, you said REST. What was that about DDD? ###
Well, you could, in theory, use the BackApp classes however you want, but you'd be missing out on the ability of domain-driven design to tackle the complexity at the heart of software development. By isolating all your framework code, you're free to focus on your domain, and that's good because your domain is what makes your software, your software. And that's where domain-driven design comes in.

There's a pattern.

Your application's domain is divided into bounded contexts. Each bounded context consists of a Router and a RouteController, services and resources. The services should be defined by your domain; they will often correspond to RESTful endpoints, however, while REST is confined to the mapping of a specific set of resources to a generic set of actions, a service-oriented architecture can go one domain-driven step further and map to a specific set of actions.

For example, whereas an action at the persistance layer (REST) would look something like PUT written-exams/{id}/start-time, an action at the service layer can be more explicit, like startWrittenExam/.

To flesh out the example, this could be part of an assessment context of a eLearning application, so the full path to the service might look like /eLearningApp/domain/assessment/services/startWrittenExam and to the resource, /eLearningApp/domain/resources/writtenExam.

### So what's in a service? ###
At the minimum, ViewController.js, ViewModel.js and view.html files.

### What about the page router and controller? ###
I'm glad you asked!

To be continued...

Visit **[backappjs.org](http://backappjs.org)** to learn more.
