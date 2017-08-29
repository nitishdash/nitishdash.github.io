$("#thisOne").mouseenter(function(){
    $("#thisOne").addClass("animated rubberBand");
});
$("#thisOne").mouseleave(function(){
  $("#thisOne").removeClass("animated rubberBand");
});
$("text").click(function(){
  $("text").hide();
});
