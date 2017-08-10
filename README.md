# react-boilerplate
Basic React setup with Yarn, Webpack, Babel, and SCSS support


## Scripts

### yarn start
Runs Webpack-dev-server at localhost port 8080. Webpack will re-compile the app when you save a file.


### yarn build
Creates a dist directory in the root of the project with index.html and bundled JS.

## SCSS
This project supports SCSS out of the box using Webpack's style-loader, css-loader and scss-loader (along with Node Sass). Any .scss files in the dependency tree from your entry point (defaulted to index.js in the root folder) will be compiled to css and included in your bundled JS. It just works.
