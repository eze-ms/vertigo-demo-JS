function prueba(boton){

if (boton.hasAttribute ("data-checked")){
boton.removeAttribute ("data-checked");
}
else{
boton.setAttribute ("data-checked", "checked");
}
 filtro();

}
   