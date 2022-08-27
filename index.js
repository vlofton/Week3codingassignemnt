// 1. A - This calculation is the subtraction of the first element in the array to the last. Expected output -90
//var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//var a = 3;
//var b = 9;
//var c = 23;
//var d = 64;
//var e = 2;
//var f = 8;
//var g = 28;
//var h = 93;
 
//console.log(a - h); 


// B. This is the B portion of the first requirement for the coding assignment. Expected result -35
//var ages = [3, 9, 23, 64, 2, 8, 28, 93];
//var a = 3;
//var b = 9;
//var c = 23;
//var d = 64;
//var e = 2;
//var f = 8;
//var g = 28;
//var h = 93;
//ages.push(95);
//var i = 95;

//console.log(a - i);



// C. This calculates the average age. Expected output 28.75
//const avg = arr => {
//    const sum = arr.reduce((acc, cur) => acc + cur);
//    const average = sum/arr.length;
//    return average;
//  }
  
//  console.log(avg([3, 9, 23, 64, 2, 8, 28, 93]));






// 2. A - This calculates the number of letters per name.
//let name = ['Sally', 'Buck', 'Bob', 'Sam', 'Tommy', 'Tim' ];
//let lengths = name.map(function(element) {
//    return element.length;
//}); 
//console.log(lengths);

 //B. This code concatenate all the names together seperated by commas
//let name = ['Sally', 'Buck', 'Bob', 'Sam', 'Tommy', 'Tim'];
//var lettersPerName = [];

//for(lettersPerName of name);
//console.log(name);

//3. How do you access the last element of an array? Expected output horse.
//var animals = ['cat', 'dog', 'horse'];
//console.log(animals[animals.length - 1]);





//4. How do you access the first element of an array? Expected output 1
//var arr = [ 1, 2, 3, 4, 5 ];
//var first = arr[0];
//console.log(first);

//5. This calculates the length of each name in the array. If you comment out lines 77-79 and 86, it will print the number of letters per name. I wasn't exactly sure what the graders are looking for.
//var nameArray = ('rob', 'kevin', 'vic', 'tony')
//var nameLengths = [3, 5, 3, 4]
//let sum = 0; for(let i = 0; i < nameLengths.length; i++ ){
//  sum += nameLengths[i];
//}



//for(var i = 0; i < nameLengths.length; i++){
  
//}
//console.log(sum)
//console.log(nameLengths)


//6. This code calculates the sum of all the elements of the array. Expected output 3 8 11 15
//var arrayLengths = [3, 5, 3, 4]
//let sum = 0; for(let i = 0; i < arrayLengths.length; i++ ){
//  sum += arrayLengths[i];
//  console.log(sum);
//}



//7.Function with two parameters [Word, N]

//let thisFunction = (word, n) => {
//  let result = '';
//  for (let i = 0; i < n; i++) {
//    result += word;
//  }
//  return result;
//};
//console.log(thisFunction('Hi there,', 5));

//8. Function with two parameters [firstName lastName]. Expected result, Mike Tyson
//function name(firstName, lastName) {
//  return firstName + ' ' + lastName;
//}

//console.log(name(' Mike', 'Tyson'));

//9. Function that takes array of numbers and gives the sum if the numbers are greater than 100. Expected output 300

//let arrayOfNumbers = [20, 40, 60, 80, 100];
//let sum = arrayOfNumbers.reduce(function(accumulator, currentValue) {
//  return accumulator + currentValue;
//});
//console.log(sum);


//10. Calculate the average in the array of Numbers. Expected output 60
//let arrayOfNumbers = [20, 40, 60, 80, 100];
//const avg = arr => {
//      const sum = arr.reduce((acc, cur) => acc + cur);
//      const average = sum/arr.length;
//      return average;
//  }
//  console.log(avg([20, 40, 60, 80, 100]));


//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
//var array1 = [65, 16, 0, 6, 64, 1, 68];
//var array2 = [6, 64, 54, 6, 56, 65, 4];

//if(array1 >= array2) {
//  console.log(array1);
//} else {
//  console.log(array2);
//}

  

  


//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

//var isHotOutside = true;
//var moneyInPocket = 10.50;
//var willBuyDrink = isHotOutside >= moneyInPocket;
//console.log(willBuyDrink);
  


  



//13. This function calculates the sum of three numbers and returns the sum.
//var a = (98);
//var b = (12);
//var c = (25);


//function returnSum(num1, num2, num3){
//  return(num1 + num2 + num3);
//}
//  console.log(returnSum(a,b,c));


