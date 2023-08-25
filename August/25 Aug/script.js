let a = [2, 3, 4, 1, 2, 3, 4]
let b = ["__"]

// ------------- join()

// let c = a.join(b)
// console.log(c);
// console.log(typeof a,typeof b,typeof c); // Object Objcet String
function s() {
    // c = "sacasvc";
    a = "Sachin";
    b = 12
}
let d = {
    a: "Sachin",
    b: 7
}
// ------------- pop()

// ass = a.pop()
// das = a.pop()
// a.pop()
// console.log(a, das, ass);
// console.log( ass);       //---------- return pop out element

// ------------- push()

// let as = a.push(s(),9< 12,typeof 23,24,24,24, "sachin", true, false)
// console.log(a, as);
// console.log(a);

// ------------- shift()

// let ac=a.shift()
// let ea=a.shift()
// console.log(ac,a);
// console.log(ea);
// console.log(a);

// ------------- shift()

// let ac=a.unshift(12)
// let ea=a.unshift(22)
// console.log(ac,a);
// console.log(ea);
// console.log(a);

// ------------- delete operator

// let ascent = [1, 2, 3, 4, 5, 6, 7]
// delete ascent[0]
// console.log(ascent);

// ------------- concat() , join() , + operator

// let c = a.join(b)
// let c=a<b +a+b;
// let c=a+b+a+b+d+d.a;
// let c=a.concat(d,"ma" == "ma",b,a,b,a,"Sachin")
// console.log(typeof b[0]);
// console.log(c);
// console.log(c.join("_"));

// ------------- sort()

// let compare = (a,b) =>{
// return a-b;  // ascending
// return b-a;  //decending
// }
// let das =["sachin","agtd2",30,3423,5,null,undefined,a<b]
// let das =["sachin",23,34,5,null,undefined,a<b,d.a,d] // output position doubt
// let das =["sachin",s(),23,34,5,null,undefined,a<b] // why falsey value doubt
// console.log(das.sort(compare));

// -------------  reverse()

// let asd=[1,2,3,44,0]
// aas=asd.reverse()
// console.log(asd);
// console.log(aas);

// -------------  splice()

// let asd = [1, 2, 3, 4, 5, 6, 7]

// asd.splice(3, 4, "Sachin", 11, 1, 1, 1, "Israni", null, undefined , a<b ,d.a ,s(a))
// console.log(asd);

// -------------  slice()

// let num=[1,2,3,4,5,6,7,8,9,0]

// numStore=num.slice(-4,-2)
// numStore=num.slice(-2,-4)  // this will not work
// numStore=num.slice(-2,0)  // this will not work
// numStore=num.slice(0,-2)  
// numStore=num.slice(5,-1)  
// numStore=num.slice(5,s(a)) // this will not wok 
// console.log(numStore);

// -------------  foreach()

// let num=[1,2,3,4,5,6]

// // for (i = 0; i < num.length; i++) {
// //     console.log(num[i]);
// // }

// num.forEach((element) =>{
//     console.log(element*element);
// })

// -------------  Array.form()

// let sac={a:23,b:89}
// let sac="Sachin"
// let asd=Array.from(sac)
// console.log(asd[0]);
// console.log(asd);

// -------------  map()

// let num=[1,2,3,4,5]
// let as=num.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value +1;
// })
// console.log(as);

// -------------  filter()

// let num=[12,1,3,5,7,23,15,14,18]

// let a2= num.filter((a)=>{
//     return a>10;
// })
// console.log(a2)

// -------------  reduce()

// let num =[1,2,3,4,5,6]

// const reduce_func = (a,b) => {
//         return a+b;
// }

// let newArr = num.reduce(reduce_func)

// console.log(newArr);

// -------------  at()