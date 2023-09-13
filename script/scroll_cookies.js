$(document).ready(function() {
  var animacionEnMarcha = false;
  // Función para mostrar el bloque cookie
  function showBlockCookie() {
    if (animacionEnMarcha) return;
    animacionEnMarcha = true;
    $("#block_cookie").css({ left: '-670px', opacity: '0' }).animate({ left: '0', opacity: '1'}, 1000);
  }
  
  // Mostrar el bloque cookie al hacer scroll
  $(window).scroll(function() {
    if ($("#block_cookie").offset().left < 0) {
      showBlockCookie();
    }
  });

  // Ocultar el bloque cookie al presionar el boton "accept_cookie"
  $(".accept_cookie").click(function() {
    console.log('a');
    $("#block_cookie").fadeOut(500, function() {
      console.log('b');
      $(this).css({ left: '-570px', display: none });
    });
  });
});


