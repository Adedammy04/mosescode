let myfirstString = "this is a string for Javascript string functions, Javascript"

//Returns the length of the string
console.log(myfirstString.length)

//find index of a string inside another string 
console.log(myfirstString.indexOf('Javascript'))
console.log(myfirstString.indexOf('this'))

//find LAST index of a string inside another string
console.log(myfirstString.lastIndexOf('Javascript'))

//Get a part of our string slice(start, end)
console.log(myfirstString.slice(0, 4))
console.log(myfirstString.slice(21, 31))
console.log(myfirstString.slice(-10))
console.log(myfirstString.slice(5))

//Get sub string function - substr(startPos, length)
console.log(myfirstString.substr(0, 4))
console.log(myfirstString.substr(21, 10))
console.log(myfirstString.substr(21))