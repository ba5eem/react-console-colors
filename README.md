# react-console-colors
Adding colors to console.logs inside browser inspector.
=========

I made this because I wanted to make it easier for finding my console logs in the browser, without having to use a bunch of random text symbols. I feel like this is a cleaner approach.

This is adding methods to the console object, so requiring it once on entry file will make it globally accessible.

Colors supported(types):
```js
console.cyan('string', Number, {}, [])
console.red('string', Number, {}, [])
console.green('string', Number, {}, [])
console.yellow('string', Number, {}, [])
console.black('string', Number, {}, [])
console.magenta('string', Number, {}, [])
```

## Installation

  `npm install react-console-colors`

## Usage

    require('react-console-colors');

    console.cyan('your text here');



FYI: For NodeJS color output you can find a much better package called 'colors'