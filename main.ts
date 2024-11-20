// let n1 = 10;
// console.log("Hello TS");


// var a: any ;
// a = "Ian";

// let b: never;
// b = 10;
6

// assigning  
let userId : string | number | boolean = 10;
userId = 10;
userId = "abc"


// arrays in js 
let arr = [];
let arrNumbr = ['1','2','3','4']
let arr3 = [1,2,4,5]
let arrr4 = [1, '2', '34']

console.log(typeof(arr), typeof(arrNumbr), typeof(arr3), typeof(arrr4))


// function calling 
function printArray( arr : number[]){
    arr.forEach(element => {
        console.log(element)
    });
}

printArray(arr);



// t mutable a object or an array
const newAr1 = ["a", "b"]
const newAr2 = ["c", "d", "e"]
const newAr3 = [...newAr1, ...newAr2] // appending arrays
newAr1.push(...newAr2)
console.log(newAr3)



// npm install -g typescript