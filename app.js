var topics = ["happy", "joyful", "surprised", "impressed", "sad", "upset", "grateful", "disgusted", "shocked", "angry", "annoyed", "bored", "ecstatic"]


function search(searchEmotion){
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=F9yiQBJ6Be6aqnrJV6fK66X9AVUQFrf3&q=" + searchEmotion + "&limit=10&offset=0&rating=G&lang=en";

  //add AJAX here --need to correct
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
    var gifs = response.data;
    for (var i = 0; i < gifs.length; i++){
      var stillImageUrl = gifs[i].images["480w_still"].url;
      console.log(stillImageUrl);
      var gifImageUrl = gifs[i].images["preview_gif"].url;
      var image = $("<img>")
      image.src = stillImageUrl;
      $("#images").prepend(image)

    }
  })

}

//Looping through array of emotions
function renderButtons() {
   $("#buttons").empty();
    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.text(topics[i]);
      $("#buttons").append(a);
    }
  }

  $("#buttons").on("click", "button", function(event) {
    // This line grabs the input from the textbox
   // var topic = $("#emotionInput").val().trim();
   
    var buttonText = $(this).text();
   search(buttonText);
  });
 
  // This function handles events where one button is clicked
  $("#addEmotion").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var topic = $("#emotionInput").val().trim();

    // Adding the emotion from the textbox to our array
    topics.push(topic);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

  });


    renderButtons();




// $(function () {
//   populateButtons(topics, "searchButton", "#buttonsArea");
//   console.log("Page Loaded");
// })

// //searchArray is equal to topics 

// var topics = ["happy", "joyful", "surprised", "impressed", "sad", "upset", "grateful", "disgusted", "shocked", "angry", "annoyed", "bored", "ecstatic"]

// function populateButtons(topics, classToAdd, areaToAddTo) {
//   $(areaToAddTo).empty();
//   for (var i = 0; i < topics.length; i++) {
//     var a = $("<button>");
//     a.addClass(classToAdd);
//     a.attr("data-type", topics[i]);
//     a.text(topics[i]);
//     $(areaToAddTo).append(a);
//   }
// }

// $(document).on("click", ".searchButton", function(){
// var type = $(this).data("type");
// console.log(type)
// })