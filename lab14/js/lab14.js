/*
* Authors: Suzy Ford & Art Rios
* Created: 16 March 2022
* License: Public Domain
*/
// :)

// print all the numbers from 1 to 100
for (let i = 1; i <= 110; i++) {
    // For numbers which are multiples of both 3 and 5,

    var buildStr = "";
    // If the number is a multiple of 3,
    // print “Fizz” instead of the number.
    if (i % 3 == 0) {
        buildStr += "Fizz";
    }
    // If the number is a multiple of 5,
    // print “Buzz” instead of the number.
    if (i % 5 == 0) {
        buildStr += "Buzz";
    }
    // If the number is a multiple of 7,
    // print “Boom” instead of the number.
    if (i % 7 == 0) {
        buildStr += "Boom";
    }

    if (buildStr != "") {
        console.log(buildStr + "!");

    }
  }
