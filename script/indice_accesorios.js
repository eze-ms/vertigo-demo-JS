$(document).ready(function() {
    $('#container_accesorios').load("web/grupo_accesorios_1.html");
   
     $("li > a").click(function(e) {
       e.preventDefault();
       var pageUrl = $(this).attr("data-page-url");
       $("#container_accesorios").load(pageUrl);
     });
   
    
   });
   
   