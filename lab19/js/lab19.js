/*
* Authors: Suzy Ford & Art Rios
* Created: 18 April 2022
* License: Public Domain
*/
// :)

/*
* Authors: Suzy Ford & Art Rios
* Created: 18 April 2022
* License: Public Domain
*/
// :)

var url = "https://xkcd.com/614/info.0.json";

// When a user clicks the button
$("#press-me").click(getAjax);

// use a jQuery AJAX call to fetch output from the numbers API
function getAjax() {
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,

      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      // dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      //alert("Success!");
      console.log(data);
      // Grab the record from this data
      var thisRecord = data.records[0];
      // get the info we want
      var imgurl = thisRecord.images[0].baseimageurl;
      console.log("imageurl", imgurl)
      var title = thisRecord.title;
      var desc = thisRecord.description;
      // Insert the output in the output div
      // $("#output").html("<pre>" + JSON.stringify(data, null, "\t"));
      $("#output").html("<h2>" + title);
      $("#output").append("<img src=" + imgurl + ">");
      $("#output").append("<p>" + desc);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}
