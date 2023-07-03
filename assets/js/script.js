//A function to define the hour element and compare it to the set hour containers on the page.
$(function () {
    // Choosing each <div> element that has the class of time-block (this is the containers for the hours) and running the function through for each hour element.
    $(".time-block").each(function(){
    // Creating a variable for the numerical value of the hour-X id for these containers by identifying the id, splitting the hour and hour number with a hyphen, and isolating the hour number.
      var hour = parseInt($(this).attr("id").split("-")[1]);
      // Creating a variable for the current hour through DayJS
      var currentHour = dayjs().hour();
      // Comparing the current hour to the hours on the page, so the page will know what to display if the hour is past, present, or future.
      if (hour < currentHour){
        $(this).addClass('past');
      } else if (hour === currentHour){
        $(this).addClass('present');
      } else {
        $(this).addClass('future');
      }
    })
    // Defining a function for the save button to locally store the input text value of schedule items.
    $('.saveBtn').click(function(){
    // Defining a variable for the text box value, extracted through val(). The 'this' element refers to the button element that has the class .saveBtn which is a sibling of the save button element.
      var input = $(this).siblings('.description').val();
      // A variable to get the id of the time-block row element 
      var blockTime = $(this).parent().attr('id');
    //   console.log(blockTime);
    // Setting the text input to the local storage setting the key as the hour (blockTime variable), and value as the text input.
      localStorage.setItem(blockTime, input);
    });
    // A for loop to get the item back after refreshing in the right hour block. 
    for (var i = 9; i<18; i++){
      $('#hour-'+ i +' .description').val(localStorage.getItem('hour-'+ i));
    }
    // A function function to display the current date and day of the week through dayjs.
    $("#currentDay").text(dayjs().format("dddd MMMM D YYYY"));
  });
  