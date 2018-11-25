
const type = (arg) => {
  if(arg.constructor === Array){
    return JSON.stringify(arg);
  }
  else if(arg.constructor === Object){
    let x = JSON.stringify(arg);
    return x.split(',').join("\n");
  }
  else{
    return arg;
  }
}


var defaultStyle = [
    'background-color: cornflowerblue',
    'font-size: 30px',
    'color: white',
    'border-radius: 50px'
];

const any = (arg,style) => {
  if(style === undefined){
    style = defaultStyle;
  }
  console.log(`%c ${type(arg)} `, style.join(';'));
}

let bgCyan = '\x1b[46m%s\x1b[0m';
let bgRed = '\x1b[41m%s\x1b[0m';
let bgGreen = '\x1b[42m%s\x1b[0m';
let bgYellow = '\x1b[43m%s\x1b[0m';
let bgBlack = '\x1b[40m%s\x1b[0m';
let bgMagenta= '\x1b[45m%s\x1b[0m';




function cyan(){
  console.log(bgCyan, type(this));
}

function red(){
  console.log(bgRed, type(this));
}

function green(){
  console.log(bgGreen, type(this));
}

function yellow(){
  console.log(bgYellow, type(this));
}

function black(){
  console.log(bgBlack, type(this));
}

function magenta(){
  console.log(bgMagenta, type(this));
}



// CYAN
String.prototype.cyan = cyan;
Array.prototype.cyan = cyan;
Object.prototype.cyan = cyan;
Number.prototype.cyan = cyan;

// RED
String.prototype.red = red;
Array.prototype.red = red;
Object.prototype.red = red;
Number.prototype.red = red;


// GREEN
String.prototype.green = green;
Array.prototype.green = green;
Object.prototype.green = green;
Number.prototype.green = green;


// YELLOW
String.prototype.yellow = yellow;
Array.prototype.yellow = yellow;
Object.prototype.yellow = yellow;
Number.prototype.yellow = yellow;


// BLACK
String.prototype.black = black;
Array.prototype.black = black;
Object.prototype.black = black;
Number.prototype.black = black;


// MAGENTA
String.prototype.magenta = magenta;
Array.prototype.magenta = magenta;
Object.prototype.magenta = magenta;
Number.prototype.magenta = magenta;

console.any = any;


module.exports = { console, String, Array, Object, Number };

