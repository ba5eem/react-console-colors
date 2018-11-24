# react-console-colors
Adding colors to console.logs inside browser inspector.
=========

I made this because I wanted to help my students find their console logs a little easier.

This adds methods to the console object, so requiring it once on entry file will make it globally accessible.

## Installation

  `npm install react-console-colors -D`

##Limitations (colors):

    Types supported: String, Number, {}, []

    Support for only one argument, working on handling more

Colors:
```js
console.cyan(argument)
console.red(argument)
console.green(argument)
console.yellow(argument)
console.black(argument)
console.magenta(argument)
```

## Usage

    require('react-console-colors');

    console.cyan(this.props);

##Limitations(any):

    Types supported: String, Number

    Support for only one argument & one style option, see usage example:

## Usage for console.any

    var style = [
      'background-color: cornflowerblue',
      'font-size: 30px',
      'color: white',
      'border-radius: 50px'
    ];

    console.any('hello world',style);


<img src="./img.png" width="450"/>



FYI: For NodeJS color output you can find a much better package called 'colors'