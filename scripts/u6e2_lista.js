document.addEventListener('DOMContentLoaded', iniciar);

function iniciar() {
  document.getElementById('addLista').addEventListener('click', addNewList);
}
function addNewList() {
  const main = document.getElementsByTagName('main')[0];
  const section = document.createElement('section');
  const unorderedList = document.createElement('ul');
  const btn = document.createElement('button');
  btn.textContent = 'Añadir elemento';
  //TODO: quitar linea (section with red borders)
  section.style.border = '1px solid red';
  main.appendChild(section);
  section.appendChild(unorderedList);
  //TODO: terminar
  const listName = prompt('Indica el nombre de la lista');
  unorderedList.appendChild(btn);
}
