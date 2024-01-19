var articulos; // Variable global

// ARTICULOS RUNNING //
$.getJSON('script/articulos.json', function(data) {
  articulos = data.articulosRunning;
  generarProductos(articulos, "#container_accesorios");
});

function generarProductos(lista, donde) {
  // lista - array de objetos con la informacion de los productos
  // donde - valor del atributo id donde se generará la lista de productos

  var html = "<ul class='collection-list_items_accesorios'>";
  for (var i=0;i<lista.length; i++) {
    var arti = lista[i];
    html += `
    <li class="items_news">
      <a href="#">
          <div>
              <img class= "imagen_novedades" src='${arti.imagen}' alt= imagen_articulos/>
              <p class="descripion">${arti.descripcion}</p>
              <p class="price">${arti.precio}</p>
          </div>
      </a>
    </li>    
    `;
  }
  html += "</ul>";
  document.querySelector(donde).innerHTML = html;
}

// Llamar a la función marcas cuando se seleccionen los checkboxes
function filtro() {
  var checkboxes = document.getElementsByName('marca');
  var marcasSeleccionadas = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) {
      marcasSeleccionadas.push(checkbox.value);
    }
  }

  var coloresSeleccionados =[];
  var paletaDeColores = document.querySelectorAll(".palette-button");
  for (var i =0; i< paletaDeColores.length; i++) {
    var botonColor = paletaDeColores[i];
    if (botonColor.hasAttribute("data-checked")){
      coloresSeleccionados.push(botonColor.getAttribute("data-color"));
    }
  }  

  var articulosFiltrados = articulos.filter((articulo) => {

    if (marcasSeleccionadas.length>0)
    {
      if (!marcasSeleccionadas.includes(articulo.marca))
      return false;
    }
  
    if (coloresSeleccionados.length>0)
    {
      if (!coloresSeleccionados.includes(articulo.color))
      return false;
    }

    return true;
  });

  generarProductos(articulosFiltrados, "#container_accesorios");

  articulosFiltrados.forEach((articulo) => {
    console.log(articulo.id, articulo.marca, articulo.descripcion, articulo.precio, articulo.color, articulo.genero);
  });
}
