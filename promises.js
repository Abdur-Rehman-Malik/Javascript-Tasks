// const even = new Promise((res, rej)=>{
//     const a = 2;
//     a%==2 
// })
// even
// .then((res)=>{
//     console.log(res)
// })
// .catch((rej)=>{
//     console.log(rej)
// })
// create a function that prints time 

// let a =1;
// let b =true;
// while(b){
//     if(a>5){
//        b=false; 
//     }
//     a++;
//     console.log(a)
// }

// myfun();
// function myfun(){
//     console.log("hey")
// }
// console.log(x);

//     let a =3;
//     let b =true;
    
//     while(b){
//         a++;
//         if(a>=10){
//            b=false; 
//         }
       
//         console.log(a)
//     }
//     const d = new Date();
// console.log(d)

//  let a=true
//  while(a){
//   const d= new Date();
//   console.log(d)
//  }
// let promise = new Promise((resolve , reject) =>{
//   setTimeout(() => {
//     let a =true;
//     const d= new Date();
//     while(a){
//       console.log(d)
//     }
//   }, 2000);
// });

const main = async () => {
  while (true) {
    const promise = new Promise((res) => {
      setTimeout(() => {
        res(new Date());
      }, 1000);
    });
    await promise.then((res) => {
      console.log(res);
    });
  }
};
main();

