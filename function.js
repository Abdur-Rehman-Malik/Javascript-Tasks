// Function Delceration

// Create a funtion of finding modolus two numbers 30 & 5
function mod(a,b) {
    return a%b;
}
let result=mod(30,5)
mod();
console.log(result)

// -Define a function called greet that takes a name as a parameter and logs a greeting message to the console.
function greet(name){
    console.log("Hi" + name)
}
let greeting=greet("How are you ?")

// Define a function called square that takes a number as a parameter and returns the square of that number.
function square(a){
    return (a)**2
}
let res=square(4)
console.log(res)

// Create a funtion of adding two numbers 1 & 2
function sum (c,d){
    return c+d;
}
let resu=sum(4,5)
// sum(); ask
console.log(resu)

// Define a function expression called multiply that takes two numbers as parameters and returns their product.
let multiply = (m,n)=>{
    return m*n
}
let mul=multiply(4,5)
console.log(mul)

//Write a function that takes two numbers as parameters and returns their sum, using an arrow function.
const arrow= (a,b)=>{
    return a+b
}
const arrow1=arrow(5,4)
console.log(arrow1)


//Ex of Function for passing by Copy
let a=2;
let b=4;
console.log(a,b)
const func3=(num1,num2)=>{
     a=num1;
     b=num2;
}
const num2=func3("Old","New")
console.log(a,b)

// Ex of Function pass by ref
let d="old"
let e="new"
console.log(d,e)
const oldval=(new1,new2)=>{
    d=new1;
    e=new2;
}
const newval=(updatebyref)=>{
    updatebyref(12,13)
}
newval(oldval);
console.log(d,e)



//Create an array of numbers and use the map method with an arrow function to double each number in the array.
const arr=[1,2,3,4]
console.log(arr)
const onee=(num)=>{
    return num*2
}
const two =arr.map(onee)
onee();
console.log(two)

// Create an array of strings and use the map() method with an arrow function to add an exclamation mark (!) to the end of each string in the array.
const arr2=["Hi","How","Are","You"]
console.log(arr2)
const str=(add)=>{
    return add+"!"
}
const arr3=arr2.map(str)
console.log("After adding !")
console.log(arr3)

//Write a function that takes an array of strings and returns a new array 
//where each string is converted to uppercase using an arrow function.

const arr4=["a","b","c","d"]
console.log(arr4)
const oldarr=(of)=>{
 return of.toUpperCase();
}
const newarr = arr4.map(oldarr)
console.log(newarr)