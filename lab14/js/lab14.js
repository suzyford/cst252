/*
* Authors: Suzy Ford & Art Rios
* Created: 16 March 2022
* License: Public Domain
*/
// :)


// print all the numbers from 1 to 100
for (let i = 1; i <= 110; i++) {
    // For numbers which are multiples of both 3 and 5,
    // print “FizzBuzz”


     if(i % 3 == 0) {
       console.log("Fizz!");
     }
     else if(i % 5 == 0) {
       console.log("Buzz!");
     }
    else if(i % 15 == 0) {
       console.log("Fizz Buzz");
     }
     else {
       console.log(i)
     }
   }
