var num1 = 10;
var num2 = 20.3;

//tostrng() numbers as input and returns a string
console.log(num1.toString())
console.log(num2.toString())

var strNum1 = "10";
var strNum2 = "11.5";

//parseInt() string numberal as input and returns a number
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));

//parseFloat() String Numeral as an input and returns a floating number
console.log(parseFloat(strNum2));

//tofixed() takes floating number and rounds it off to given position

var strFloat = 87.987653;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(2))
console.log(strFloat.toFixed(5))
console.log(strFloat.toFixed(10))