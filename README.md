# TODO

This project provide a Todo list where user can create, delete and set as completed tasks. Besides, the list can be filtered by either completed or pending tasks. 

```json5
"scripts" : {
"build": "webpack --config webpack.prod.js",
"build:dev": "webpack --config webpack.config.js",
"dev": "webpack serve --config webpack.config.js --open --port=8080"
},
```

### dev:
it starts the application in dev mode by using the http protocol.  
``> npm run dev``

### build:
it builds the application optimized for production, that means: 
* it minimizes the code.
* it copies all the assets and global css files.
* it hashes the file name for avoiding the code being cached.
* it converts the code to ES5 to allow the application to be run in most of the web browsers.

### build:dev:
it builds the application in dev mode, that means: 
* it doest minimize the code.
* it copies all the assets and global css files.
* it doesn't convert the code to ES5.

