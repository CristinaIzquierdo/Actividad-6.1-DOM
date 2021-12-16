//funcion que muestra cuantos parrafos tiene una pagina
function contarParrafos() {
  const numeroParrafos = document.getElementsByTagName('p').length;
  console.log('La página tiene ' + numeroParrafos + ' parrafos');
}

//funcion que muestra el texto del segundo parrafo
function mostrarTextoParrafo() {
  const parrafo = document.getElementsByTagName('p')[1];
  console.log('El texto del segundo párrafo es ' + parrafo.textContent);
}

//funcion que muestra el numero de a que tiene la pagina
function contarEnlaces() {
  const numeroEnlaces = document.getElementsByTagName('a').length;
  console.log('La página tiene ' + numeroEnlaces + ' enlaces');
}

//funcion que muestra la direccion a la que apunta el primer enlace
function mostrarLink() {
  const enlace = document.getElementsByTagName('a')[0];
  console.log('El primer enlace apunta a ' + enlace.href);
}

//funcion que muestra la direccion a la que apunta el penultimo enlace
function mostrarLinkPenultimo() {
  const link = document.getElementsByTagName('a');
  const enlace = link[link.length - 2];
  console.log('El penúltimo enlace apunta a ' + enlace.href);
}

//funcion que cuenta cuantos enlaces apuntan a 'https://www.cpifppiramide.com/'
function contarEnlacesPiramide() {
  const numeroEnlaces = document.getElementsByTagName('a');
  let contador = 0;
  for (let i = 0; i < numeroEnlaces.length; i++) {
    if (numeroEnlaces[i].href === 'https://www.cpifppiramide.com/') {
      contador++;
    }
  }
  console.log(
    'La página tiene ' + contador + ' enlaces a https://www.cpifppiramide.com/'
  );
}

//funcion que cuenta el numero de enlaces que hay en el segundo parrafo
function contarEnlacesParrafo() {
  const parrafo = document.getElementsByTagName('p')[1];
  const enlaces = parrafo.getElementsByTagName('a').length;
  console.log('El segundo parrafo tiene ' + enlaces + ' enlaces');
}

//ejecuta todas las funciones
function ejecutarTodo() {
  contarParrafos();
  mostrarTextoParrafo();
  contarEnlaces();
  mostrarLink();
  mostrarLinkPenultimo();
  contarEnlacesPiramide();
  contarEnlacesParrafo();
}
