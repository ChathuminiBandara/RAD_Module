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


// ------------------------------------------------------------------ //


// t mutable a object or an array
const newAr1 = ["a", "b"]
const newAr2 = ["c", "d", "e"]
const newAr3 = [...newAr1, ...newAr2] // appending arrays
newAr1.push(...newAr2)
console.log(newAr3)
console.log("---------------------------------------------------------");



// ------------------------------------------------------------------ //

// tuples 
 // tuples can destructure easily 
const tuple1 : [number , string ] = [1, "a"]
let [x, y] = tuple1;

console.log(x)
console.log(y)

// ------------------------------------------------------------------ //

// enums
const small = 1;
const medium = 2;
const large = 3;
//or
enum SIZE {
    small = "a",
    medium = "b",
    large = "c"
}
const mySize: SIZE = SIZE.medium;
console.log("My Size : " , mySize);

console.log("---------------------------------------------------------");

console.log(SIZE.small);
console.log(SIZE.medium);
console.log(SIZE.large);
// enums start default in 0, if specifyed it starts from the specified numbr


// ------------------------------------------------------------------ //

function add1(n1 : number, n2 : number) : number {
    return n1+n2;
}

// function add2(n1 : number, n2 : number) : void {
//     return n1+n2;
// }

// function add3(n1 : number, n2 : number) : never {
//     return ;
// }
    

// ----------function params passing and type secuaring -------------------------------------------------------- //

function add(n1 : number, n2 : number = 20) : number {
    if(n1< 100){
        return n1 + n2;
    }else{
        return n1
    }
    
}

add(10 , 40)



// -------------addition function----------------------------------------------------- //

function addNum(n1: number, n2: number) : number{
    return n1+n2
}

function calculate(n1, n2, addNum: (n1:number, n2:number)=> number){
    const result = addNum(n1 , n2)
    console.log(result);
}

calculate(10,20, addNum)




// -------------substraction function----------------------------------------------------- //

function SubNum(n1: number, n2: number) : number{
    return n1-n2
}

function substraction(n1, n2, addNum: (n1:number, n2:number)=> number){
    const Subresult = SubNum(n1 , n2)
    console.log(Subresult);
}

calculate(10,20, SubNum)


// -------  assigning functions to a variable - by using arrow functions --------- methods calling by a arrow function ---------------------------------- //

const person = { 
    firstName: "Ian",
    age: 27
}
console.log(person.age);


// --------- nested objects ---------------adding  references of a ong to anothr obj------------------------------------------ //

const sports = { 
    firstName: "Ian",
    age: 27,
    hobbies : {
        favSport : "Swimming"
    }
}
// --  accsessing the properties in a nested object
console.log(sports.hobbies.favSport);    


// --- object destructuring ------------------------------------------------ //

class  person1{
    firstName1 : string;
    newAge : number;
}

const newMan = {
    newManfirstName : "new name ",
    NewManage: 30
}
const {newManfirstName, NewManage} = newMan;
const {hobbies} = sports;

console.log(newManfirstName);
console.log(NewManage);
console.log(hobbies);






// ------------------------------------------------------------------ //
