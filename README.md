# react-boilerplate
Basic React setup for anyone who's followed a couple of tutorials and wants to start a React project from scratch ... but doesn't want to have to deal with all the manual setup.

Note: these docs assume you know basic React, just not what behind-the-scenes magic compiles your JavaScript, how to set up a development server yourself etc.
Note 2: these docs assume you're using Yarn as your package manager. If you're not using it yet then get it [here](https://yarnpkg.com/lang/en/docs/install/).

## Getting started
```
yarn install
yarn start
```

`yarn install` installs all the project's dependencies and `yarn start` runs the development server, which you can access in your browser at `http://localhost:8080`. Your code will get recompiled when you save your files, so you can just refresh the page in your browser once the server is running. 

To start building your application, just change what the App component's `render()` function returns in `src/components/App.js`.


<!-- ## OK, I want to know a bit more about how this works



## Basics
index.html contains a div with an id of 'root' (and basically nothing else), which is where index.js puts your app, by rendering the App component inside it. All you need to do to start building your own React application with this boilerplate is to go to src/components/App.js and change what the App component's render function returns.

### SCSS
This project supports SCSS out of the box using Webpack's style-loader, css-loader and scss-loader (along with Node Sass). Any .scss files in the dependency tree from your entry point (defaulted to index.js in the root folder) will be compiled to css and included in your bundled JS. It just works.

### ES6
You get ES6 support for free too. Webpack compiles it to browser-friendly JavaScript using Babel before bundling. 


## Scripts

### yarn start
Runs Webpack-dev-server at localhost port 8080. Webpack will re-compile the app when you save a file.


### yarn build
Creates a dist directory in the root of the project with index.html and bundled JS. -->


