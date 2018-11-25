# react-console-colors
Adding colors to console.logs inside browser inspector.
=========

I made this to make it easier/quicker to find console logs during development.

This adds methods using prototype, so requiring it once on entry file will make it globally accessible.

## Installation

  `npm install react-console-colors -D`

##Limitations (colors):

    Types supported: String, Number, {}, []

    Support for only one argument, working on handling more

Colors:
```js
.cyan()
.green()
.red()
.black()
.yellow()
.magenta()
```

## Usage
```js
require('react-console-colors');

let string = 'Hello World';
let array = ['Hello World'];
let number = 12345;
let object = {
  name: 'hello',
  type: 'world'
}

string.cyan()
array.red()
number.magenta()
object.green()
```

##Limitations(any):

    Types supported: String, Number

    Support for only one argument & one style option, see usage example:

## Usage for console.any
```js
var style = [
  'background-color: cornflowerblue',
  'font-size: 30px',
  'color: white',
  'border-radius: 50px'
];

console.any('hello world',style);
```


<img src="./img.png" width="450"/>



FYI: For NodeJS color output you can find a much better package called 'colors'