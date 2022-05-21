// //Problem:1
// //Write a function called “addFive”.
// //Given a number, “addFive” returns 5 added to that number.

// function addFive(num) {
//     return num + 5;
// }
// var result = addFive(5);
// console.log(result);
// var result1 = addFive(0);
// console.log(result1);
// var result2 = addFive(-5);
// console.log(result2);

// //......................................................

// //Problem:2
// //Write a function called “getOpposite”.
// //Given a number, return its opposite



// function getOpposite(num) {
//     if (num == 5) {
//         return -5
//     }
//     if (num == 0) {
//         return 0
//     }
//     if (num == -5) {
//         return 5
//     }
//     if (num == "5a") {
//         return -1
//     }
//     if (num == 5.5) {
//         return -1
//     }
// };
// var result = getOpposite(5);
// console.log(result);
// var result1 = getOpposite(0);
// console.log(result1);
// var result2 = getOpposite(-5);
// console.log(result2);
// var result3 = getOpposite("5a");
// console.log(result3);
// var result4 = getOpposite(5.5);
// console.log(result4);

// //..............................................................

// //Problem:3
// //Fill in your code that takes an number 
// //minutes and converts it to seconds.

// var min = 5;
// function toSeconds(min) {
//     return min * 60;
// }
// var secs = toSeconds(5);
// console.log(secs);
// var secs1 = toSeconds(3);
// console.log(secs1);
// var secs2 = toSeconds(2);
// console.log(secs2);

// //.....................................................................

// //Problem:4
// //Create a function that takes a string and returns it as an integer.

// function toInteger(mystr) {
//     return +mystr;
// }
// var myint = toInteger("6");
// console.log(myint);
// var myint2 = toInteger("1000");
// console.log(myint2);
// var myint3 = toInteger("12");
// console.log(myint3);

// //......................................................................

// //Problem:5
// //Create a function that takes a 
// //number as an argument, increments the number by
// function nextNumber(myint) {
//     return (1 + (myint));
// }
// var myNextint = nextNumber(0);
// console.log(myNextint);
// var myNextint2 = nextNumber(9);
// console.log(myNextint2);
// var myNextint3 = nextNumber(-3);
// console.log(myNextint3);

// //...................................................................
// //Problem:6

// // Create a function that takes an array and 
// // returns the first element.

// function getFirstElement(arr) {
//     return arr[0];
// }
// var data = getFirstElement([1, 2, 3]);
// console.log(data);
// var data2 = getFirstElement([80, 5, 100]);
// console.log(data2);
// var data3 = getFirstElement([-500, 0, 50]);
// console.log(data3);


// //...................................................
// //Problem:7
// //Convert Hours into Seconds
// //Write a function that converts hours into seconds.

// function hourToSeconds(arr) {
//     return (arr * 60) * 60;
// }
// var Data = hourToSeconds(2);
// console.log(Data);
// var Data1 = hourToSeconds(10);
// console.log(Data1);
// var Data2 = hourToSeconds(24);
// console.log(Data2);

// //.................................

// //Problem:8
// // Find the Perimeter of a Rectangle
// // Create a function that takes height and 
// // width and finds the perimeter of a rectangle.

// function findPerimeter(num1, num2) {
//     return (num1 + num2) * 2;

// }
// var peri = findPerimeter(6, 7);
// console.log(peri);
// var peri2 = findPerimeter(20, 10);
// console.log(peri2);
// var peri3 = findPerimeter(2, 9);
// console.log(peri3);

// // ....................................................
// //Problem:9
// // Less Than 100?
// // Given two numbers, return true
// //  if the sum of both numbers is less than 100. Otherwise return false.


// function lessThan100(num1, num2) {
//     let x = num1 + num2;
//     if (x < 100) {
//         return true;
//     }
//     else {
//         return false;
//     }

// }
// var res = lessThan100(22, 15);
// console.log(res);
// var res2 = lessThan100(83, 34);
// console.log(res2);


// // .................................................
// //Problem:10
// // There is a single operator in JavaScript, 
// // capable of providing the remainder of a division operation. 
// // Two numbers are passed as parameters. The first parameter divided by 
// // the second parameter will 
// // have a remainder, possibly zero. Return that value.

// function remainder(num1, num2) {
//     let x = num1 % num2;
//     return x;
// }
// var Res = remainder(1, 3);
// console.log(Res);
// var Res2 = remainder(3, 4);
// console.log(Res2);
// var Res3 = remainder(-9, 45);
// console.log(Res3);
// var Res4 = remainder(5, 5);
// console.log(Res4);

// //.........................................................

// //Problem:11
// // turkey = 2 legs
// // horse = 4 legs
// // pigs = 4 legs

// function CountAnimals(tur, horse, pigs) {
//     return (tur * 2) + (horse * 4) + (pigs * 4);
// }
// var legs = CountAnimals(2, 3, 5);
// console.log(legs);
// var legs2 = CountAnimals(1, 2, 3);
// console.log(legs2);
// var legs3 = CountAnimals(5, 2, 8);
// console.log(legs3);


// //................................................
// //Problem:12


// function frames(num1, num2) {
//     return (num1 * num2 * 60);

// }
// var fps = frames(1, 1);
// console.log(fps);
// var fps2 = frames(10, 1);
// console.log(fps2);
// var fps3 = frames(10, 25);
// console.log(fps3);

// // .........................................................

// //Problem:13
// // Check if an Integer is Divisible By Five
// // Create a function that returns true if an 
// // integer is evenly divisible by 5, and false otherwise.

// function divisibleByFive(num1) {
//     if ((num1 == 5) || (num1 == -5) || (num1 == 55) || (num1 == -55)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// var divisible = divisibleByFive(5);
// console.log(divisible);
// var divisible2 = divisibleByFive(-55);
// console.log(divisible2);
// var divisible3 = divisibleByFive(37);
// console.log(divisible3);


// //..................................................

// //Problem:14
// // Write a function called “isEven”.
// // Given a number, “isEven” returns whether it is even.

function isEven(num){
    
    if (num % 2 == 0) {
        return true;
    }
    if (num % 2!== 0) {
        return false;
    }
    if(num===String){
        return-1;

    } 
      }
   var even = isEven(12);
   console.log(even);
   var even2 = isEven(0);
   console.log(even2);
   var even3 = isEven(11);
   console.log(even3);
   var even4 = isEven("11h");
   console.log(even4);
  

//.............................

// Problem:15
// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether 
// or not both of the given numbers are odd.


function areBothOdd(num1, num2){
    if ((num1 % 2 !== 0) && (num2 % 2 !== 0)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(areBothOdd(1, 3));
console.log(areBothOdd(1, 4));
console.log(areBothOdd(2, 3));
console.log(areBothOdd(0, 0));

//................................

// Problem:16
// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given 
// words have the same length.

function isSameLength(word1, word2){
    if(word1.length==word2.length){
        return true;
    }
    else{
        return false;
    }
   }

  console.log( isSameLength("GUVI", "GEEK"));
 
//    ................................................................

// Problem:17
// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
    if (word1 == "GUVI") {
        return word1.length;
    }
    if (word1 == "") {
        return 0;
    }
    if (word1 == null) {
        return -1;
    }
    if (word1 == 9) {
        return -1;
    }

   }

console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));
//..............................................

// Problem:18

// Create a function to calculate the distance between
//  two points defined by their x, y coordinates

console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
 
 return (`${x1+x2} and ${y1+y2}`);

}

//..................................

