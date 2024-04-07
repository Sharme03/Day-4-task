//! Do the below programs in anonymous function & IIFE

//! a. Print odd numbers in an array

//! Annoymous function

var result =[];
var odd=function (arr)
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!==0)
    {
        result.push(arr[i]);
    }
}
return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//!IIFE function

var result =[];
(function (arr)
{
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!==0)
    {
        result.push(arr[i]);
    }
}
console.log(result);
})
([1,2,3,4,5,6,7,8,9,10]);

//!Arrow function

var result =[];
var odd=(arr) => {
for(var i=0;i<arr.length;i++)
{
    if(arr[i]%2!==0)
    {
        result.push(arr[i]);
    }
}
return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//! b) Convert all the strings to title caps in a string array

//! Anonymous function

var titleCase =function(str) {
    str= str.toLowerCase().split("");
    for(var i=0; i<str.length; i++) {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
}
console.log(titleCase("i am sharme"));

//! IIFE function

(function(str) {
    str= str.toLowerCase().split("");
    for(var i=0; i<str.length; i++) {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(" "));
})
("i am sharme");

//!Arrow function

var titleCase=(str) => {
    str= str.toLowerCase().split("");
    for(var i=0; i<str.length; i++) {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
}
console.log(titleCase("i am sharme"));

//! c) Sum of all numbers in an array

//! Anonymous function

var getsum = function(num){
    var sum = 0;
    for(var i=0; i<num.length; i++){
        sum+=num[i];
    }
    return sum;
}
console.log(getsum([3,5,9,8,12,15,20]));

//! IIFE function

(function(num){
    var sum = 0;
    for(var i=0; i<num.length; i++){
        sum+=num[i];
    }
    console.log(sum);
})
([1,5,6,3,5,20,25,11]);

//!Arrow function

var getsum = (num)=>{
    var sum = 0;
    for(var i=0; i<num.length; i++){
        sum+=num[i];
    }
    return sum;
}
console.log(getsum([1,7,8,15,16,20,27,29]));

//!d) Return all the prime numbers in an array

//!Anonymous function :

// var array = [];
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
var a=function(num){
    // array=array.filter(a);
    for(var i=2; i <= Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
    }
    return num>1;
}
// console.log(a([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
console.log(array.filter(a));

//! IIFE function

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
// var primeArray = 
(function (arr) {
    arr1 = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return number>1;
    });
    // return array1;
    console.log(arr1);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20,21,22,23,24,25]);
// console.log(primeArray);

//!Arrow function

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20];
var a1=(num)=>{
    for(var i=2; i <= Math.sqrt(num); i++){
        if(num%i===0){
            return false;
        }
    }
    return num>1;
}
console.log(array.filter(a1));


// !e) Return all the palindromes in an array

//!Anonymous function :

const wordsArr = ['121', 'aaaa', 'civic', 'liril', '1256521', 'porcupine', 'pineenip'];
var isPalindrome = function (word) {
        const firstHalf = word.slice(0, Math.ceil(word.length/2));
        const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

        return firstHalf === secondHalfReversed;
    }
var getPalindromesFromArray =function (arr) {
        return arr.filter(isPalindrome);
    }
console.log(getPalindromesFromArray(wordsArr));


//! IIFE function

var getAllPalindromes = ['121', 'madam', 'civic', 'liril', '1256521', 'porcupine', 'pineenip'];
// const getAllPalindromes = 
(function (words) {
    return words.filter(function (word) {
    return word.split("").reverse().join("") === word;
    
    });
    
});console.log(getAllPalindromes);
// console.log(getAllPalindromes(["hello", "noon"]));



//!Arrow function

const palindromes = ['5896985','636', 'liril', '1256521', 'porcupine', 'pineenip'];
var isPalindrome = (word) => {
        const firstHalf = word.slice(0, Math.ceil(word.length/2));
        const secondHalfReversed = word.slice(Math.floor(word.length/2)).split('').reverse().join('');

        return firstHalf === secondHalfReversed;
    }
var getPalindromesFromArray =(arr)=>{
        return arr.filter(isPalindrome);
    }
console.log(getPalindromesFromArray(palindromes));

// !f) Return median of two sorted arrays of the same size

//!anonymous function


let num1 = [1, 16,12, 18, 13, 27, 38];
let num2 = [2, 13, 15, 30, 45, 47];
var median = function (a, b) {
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = (c.length / 2) | 0;
    if (c.length % 2) return c[half];

    return (c[half] + c[half - 1]) / 2;
    
}
console.log(median(num1, num2));


//! IIFE function

let num3 = [1, 16,12, 18, 13, 27, 38];
let num4 = [2, 13, 15, 30, 45, 47];
(function (a, b) {
    var c = [...a, ...b].sort((a, b) => a - b);
    const half = (c.length / 2) | 0;
    if (c.length % 2) return c[half];
    {
    return (c[half] + c[half - 1]) / 2;
    }
    console.log(c);
})(num3,num4);


// Arrow function

// let num5 = [1, 5,9,12,15,19,23,25];
// let num6 = [2,8,13,20,24,30,35];
// var median = (a, b) =>{
//     let c = [...a, ...b].sort((a, b) => a - b);
//     const half = (c.length / 2) | 0;
//     if (c.length % 2) return c[half];

//     return (c[half] + c[half - 1]) / 2;
    
// }
// console.log(median(num5, num6));

// !Remove duplicates from an array

//!Anonymous function

var removeDuplicates = function(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}

console.log(removeDuplicates([1, 2, 3, 3, 4,3,6,1,"banana","apple", "orange", "mango", "mango"]));


//! IIFE function

var arr = [1, 2, 3, 3, 4, 5,2, 6,3,6,1,"apple", "orange", "mango", "mango"];
    (function(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    })
    console.log(arr);

//!h) Rotate an array by k times

//!Anonymous function

var ar=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
k=2;
var rotateArray = function(ar,k){
for(let i=0;i<k;i++){
ar.push(ar.shift());
}
return ar;
}
console.log(rotateArray(ar,k));

//! IIFE function

(function(arr,k){
for(let i=0;i<k;i++){
    arr.push(arr.shift());
    }
    console.log(arr,k);
})([1,2,3,4,5],[3]);