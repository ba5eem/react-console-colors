
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





const cyan = (arg) => {
  let bgCyan = '\x1b[46m%s\x1b[0m';
  console.log(bgCyan, type(arg));
};

const red = (arg) => {
  let bgRed = '\x1b[41m%s\x1b[0m';
  console.log(bgRed, type(arg));
};

const green = (arg) => {
  let bgGreen = '\x1b[42m%s\x1b[0m';
  console.log(bgGreen, type(arg));
};

const yellow = (arg) => {
  let bgYellow = '\x1b[43m%s\x1b[0m';
  console.log(bgYellow, type(arg));
};

const black = (arg) => {
  let bgBlack = '\x1b[40m%s\x1b[0m';
  console.log(bgBlack, type(arg));
};

const magenta = (arg) => {
  let bgMagenta= '\x1b[45m%s\x1b[0m';
  console.log(bgMagenta, type(arg));
};

console.cyan = cyan;
console.red = red;
console.green = green;
console.yellow = yellow;
console.black = black;
console.magenta = magenta;
console.any = any;

String.prototype.cyan = cyan;
Array.prototype.cyan = cyan;
Object.prototype.cyan = cyan;
Number.prototype.cyan = cyan;


module.exports = { console, String, Array, Object, Number };

