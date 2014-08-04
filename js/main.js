$(document).ready(function() {

//Changing albums, staying on same page.
  $("nav a, .headTitle").click(function(event) {

    event.preventDefault();
    var stayonPage = "." + $(this).attr("rel");
    console.log(stayonPage);

    $(".container").children().removeClass("currentPage");
    //removes getBig and hide classes after clicking on new album
    $(".pageOne img, .pageTwo img, .pageThree img, h1").removeClass("getBig hide");
    $(stayonPage).addClass("currentPage");


  });

  //enlarge on click

  $(".pageOne img, .pageTwo img, .pageThree img").click(function(event) {

    event.preventDefault();
    var $getBig = $(this);
    $getBig.parent("a").siblings().children().toggleClass("hide");
    $getBig.toggleClass("getBig");

  });


});
