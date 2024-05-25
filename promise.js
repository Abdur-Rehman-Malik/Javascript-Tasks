// setTimeout(() =>{
//    console.log(" Line 1")
// });


// function display () {
//     console.log("line  2")
// }

// display();


// const promiseOne = new Promise((res) => {
//     setTimeout(() => { 
//     res("i am resolve");
//     },1000)
// })

// promiseOne
// .then((value) => {
//     console.log(value);
// })

// const promiseOne = new Promise((res,rej) => {
//      let a = false;
//      if(a == true){
//         res("i am resolved");
//      }
//      if(a == false){
//         rej("i am rejected");
//      }
// })

// promiseOne
// .then((value) => {
//     console.log(value);
// })
// .catch((value2) => {
//     console.log(value2);
// })

const promiseOne = new Promise((res) => {
    setTimeout(() => {
        res("Line 1")
    },1000)
})

const promiseTwo = new Promise((res) => {
    res("Line 2");
})

promiseOne.then((value) => {
    console.log(value);
})
promiseTwo.then((value) => {
    console.log(value);
})

console.log("async");

const main = async() =>{
    await promiseOne.then((value) => {
        console.log(value)

    })

   await promiseTwo.then((value) => {
        console.log(value);
    })
}
main();

// const greet = (name,age) => {
//     console.log(`i am ${name} and my age is ${age}`);
// }

// setTimeout(greet,2000,"Zain",29);

// let a= new Date();
// let b= 20;
// let c=30;
// console.log("updated value is:" , (c,b,a))

// function myfun(arry){
//     arry[0] = 10;
// }

// let arry=["1","2","3"]
// myfun(arry);


// console.log(arry)


// const arr = [1,2,3,4]
// for (let i=0; i<arr.length; i++)
//         arr[i]+=2;
// console.log (arr)