    // Set the date we're counting down to
    var countDownDate = new Date("Jun 26, 2021 17:00:00").getTime();
        
    // Update the count down every 1 second
    var countdownfunction = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Output the result in an element with id="demo"
        //document.getElementById("day").innerHTML = days + " д";
        //document.getElementById("hour").innerHTML = hours + " ч"
        //document.getElementById("minute").innerHTML = minutes + " м";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(countdownfunction);
            //document.getElementById("day").hide();
            document.getElementById("date").innerHTML = '<span class="note_timer">Набор открыт!</span>';
        } else {
            clearInterval(countdownfunction);
            document.getElementById("date").innerHTML = '<div id="day" class="day_training"><span></span> д</div><div id="hour" class="hour_training"><span></span> ч</div><div id="minute" class="minute_training"><span></span> м</div>';
            document.getElementById("day").innerHTML = days + " д";
            document.getElementById("hour").innerHTML = hours + " ч"
            document.getElementById("minute").innerHTML = minutes + " м";
            
        }
        
    }, 1000);
  

  
  
  
  
  
  
  
  
  