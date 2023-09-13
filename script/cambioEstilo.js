$(document).ready(function(){
    $(".nav_item>a").hover(
        function(){ $(this).css("transform", "scale(1.1)"); },
        function(){ $(this).css("transform", ""); }
    );

    $(".heart,.bag").hover(
        function(){ $(this).css("transform", "scale(1.1)"); },
        function(){ $(this).css("transform", ""); }
    );


    $(".slider_prev, .slider_next").hover(
        function(){ $(this).css("transform", "scale(1.1)").css("background-color", "#ffffff").css("transition: .2s ease-in-out"); },
        function(){ $(this).css("transform", "").css("background-color", "").css("transition", ""); }
    );

})






