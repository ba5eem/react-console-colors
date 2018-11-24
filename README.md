# react-console-colors
Adding colors to console.logs inside browser inspector.
=========

I made this because I wanted to help my students find their console logs a little easier.

This adds methods to the console object, so requiring it once on entry file will make it globally accessible.

Colors supported(types):
```js
console.cyan('string', Number, {}, [])
console.red('string', Number, {}, [])
console.green('string', Number, {}, [])
console.yellow('string', Number, {}, [])
console.black('string', Number, {}, [])
console.magenta('string', Number, {}, [])
```

Pass your own style options into:
```js
console.any('string', style)
```

## Installation

  `npm install react-console-colors -D`

## Usage

    require('react-console-colors');

    console.cyan('this.props',this.props);

## Usage for console.any

    var style = [
      'background-color: cornflowerblue',
      'font-size: 30px',
      'color: white',
      'border-radius: 50px'
    ];

    console.any('hello world',style);

    FYI: console.any can only support two arguments:
      - first: can be one of the following: String, Number, {}, []
      - second: must be the style following the format above.

<img src="./img.png" width="450"/>



FYI: For NodeJS color output you can find a much better package called 'colors'