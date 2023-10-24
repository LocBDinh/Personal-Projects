
# Overview of Different Architecture

## Model-View-Controller (MVC) Architecture

A common design pattern used for developing user interfaces is the **model-view-controller** architecture. As the name suggests, in this architecture the application is broken up into three main components:

- The **model** is where the application's main data objects are stored.
- The **view** presents models to the user, and allows the user to interact with the models
- The **controller** interfaces between the model and the view
  - it updates models according to input provided by the user in the view
  - it updates the view when a model changes

The MVC concept has many variations and often does not _exactly_ follow the pattern described above. You can take a look at [this page](https://developer.chrome.com/apps/app_frameworks) for more information, or simply go a Google search for MVC architecture.

## Component-Based Architecture (CBA)

[**Component-Based-Architecture**](https://medium.com/@dan.shapiro1210/understanding-component-based-architecture-3ff48ec0c238) is a newer architecture design method creating the  user interface (UI) of web applications. The goal is to encapsulate individual pieces of a larger UI (aka components) into self-sustaining, independent micro-systems. This architecture was created and popularized by Meta as a means of maximize the functionality and performance of their newsfeed.

You can think of a component as a small feature that makes up a piece of the user interface (e.g., buttons, newsfeeds, blogs, comments). Each of these components exist within the same space, yet interact independently of one another. Components have their own structure, their own methods and their own APIs. Components are also reusable and can be “pasted” into interfaces at will. The independent nature of components allows for developers to create a UI with many moving parts.

Meta developers based component based architecture off of the concept of [**AJAX**](https://www.w3schools.com/xml/ajax_intro.asp) request, in which call to the server are made directly from the client-side, allowing for the [**DOM**](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (Document Object Model) to be dynamically uploaded without the need to refresh the page.  Components each have their own interfaces that can make calls to the server and update their interfaces. Because components are independent, one component can refresh without affecting other components or the UI as a whole. Additional resources: [**Good DOM Explanation with pictures**](https://css-tricks.com/dom/) and [**DOM as defined by W3C**](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html).

React.js, specifically, handles components in an extremely performance focused way. React.js uses something called a [**virtual DOM**](https://programmingwithmosh.com/react/react-virtual-dom-explained/) which uses a “diffing” algorithm to detect changes to a component and only render those changes, as opposed to re-rendering the entire component.

*Difference Between MVC and CBA*
CBA also requires that all methods and APIs pertaining to a single component exist within that component’s structure, a JavaScript class.

MVC splits responsibilities of an application horizontally, e.g., separates structure, helper methods, and routing into different levels of the application. This results in a multi layered horizontal architecture. On the other hand, CBA splits them vertically, e.g., components contain all design, logic, and helper methods within the within a single class and the same level of the architecture (generally the view).  This means that developers don’t have to spend much time trying to find which functions pertain to which parts of an application’s UI.

The purpose of MVC is to ensure that each level of an application has its own separate responsibility, while the purpose of CBA is to encapsulate all of those responsibilities within one space.

*Beware of Issues with CBA*
One of CBA’s most glaring issues is a propensity towards over-engineering. While CBA encourages reusability and single-responsibility, it can often lead to bloated and polluted views. When using many components, there is the possibility that readability might actually become degraded.

In the case of React.js, the library was created with the intention of being used in applications wherever needed. Essentially, you can “sprinkle” React components across several parts of your UI. However, many developers treat React.js as a framework and engineer every. single. aspect of their UI as a component. This is unnecessary and self-indulgent. CBA should only be use in specific instances and does not need to dictate the entire structure of your application.

Thus, only use React Components for implementing dynamic functionality when needed in your application.
