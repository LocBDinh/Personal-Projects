# Bootstrap 5 Guide

## What is Bootstrap?

Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation and other interface components. (Source: Wikipedia)

## Why use it?

Bootstrap 5 offers the following benefits:

- Ease of Use: It's simple and quick to get started with Bootstrap.
- Compatibility: You can use it alongside CSS, SASS, and more.
- Responsiveness: Bootstrap helps create responsive websites, adapting to various devices and screen sizes.
- Rapid Development: Utilize pre-designed code blocks for faster development.
- Customization: Customize Bootstrap to match your design needs.
- Community Support: A large support community provides assistance.
- ntegration: Easily integrate Bootstrap with various platforms and frameworks.
Feature Rich: Bootstrap offers numerous pre-styled components for use.

## Bootstrap 5 Installation in HTML

For our bootcamp, you can skip to the [installation with React](#bootstrap-5-installation-in-react). However, in projects using vanilla JS, there are several ways to install Bootstrap 5:

1. Using npm:
`npm install bootstrap`
2. Through CDN
   1. Add the following links to your HTML file's <head> tag and before the closing </body> tag:

    ``` HTML
    <link rel="stylesheet" href="%09https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    ```

3. Download source code for local use. The project structure should look like this:

```markdown
1. css (folder)
    - bootstrap.css
    - bootstrap.min.css
2. js (folder)
    - bootstrap.bundle.js
    - bootstrap.bundle.min.js
    - bootstrap.js
    - bootstrap.min.js
3. index.html
```

## Bootstrap 5 Installation in React

For React projects, install the Bootstrap CSS file via npm: `npm install bootstrap`

Import Bootstrap CSS (and optionally Bootstrap theme CSS) at the beginning of your src/index.js file: 

```JavaScript
import 'bootstrap/dist/css/bootstrap.css';
```

Alternatively, you can use libraries like [React Bootstrap](https://react-bootstrap.netlify.com/) or [reactstrap](https://reactstrap.github.io/) for full compatibility with Bootstrap 5.

## Differences between Bootstrap 4 and Bootstrap 5

1. Grid System: Bootstrap 5 uses a flexbox grid system, while Bootstrap 4 uses floats.
2. Units: Bootstrap 4 uses pixels (px) as units, whereas Bootstrap 5 uses rem units.

For more details, refer to the [official migration guide](https://getbootstrap.com/docs/5.3/migration/).

## Major Features of Bootstrap 5

### Grid System

Bootstrap's grid system helps create responsive layouts using containers, rows, and columns. The grid system is based on a 12-column layout, with various breakpoints for different screen sizes. The grid system is responsive, meaning it automatically adjusts to fit the screen size of the device.

```HTML
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
</div>
```

### Buttons

Bootstrap provides various button classes for styling buttons. You can use these with \<button>, \<a>, or \<input> elements.
  
```HTML
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>
<button type="button" class="btn btn-link">Link</button>
```

You can replace the default classes with the btn-outline- ones to remove all background images and colors on any button.
Size: pass in btn-sm btn-lg for small and large buttons.

### Navbar

Bootstrap's navbar component helps create responsive navigation bars.

```HTML
<nav class="navbar navbar-expand-lg fixed-top ">
   <a class="navbar-brand" href="#">Home</a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
     <ul class="navbar-nav mr-4">
       
       <li class="nav-item">
         <a class="nav-link" href="#">About</a>
       </li>
       <li class="nav-item">
         <a class="nav-link " href="#">Portfolio</a>
       </li>
       <li class="nav-item">
         <a class="nav-link " href="#">Team</a>
       </li>
       <li class="nav-item">
         <a class="nav-link " href="#">Post</a>
       </li>
       <li class="nav-item">
         <a class="nav-link " href="#">Contact</a>
       </li>
     </ul>
     
   </div>
</nav>
```

Add css to define your own style.

```CSS
.navbar{
 background:#F97300;
}
.nav-link , .navbar-brand{
 color: #f4f4f4;
 cursor: pointer;
}
.nav-link{
 margin-right: 1em !important;
}
.nav-link:hover{
 background: #f4f4f4;
 color: #f97300;
}
.navbar-collapse{
 justify-content: flex-end;
}
.navbar-toggler{
  background:#fff !important;
}
```

### Spacing

If you can, always use bootstrap's classes for dynamic spacing instead of using CSS to space pixel by pixel.

The classes are named using the format {property}{sides}-{size} for xs and {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.

- m-margin
- p-padding
- t - for classes that set margin-top or padding-top
- b - for classes that set margin-bottom or padding-bottom
- l - for classes that set margin-left or padding-left
- r - for classes that set margin-right or padding-right
- x - for classes that set both -left and -right
- y - for classes that set both -top and -bottom
- blank - for classes that set a margin or padding on all 4 sides of the element
- 0 - for classes that eliminate the margin or padding by setting it to 0
- 1 - (by default) for classes that set the margin or padding to $spacer * .25
- 2 - (by default) for classes that set the margin or padding to $spacer * .5
- 3 - (by default) for classes that set the margin or padding to $spacer
- 4 - (by default) for classes that set the margin or padding to $spacer * 1.5
- 5 - (by default) for classes that set the margin or padding to $spacer * 3
- auto - for classes that set the margin to auto

For full documentation, refer to the [official Bootstrap 5 documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/).

### Customization

Customize Bootstrap by creating a separate CSS file to override default styles. Ensure your custom CSS selectors match Bootstrap's to override styles effectively.

Sometimes you might need to customize bootstrap because:

- You want to change the existing Bootstrap styles such as colors, fonts, or borders 
- Change the Bootstrap grid layout such as breakpoints or width
- Extend Bootstrap classes with new custom classes (ie: btn-custom)

#### HOW: CSS override

This method works by defining CSS rules that match Bootstrap’s CSS rules which creates a style “override”. This method is easy to maintain, and allows you to upgrade to future minor versions of Bootstrap without breaking your customized styles.

In CSS, order matters. The last definition of a CSS rule will override any previously defined rules where the CSS selectors & properties match. This is how the CSS override customization method works. Our CSS customizations are placed in a separate custom.css file, so that the bootstrap.css remains unmodified. The reference to the custom.css follows after the bootstrap.css which make the overrides work.

Like this:

```HTML
<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="custom.css">
```

When making customizations, you need to understand CSS Specificity. Overrides in the custom.css need to use selectors that are as specific as the bootstrap.css.

For example:

Here’s the CSS for Bootstrap 4 nav-link shown on a dark background Navbar:

```CSS
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}
```

My selector in custom.css should exactly match the Bootstrap selector:

```CSS
.navbar-dark .navbar-nav .nav-link {
  color: silver;
}
```

## Special notes

**Bootstrap will not do everything for you**, but it provides a set of reasonable defaults to choose from and it will help developers to concentrate more on the development work than worrying about design, and help them to get a good looking website up and running quickly. It allows fast prototyping, but it is not limiting developers on the way.

**If you are thinking that if you are using Bootstrap you will not need to know CSS, you are very wrong.** Any front-end developer needs to learn CSS and HTML5. Bootstrap is removing a lot of tricky CSS parts from developers shoulders and it is offering basic default styling, but you still need to understand CSS. Bootstrap is not meant to teach you CSS, but it can help if you want. Examining source code in LESS or SASS is a great starting point.

**Do not modify the bootstrap.css file.** If you make changes to the bootstrap.css file, things will get complicated very fast. The whole design will break when you want to upgrade Bootstrap files. You can overwrite in your own stylesheet default bootstrap colors, styles, margins, paddings, everything. There is no need to touch the bootstrap.css stylesheet at all.

Bootstrap is comprehensive. It offers a lot of UI components, HTML and CSS design templates, and JavaScript plugins. But please, be selective. **You don’t have to use every feature of Bootstrap.**
