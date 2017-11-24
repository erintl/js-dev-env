# JavaScript Development Environment
This project serves as a template for bootstrapping a JavaScript development environment.

## EditorConfig
[EditorConfig](https://www.editorconfig.org): A default EditorConfig file ensures consistency across environments.

## Package Mangment
[npm](https://www.npmjs.com/): Node Package Manager

### Security
[Node Security Platform](https://nodesecurity.io/)  
`> nsp check`

## Development Server
* Express
* Live Server
* Browsersync

### Share Your Work
* Localtunnel

## Automation
* npm scripts

## Transpiling
* Babel
* TypeScript

## Bundling
* Webpack
  * Use ES6 modules
  * Source maps for debugging

## Linting
* ESLint
  * Configuration file format - .eslintrc.json
  * File watching
    * eslint-loader - relints all files upon save
    * eslint-watch - ESLint wrapper that adds file watch
    * babel-eslint - experimental features

## Testing
* Framework - Mocha
  * Assertion library - Chai
  * Helper library
    * JSDOM
    * Cheerio

# Continuous Integration
* Travis CI

# HTTP
* HTTP API - Fetch
* Selective Polyfill - [polyfill.io](https://polyfill.io/v2/docs/)
* Mock HTTP
  * JSON Schema Faker
    * faker.js
    * chance.js
    * randexp.js
  * JSON Server

# Production Build Setup
* Minification
* Sourcemaps
* Dynamic HTML
  * html-webpack-plugin
* Cache busting
  * based on js expiration time of web server (far future headers)
  * use `webpack-md5-hash` package.
* Bundle splitting
  * Split by page or by libraries
* Extract and minify CSS
  * use `extract-text-webpack-plugin`.
* Error logging
  * Track.js
* Templating
  * embeddedJS
