# Bundle the project into single js file, install browserify (others option is webpack, Grunt, Gulp). 

$ npm install --save-dev tsify
$ browserify src/index.ts -p [ tsify --noImplicitAny ] > dist/bundle.js

# Run
$ node dist/bundle.js