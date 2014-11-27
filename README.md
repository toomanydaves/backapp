BackThatDomainApp
================================================
> BackThatDomainApp, or [BackApp](http://toomanydaves.github.io/backapp) for short, is a framework for developing extensible, single-page web applications using domain-driven design.

### Jump right in. ###
`npm install -g backapp && backapp --help`

### Wait a sec! Back app!? Say what? ###
Judging by its name and the fact that it's an open-source library for the web, you could be forgiven for assuming that *Back*-*App* is a framework for creating *app*-lications in [*Back*-bone.js](http://backbonejs.org), like, say, [Backbone.Marionette](http://) is.

But it's not. At least, it's not a framework for *Backbone* applications.

Although, it did originally grow out of work done using Backbone, BackApp has broken with Backbone's way of dividing up the world in important ways and does not include Backbone as a dependency.

*Back*-*App* could also be the name of a tool for building *app*-s that go *back*-wards, which, in fact, it is. Because they have been designed with the capasity to rollback operations intelligently, backApps are as capable moving back to previous states, as they are following the user's interaction forward to new ones.

### Wait, forget about *Back* for a second. What's with *App*? ###
This is the heart of what BackApp brings to the table. An Application class, as well as a Router and a FrontController class, a ViewController and a ViewModel class, and a Resource and a ResourceCollection class.

You'll notice there's no View class. In traditional MVC, views are best served lean, i.e. dumb, and should not be class-like things, but instead more like templates; in the current state of BackApp development they are a combination of HTML fragments, CSS styles and JavaScript widgets and binding code (in the future, hopefully, web components).

The Resource and ResourceCollection are the interface to persistance over a RESTful API. They bear some similarity to Backbone's Model and Collection classes, but have a smaller, more defined scope -- to encapsulate all read and write requests over HTTP through the abstraction of a resource or resource collection.

There are a couple of dependencies, [requirejs](http://) for asynchronous module loading, [lodash](http://) for functional programming utilities, and [jQuery](http://) for events, promises, HTML integration and HTTP.

### Back app, you said REST. What about DDD? ###
Well, you could, in theory, use the BackApp classes however you want, but you'd be missing out on the ability of domain-driven design to tackle the complexity at the heart of software. By isolating all your framework code, you're free to focus on your domain, and that's good because your domain is what makes your software, your software. And that's where domain-driven design comes in.

There's a pattern.

Your application's domain is divided into bounded contexts. Each bounded context consists of a Router and a FrontController, services/ and resources/. The resources are defined by the API(s) you're working with. The services should be defined by totally by your domain and be decoupled from each other. Depending on how well structured the server-side API is that you have to work with, they may often match up to its endpoints, but they don't have to, and they can at least be more domain-specific because while REST is confined to the mapping of a specific set of resources to a generic set of actions, a service-oriented architecture can go one domain-driven step further and map directly to a specific set of actions. They should align most closely with the user stories and BDD features.

For example, whereas an action at the persistance layer (REST) would look something like PUT needs-analyses/{id}, an action at the service layer should be action-focused (i.e. start with a verb, in the imperative form), more explicit and more domain-driven (i.e. use one not limited to put, patch, get or delete), for example, fillOutNeedsAnalysis/.

To relate this back to BDD, there could be a fillOutNeedsAnalysis.feature, and to user stories, an "As a student, I want to fill out a needs analysis in order to complete an overall assessment. To relate this then back to bounded contexts, this might have been part of an assessment context of a eLearning application, so the full path to the service might have looked like /eLearningApp/domain/assessment/services/fillOutNeedsAnalysis/ and to the resource, /eLearningApp/domain/assessment/resources/needsAnalysis/. Calling resources/needsAnalysis/Model.save() would have generated the PUT request from the example above.

### So what's in a service? ###
At the minimum, ViewController.js, ViewModel.js and view.html files.

### What about the page router and controller? ###
I'm glad you asked!

To be continued...

Visit **[backappjs.org](http://backappjs.org)** to learn more.
