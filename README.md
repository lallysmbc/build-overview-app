# react-boilerplate
Basic React setup for anyone who's followed a couple of tutorials and wants to start a React project from scratch ... but doesn't want to have to deal with all the manual setup.

Note: these docs assume you know basic React, just not what behind-the-scenes magic turns your JSX into JavaScript, how to set up a development server yourself, what it is that Webpack actually does etc.

Note 2: these docs assume you're using Yarn as your package manager. If you're not using it yet then get it [here](https://yarnpkg.com/lang/en/docs/install/).

## Getting started
```
yarn install
yarn start
```

`yarn install` installs all the project's dependencies and `yarn start` runs the development server, which you can access in your browser at `http://localhost:8080`. The page will automatically update to reflect changes in your code. 

To start building your application, just change what the App component's `render()` function returns in `src/components/App.js`.

```
yarn build
```

This command will create a `dist` folder with an `index.html` and an `index_bundle.js`, ready to ship. You're production-ready!


## OK, I want to know a bit more about how this works
Just like everybody else, we're using Webpack to bundle our code into one JavaScript file. `webpack.config.js` configures Webpack to start at `index.js` and follow its dependencies all the way through your codebase, compiling any files with a .js or .jsx extension to browser-friendly JavaScript (including any you've written using ES6) and any files with a .scss extension into CSS, then package it all up in one file. We're also using the `HtmlWebpackPlugin` to have Webpack automatically add a `<script>` tag to your index.html's `body`, linking up your newly bundled JavaScript. All that is what happens when you run `yarn build`.

`yarn start`, on the other hand, uses `webpack-dev-server` to spin up a Node server at `http://localhost:8080` from which to serve your application, re-bundling your code and updating the page whenever you save changes.
