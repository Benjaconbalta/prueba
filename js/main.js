$(document).ready(function(){
 
  $(".tab").click(function(){
      $(".tab").removeClass("active");
      $(this).addClass("active");
  });

  $("#profile").click(function(){
    $("#profile_list").removeClass("hidden");
    $("#order_list").addClass("hidden")
  });

  $("#order").click(function(){
    $("#order_list").removeClass("hidden");
    $("#profile_list").addClass("hidden")
  });



})
