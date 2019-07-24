
//Test
// var title = "space+jam";
// var queryURL = "https://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
//   console.log(response.Runtime);
// });

var topics = ["happy", "joyful", "surprised", "impressed", "sad", "upset", "grateful", "disgusted", "shocked", "angry", "annoyed", "bored", "ecstatic"]

//This is our API key
//var APIKey = "F9yiQBJ6Be6aqnrJV6fK66X9AVUQFrf3";

//var queryURL = 

//Looping through array of emotions
function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
      var a = $("<button>");
      a.text(topics[i]);
      $("#buttons").append(a);
    }
  }

 

  //The code below is malfunctioning (referenced Activity 8)
  // This function handles events where one button is clicked
  $("#addEmotion").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var topic = $("#emotionInput").val().trim();

    // Adding the movie from the textbox to our array
    topics.push(topic);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

  });


    renderButtons();