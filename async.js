//synchronous
// console.log(" I ");
// console.log(" eat ");
// console.log(" spoon ");
// console.log(" ice cream ");
// console.log(" with a ");

//asynchronous
// console.log(" I ");
// console.log(" eat ");

// setTimeout(()=>{
//     console.log(" ice cream ");
// },4000);

// console.log(" with a ");

// console.log(" spoon ");


// function one(call_two){
//     call_two();
//     console.log(" step 1 complete. please call step 2");
   
// }

// function two(){
//     console.log(" step 2 ");
// }

// one(two);
//// two();


let stocks = {
    fruits : ['strawberry','grapes','banana','apple'],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}

let is_shop_open =true;

//Implementation using callbacks
// let order = (fruit_name,call_production)=>{
//     setTimeout(function(){
//         console.log(`${stocks.fruits[fruit_name]} was seleted`);
//         call_production();
//     },2000);
// }
// let production = ()=>{
//     setTimeout(()=>{
//         console.log("production has started");
//         setTimeout(()=>{
//             console.log("fruit has been chopped");
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
//                 setTimeout(()=>{
//                     console.log("machine was started");
//                     setTimeout(()=>{
//                         console.log(`${stocks.holder[0]} was selected`);
//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} was added as toppings`);
//                             setTimeout(()=>{
//                                 console.log("Serve ice cream")
//                             },2000);
//                         },3000);
//                     },2000)
//                 },1000);
//             },1000);
//         },2000);
//     },0);
// }
// order(0,production);

//Using promises
// let order = (time,work) =>{
//     return new Promise( (resolve, reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve( work() );
//             }, time);
//         }else{
//             reject(console.log("our shop is closed"));
//         }
//     });
// };
// order(2000,()=>{
//     console.log(`${stocks.fruits[0]} was selected`);
// }).then(()=>{
//     return order(000,()=>console.log("Production has started"))
// }).then(()=>{
//     return order(2000,()=>console.log("The fruit was chopped"))
// }).then(()=>{
//     return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
// }).then(()=>{
//     return order(1000,()=>console.log("machine was started"))
// }).then(()=>{
//     return order(2000,()=>console.log(`${stocks.holder[0]} was selected`))
// }).then(()=>{
//     return order(3000,()=>console.log(`${stocks.toppings[0]} was added as toppings`))
// }).then(()=>{
//     return order(2000,()=>console.log("Serve ice cream"))
// }).catch(()=>{
//     console.log("Customer left");
// }).finally(()=>{
//     console.log("Day ended shop is closed");
// })

// let order=()=>{
//     return new Promise((resolve,reject)=>{
//         if(is_shop_open){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     });
// }

async function order(){

}