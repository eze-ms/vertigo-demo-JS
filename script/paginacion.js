$(document).ready(function() {
  // Llamamos a cargarBicicletas para obtener los productos
  cargarBicicletas();
});

function cargarProductosPorPagina(pagina) {
    
  // Calcular el rango de productos a mostrar en función de la página
  var productosPorPagina = 12;
  var startIndex = (pagina - 1) * productosPorPagina;
  var endIndex = startIndex + productosPorPagina;

  // Filtrar los productos para la página actual
  var productosPaginaActual = articulos.slice(startIndex, endIndex);
  console.log(productosPaginaActualz);

  // Generar y mostrar los productos
  generarProductos(productosPaginaActual, "#container_accesorios");


}

function obtenerParametroGET(nombreParametro) {
  var url = window.location.href;
  var parametros = (new URL(url)).searchParams;
  return parametros.get(nombreParametro);
}

function actualizarURL(pagina) {
  var nuevaURL = window.location.href.split('?')[0] + '?pagina=' + pagina;
  history.replaceState({}, '', nuevaURL);
}

function actualizarClaseActiva(pagina) {
  // Remover la clase 'active' de todos los elementos
  $('#container_indice li[data-page-url]').removeClass('active');

  // Agregar la clase 'active' al elemento de la página actual
  $('#container_indice li[data-page-url="' + pagina + '"]').addClass('active');
}


