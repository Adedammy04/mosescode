let examplestring = "This is javascript tutorial"

// toUppercase() - It converts our string -> uppercase charatcers
console.log(examplestring.toUpperCase())

// toLowerCase() - It converts our string -> LowerCase charatcers
console.log(examplestring.toLowerCase())

// concat() - It merges two or more strings
let firstName = "moses"
let lastName = "damilola"
console.log(examplestring.concat(firstName))
console.log(examplestring.concat(' ', firstName, ' ', lastName))

// we can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + examplestring)

// trim() - It removes extra spaces
let extraSpaceStringExample = '      my string    '
console.log(extraSpaceStringExample.trim())

let extraSpaceStringExample2 = '      my string    '
console.log(extraSpaceStringExample2.trim()) 

// split() splits our string on the basis of the arguments passed
let samplestring = "this is my sample string"
console.log(samplestring.split(' '))

let samplestring2 = "this is my sample string"
console.log(samplestring2.split(','))

let samplestring3 = "this is awesome"
console.log(samplestring3.split())