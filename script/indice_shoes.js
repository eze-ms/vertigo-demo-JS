$(document).ready(function() {
    $('#container_shoes').load("web/grupo_zapatillas_1.html");
   
     $("li > a").click(function(e) {
       e.preventDefault();
       var pageUrl = $(this).attr("data-page-url");
       $("#container_shoes").load(pageUrl);
     });
   
    
   });
   
   