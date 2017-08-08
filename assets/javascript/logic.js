
      var topics = ["Pizza", "Burger", "Pasta", "Chicken"];

      //show initial buttons
      function renderButtons() {


        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {


          var a = $("<button>");
 
          a.addClass("food");
     
          a.attr("data-name", topics[i]);
  
          a.text(topics[i]);
       
          $("#buttons-view").append(a);
          console.log(a);
        }
      }

      //display gifs
      $(document).on("click", ".food", function() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10"


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          $("#gif-view").empty();
          for(var i = 0; i<response.data.length;i++)
          {
          var imageUrl = response.data[i].images.fixed_height_still.url;
          console.log(imageUrl);

          var image = $('<img>');
          image.attr("src", imageUrl);
          image.addClass("image");
          image.attr("alt", "food image");
          image.attr("data-animate", response.data[i].images.fixed_height.url);
          $('#gif-view').prepend(image);
        }
        });

      });

      //create new buttons
      $("#add-gif").on("click", function(event) {
        event.preventDefault();

        var addedGif = $("#gif-input").val().trim();
        console.log(addedGif);


        topics.push(addedGif);

        
        renderButtons();
      
      });

      $(document).on("click",".image", function(){
        var temp = $(this).attr("src");
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-animate", temp); 

    });


      
      $(document).ready(function(){
      renderButtons();
    });