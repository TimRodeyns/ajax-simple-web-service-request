$(document).ready(function() {

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://thatsthespir.it/api',
    timeout: 5000,
    success: function(data){
       var quote = data.quote;
         $(".quote").html(quote);
       console.log(quote);
    },
    fail: function(xhr, textStatus, errorThrown){
       alert('request failed');
    }
  });


});

/* $(document).ready(function(){
        $.ajax({

            url: "https://thatsthespir.it/api",
            dataType: "json",
            timeout: 10,
            complete: function(data){
                var response = data.responseJSON;
                var quote = response.quote;
                console.log("quote");

            }
        });
    });
*/
