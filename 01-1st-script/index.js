var math = require('./math');
var x = 10;
var y = 5;
var a = math.addition(x , y);
var b = math.soustraction(x , y);
var c = math.multiplication(x , y);
var d = math.division(x , y);

console.log(x +' + ' + y +' = ' + a);
console.log(x +' - ' + y +' = ' + b);
console.log(x +' * ' + y +' = ' + c);
console.log(x +' / ' + y +' = ' + d);