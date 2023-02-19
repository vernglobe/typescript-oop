# Bundle the project into single js file, install browserify (others option is webpack, Grunt, Gulp). Refer to https://www.tutorialsteacher.com/typescript/typescript-build-tools

$ npm install tsify
$ browserify src/index.ts -p [ tsify --noImplicitAny ] > dist/bundle.js

# Run
$ node dist/bundle.js