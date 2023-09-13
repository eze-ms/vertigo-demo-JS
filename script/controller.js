$(document).ready(function() {
    $(".box_controlador").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  
    $(".box_controlador_one").click(function() {
        var scrollAmount = $(".collection-list_items_news li:first-child").outerWidth(true);
        $(".list_news").animate({ scrollLeft: `-=${scrollAmount}` }, 1000); 
    });
    
    $(".box_controlador_two").click(function() {
        var scrollAmount = $(".collection-list_items_news li:first-child").outerWidth(true);
        $(".list_news").animate({ scrollLeft: `+=${scrollAmount}` }, 1000); 
        return false;
    });

    $(".fa-plus").click(function() {
      $(this).toggleClass("rotate-45");
    });
    
  
});

  
 

