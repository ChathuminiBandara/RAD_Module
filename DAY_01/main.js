// let n1 = 10;
// console.log("Hello TS");
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// var a: any ;
// a = "Ian";
// let b: never;
// b = 10;
6;
// assigning  
var userId = 10;
userId = 10;
userId = "abc";
// arrays in js 
var arr = [];
var arrNumbr = ['1', '2', '3', '4'];
var arr3 = [1, 2, 4, 5];
var arrr4 = [1, '2', '34'];
console.log(typeof (arr), typeof (arrNumbr), typeof (arr3), typeof (arrr4));
// function calling 
function printArray(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}
printArray(arr);
// ------------------------------------------------------------------ //
// t mutable a object or an array
var newAr1 = ["a", "b"];
var newAr2 = ["c", "d", "e"];
var newAr3 = __spreadArray(__spreadArray([], newAr1, true), newAr2, true); // appending arrays
newAr1.push.apply(// appending arrays
newAr1, newAr2);
console.log(newAr3);
console.log("---------------------------------------------------------");
// ------------------------------------------------------------------ //
// tuples 
// tuples can destructure easily 
var tuple1 = [1, "a"];
var x = tuple1[0], y = tuple1[1];
console.log(x);
console.log(y);
// ------------------------------------------------------------------ //
// enums
var small = 1;
var medium = 2;
var large = 3;
//or
var SIZE;
(function (SIZE) {
    SIZE["small"] = "a";
    SIZE["medium"] = "b";
    SIZE["large"] = "c";
})(SIZE || (SIZE = {}));
var mySize = SIZE.medium;
console.log("My Size : ", mySize);
console.log("---------------------------------------------------------");
console.log(SIZE.small);
console.log(SIZE.medium);
console.log(SIZE.large);
// enums start default in 0, if specifyed it starts from the specified numbr
// ------------------------------------------------------------------ //
function add1(n1, n2) {
    return n1 + n2;
}
// function add2(n1 : number, n2 : number) : void {
//     return n1+n2;
// }
// function add3(n1 : number, n2 : number) : never {
//     return ;
// }
// ----------function params passing and type secuaring -------------------------------------------------------- //
function add(n1, n2) {
    if (n2 === void 0) { n2 = 20; }
    if (n1 < 100) {
        return n1 + n2;
    }
    else {
        return n1;
    }
}
add(10, 40);
// -------------addition function----------------------------------------------------- //
function addNum(n1, n2) {
    return n1 + n2;
}
function calculate(n1, n2, addNum) {
    var result = addNum(n1, n2);
    console.log(result);
}
calculate(10, 20, addNum);
// -------------substraction function----------------------------------------------------- //
function SubNum(n1, n2) {
    return n1 - n2;
}
function substraction(n1, n2, addNum) {
    var Subresult = SubNum(n1, n2);
    console.log(Subresult);
}
calculate(10, 20, SubNum);
// -------  assigning functions to a variable - by using arrow functions --------- methods calling by a arrow function ---------------------------------- //
var person = {
    firstName: "Ian",
    age: 27
};
console.log(person.age);
// --------- nested objects ---------------adding  references of a ong to anothr obj------------------------------------------ //
var sports = {
    firstName: "Ian",
    age: 27,
    hobbies: {
        favSport: "Swimming"
    }
};
// --  accsessing the properties in a nested object
console.log(sports.hobbies.favSport);
// --- object destructuring ------------------------------------------------ //
var newMan = {
    newManfirstName: "new name ",
    NewManage: 30
};
var newManfirstName = newMan.newManfirstName, NewManage = newMan.NewManage;
var hobbies = sports.hobbies;
console.log(newManfirstName);
console.log(NewManage);
console.log(hobbies);
// ------------------------------------------------------------------ //
