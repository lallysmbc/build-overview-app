# react-boilerplate
Basic React setup with Yarn, Webpack, Babel, SCSS and ES6

## Basics
Don't worry about index.html. It has a <div> with id 'root', which is where index.js tells React to render your app. Webpack even adds the bundled JavaScript to the html for you so you don't even need a <script> tag.

To start, write new components in src/components/ and add them to your App component.

## SCSS
This project supports SCSS out of the box using Webpack's style-loader, css-loader and scss-loader (along with Node Sass). Any .scss files in the dependency tree from your entry point (defaulted to index.js in the root folder) will be compiled to css and included in your bundled JS. It just works.

## ES6
You get ES6 support for free too. Webpack compiles it to browser-friendly JavaScript using Babel before bundling. 


## Scripts

### yarn start
Runs Webpack-dev-server at localhost port 8080. Webpack will re-compile the app when you save a file.


### yarn build
Creates a dist directory in the root of the project with index.html and bundled JS.


