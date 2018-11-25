require('./')

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