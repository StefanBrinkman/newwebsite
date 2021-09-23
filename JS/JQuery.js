$(document).ready(function(){
    $(".navbutton").hover(function(){
        $(this).css("background-color", "#64bbf1");
        $(this).css("color", "#ffffff");
        $(this).css("font-weight", "bold");
        }, function(){
        $(this).css("background-color", "#87cefa");
        $(this).css("color", "#000000");
        $(this).css("font-weight", "unset");
      });

      $(".imgvid").hover(function(){
        $(this).css({"width": "40%", "height": "auto", "transition-duration": "1s", "margin-top": "2%"});
        }, function(){
        $(this).css({"width": "30%", "height": "auto"});
      });
      
      $(".imgshow").hover(function(){
        $(this).css({"width": "40%", "height": "auto", "transition-duration": "1s"});
        }, function(){
        $(this).css({"width": "30%", "height": "auto"});
      });
});