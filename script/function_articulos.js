var articulos; // Variable global

$.getJSON('script/articulos.json', function(data) {
  articulos = data.articulosRunning;
  generarProductos(articulos, "#container_accesorios");
  drawChart();
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



// Llamar a la función marcascuando se seleccionen los checkboxes
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



// --- GOOGLE CHARTS --- //

// function drawChart() {
//   // Cargar la biblioteca de Google Charts
//   google.charts.load('current', { packages: ['corechart'] });

//   // Llamar a la función de dibujo después de que la biblioteca se haya cargado
//   google.charts.setOnLoadCallback(drawChartCallback);
// }

// // Función de devolución de llamada para dibujar el gráfico
// function drawChartCallback() {
//   // Crear un objeto de datos para el gráfico
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Marca');
//   data.addColumn('number', 'Cantidad');

//   // Calcular la cantidad de productos por marca
//   var marcas = {};
//   for (var i = 0; i < articulos.length; i++) {
//     var articulo = articulos[i];
//     if (marcas[articulo.marca]) {
//       marcas[articulo.marca]++;
//     } else {
//       marcas[articulo.marca] = 1;
//     }
//   }

//   // Agregar filas al objeto de datos
//   for (var marca in marcas) {
//     data.addRow([marca, marcas[marca]]);
//   }

//   // Configurar las opciones del gráfico
//   var options = {
//     title: 'Cantidad de productos por marca',
//     width: 400,
//     height: 300,
//   };

//   // Crear una instancia del gráfico de barras
//   var chart = new google.visualization.BarChart(document.getElementById('chart-container'));

//   // Dibujar el gráfico con los datos y opciones especificados
//   chart.draw(data, options);
// }
