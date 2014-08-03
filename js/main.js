$(document).ready(function() {

//Changing albums, staying on same page.
  $("nav a").click(function(event) {

    event.preventDefault();
    var stayonPage = "." + $(this).attr("rel");
    console.log(stayonPage);

    $(".container").children().removeClass("currentPage");
    $(".pageOne img, .pageTwo img, .pageThree img").removeClass("getBig hide");
    $(stayonPage).addClass("currentPage");


  });

  $(".pageOne img").click(function(event) {

    event.preventDefault();
    var $getBig = $(this);
    $getBig.parent("a").siblings().children().toggleClass("hide");
    $getBig.toggleClass("getBig");

  });

  $(".pageTwo img").click(function(event) {

    event.preventDefault();
    var $getBig = $(this);
    $getBig.parent("a").siblings().children().toggleClass("hide");
    $getBig.toggleClass("getBig");

  });

  $(".pageThree img").click(function(event) {

  event.preventDefault();
  var $getBig = $(this);
  $getBig.parent("a").siblings().children().toggleClass("hide");
  $getBig.toggleClass("getBig");
});

});
