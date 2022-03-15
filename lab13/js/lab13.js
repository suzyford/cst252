/*
* Authors: Suzy Ford & Art Rios
* Created: 16 March 2022
* License: Public Domain
*/
//thanks to Wes for an awesome lecture :)

houseArray = [
  {
  title: "Gryffindor",
  text: "Oh lucky!"
},
{
  title: "Ravenclaw",
  text: "You Like?"
},
{
  title: "Slytherin",
  text: "Take Your Chances Here."
},
{
  title: "Hufflepuff",
  text: "What the....?"
}
]

function sortinghHat(str) {
  //get length of name
  var len = name.length;
  //do a mod 4 to get house
  var mod = len % 4;
  //if condiional to set houseStr to house
    if (mod == 0) {
      return "Gryffindor";
  }
  else if (mod == 1) {
      return "Ravenclaw";
  }
  else if (mod == 2) {
      return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
  return houseStr;
}

$("#my-button").click(function(){

  var name = $("#input").val()
  var house = sortingHat(name);
  console.log(house);
  $("output").html("The Sorting Hat Has Sorted You Into" + house);

});
