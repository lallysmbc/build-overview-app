# react-boilerplate
Basic React setup for anyone who's followed a couple of tutorials and wants to start a React project from scratch ... but doesn't want to have to deal with all the manual setup.

Note: these docs assume you know basic React, just not what behind-the-scenes magic turns your JSX into JavaScript, how to set up a development server yourself, what it is that Webpack actually does, etc.

Note 2: these docs assume you're using Yarn as your package manager. If you're not using it yet then get it [here](https://yarnpkg.com/lang/en/docs/install/).

## Getting started
```
yarn install
yarn start
```

`yarn install` installs all the project's dependencies and `yarn start` runs the development server, which you can access in your browser at `http://localhost:8080`. The page will automatically update to reflect changes in your code. 

To start building your application, just change what the App component's `render()` function returns in `src/components/App.jsx`.

```
yarn build
```

This command will create a `dist` folder with an `index.html` and an `index_bundle.js`, ready to ship. You're production-ready!


## OK, I want to know a bit more about how this works
Just like everybody else, we're using Webpack to bundle our code into one JavaScript file. `webpack.config.js` configures Webpack to start at `index.js` and follow its dependencies all the way through your codebase, compiling any files with a .js or .jsx extension to browser-friendly JavaScript and any files with a .scss extension into CSS, then package it all up in one file.

Webpack uses Babel to translate .js and .jsx files, which we've set up in `.babelrc` to translate both JSX and ES6 JavaScript.

We're also using the `HtmlWebpackPlugin` to have Webpack automatically add a `<script>` tag to your index.html's `body`, linking up your newly bundled JavaScript. All that is what happens when you run `yarn build`.

`yarn start`, on the other hand, uses `webpack-dev-server` to spin up a Node server at `http://localhost:8080` from which to serve your application, re-bundling your code and updating the page whenever you save changes.

## Files and folders out of the box
You're welcome to change the file structure as you see fit, but what you get out of the box is a simple structure that should suffice for a simple application.

All your code goes inside `src` (pronounced "source"). `index.html` and `index.js` sit right inside `src`. `index.html` is the webpage that your app will be rendered in and `index.js` is the JavaScript that does the rendering.

`src/components/` is where you'll keep your React components. So far you just have the one, named `App`, which just puts "Hello World!" on the page. Convention is to have `App` render your other components, like this:

```javascript
export default class App extends Component {
    render() {
        return (
            <MyNewComponent />
        )
    }
}
```

`src/sass/` comes with one file, `style.scss`, which gets included at the top of `index.js`. You can write all your SCSS in the one file, or add new files for more modular styling.

If you take the latter approach, be sure to include your SCSS files in the files containing the React components they're needed for with:

```javascript
import 'path/to/your/file.scss'
```

