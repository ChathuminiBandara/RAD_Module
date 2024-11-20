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
// t mutable a obkect or an array
var newAr1 = ["a", "b"];
var newAr2 = ["c", "d", "e"];
var newAr3 = __spreadArray(__spreadArray([], newAr1, true), newAr2, true);
newAr1.push.apply(newAr1, newAr2);
console.log(newAr3);
// npm install -g typescript
