
// Q No 1 

let arr = [1, 2, 3];
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}
console.log(reversedArr); 

// Q No 2

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const conArr = [...arr1, ...arr2];
console.log(conArr);

// Q No 3

let numbers = [1,2,3,4,5,6,7];
let k = 3;
k = k % numbers.length;
let rotated = numbers.slice(-k).concat(numbers.slice(0, -k));
console.log(rotated);

// Q No 4 

for (let i = 1; i <= 5; i++) {
  console.log(".".repeat(5 - i) + i.toString().repeat(i));
}

// Q No 5

let inputArray = [3, 6, -2, -5, 7, 3];
let maxProduct = inputArray[0] * inputArray[1];
for (let i = 1; i < inputArray.length - 1; i++) {
  let product = inputArray[i] * inputArray[i + 1];
  if (product > maxProduct) maxProduct = product;
}
console.log(maxProduct); 

// Q No 6

const polygon = (n) => {
  let ploygonArea =  n * n + (n - 1) * (n - 1);
  return ploygonArea;
}
console.log(polygon(6)); 

// Q No 7

const  palindrome = (str) =>{
  let finalResult = str === str.split('').reverse().join('');
  return finalResult;
}
console.log(palindrome('abac')); 
console.log(palindrome('aabaa')); 

// Q No 8

const century = (year) => {
  return Math.ceil(year / 100);
}
console.log(`Year = 1905 ${century(1905)}`); 
console.log(`Year = 1700 ${century(1700)}`); 

// Q No 9

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
let totalItems = {};
fruitBasket.forEach(items => { totalItems[items] = (totalItems[items] || 0) + 1;});
console.log(totalItems);

// Q No 10

const  diagonalDifference = (arr) => {
  let numOne = 0;
  let numTwo = 0;
  for (let i = 0; i < arr.length; i++) {
    numOne += arr[i][i];
    numTwo += arr[i][arr.length - 1 - i];
  }
  return Math.abs(numOne - numTwo);
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); 

// Q No 11 a

const arrayInput = [-4, 3, -9, 0, 4, 1];
const  plusMinus = (arr) => {
  let positive = 0, negative = 0, zero = 0;
  arr.forEach(n => {
    if (n > 0) {
        positive++;
    }
    else if (n < 0) {   
        negative++;
    }
    else zero++;
  });
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
plusMinus(arrayInput);

// Q No 11 b

const arrayInputb = [-4, 3, -9, 0, 4, 1];
const  plusMinusb = (arr) => {
  let positive = 0, negative = 0, zero = 0;
  arr.forEach(n => {
    if (n > 0) {
        positive++;
    }
    else if (n < 0) {   
        negative++;
    }
    else zero++;
  });
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
plusMinus(arrayInputb);

// Q No 12

const Products = ['eggs', 'milk', 'cheese']
const productPrices = [2.89, 3.29, 5.79]
const productSold   = ['eggs', 'eggs', 'cheese', 'milk']
const soldPrice     = [2.89, 2.99, 5.97, 3.29]
const  allProducts = (products, productPrices, productSold, soldPrice) =>{
  let priceMap = {};
  products.forEach((p, i) => priceMap[p] = productPrices[i]);
  let wrongCount = 0;
  productSold.forEach((item, i) => {
    if (priceMap[item] !== soldPrice[i]) wrongCount++;
  });
  return wrongCount;
}   
console.log(allProducts(Products, productPrices, productSold, soldPrice));

// Q No 15

const delayedUpperCase = (input, n) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (input === 'string')
      {
        res(input.toUpperCase());
      }
      else {
        rej(input);
      }
    }, n);
  });
}
delayedUpperCase("hello", 1000).then(console.log).catch(console.error);
delayedUpperCase(123, 1000).then(console.log).catch(console.error);

// Q No 16

const download = (cb) => {
     cb(null, 'downloaded');
     }
const process = (data, cb) => { 
    cb(null, data + ' processed'); 
}
const execute = (data, cb) => {
    cb(null, data + ' executed'); 
    }

download((err, data) => process(data, (err, data) => execute(data, (err, data) => console.log(data))));


const downloadP =() => {
     return Promise.resolve('downloaded');
     }
const  processP = (d) => {
     return Promise.resolve(d + ' processed'); 
    }
const  executeP =(d) => {
     return Promise.resolve(d + ' executed'); 
    }
downloadP().then(processP).then(executeP).then(console.log);
(async () => {
  let d = await downloadP();
  d = await processP(d);
  d = await executeP(d);
  console.log(d);
})();

// Q No 17

const promiseOne = Promise.resolve('promise 1');
const promiseTwo = Promise.resolve('promise 2');
const promiseThree = Promise.resolve('promise 3');
Promise.all([promiseOne, promiseTwo, promiseThree]).then(results => console.log(results));
