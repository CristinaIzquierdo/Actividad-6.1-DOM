window.addEventListener('DOMContentLoaded', (event) => {
  const id = function (id) {
    return document.getElementById(id);
  };
  let addLista = id('addLista');

  console.log('DOM fully loaded and parsed');

  addLista.addEventListener('click', addNewList);
});

//añade una nueva lista al documento html
function addNewList() {
  const main = document.getElementsByTagName('main')[0];
  const section = document.createElement('section');
  const unorderedList = document.createElement('ul');
  const btn = document.createElement('button');
  btn.textContent = 'Añadir tarea';
  //borde de la seccion, se puede quitar
  section.style.border = '1px solid red';
  main.appendChild(section);
  section.appendChild(unorderedList);
  const listName = prompt('Indica el nombre de la lista');
  const titleListName = document.createElement('p');
  titleListName.textContent = `Nombre de la lista: ${listName}`;
  unorderedList.appendChild(titleListName);
  unorderedList.appendChild(btn);
  //Cuando se clicke al boton 'Añadir tarea' se llama a addNewTask
  btn.addEventListener('click', addNewTask);
}

function addNewTask() {
  const li = document.createElement('li');
  const taskName = prompt('Indica el nombre de la tarea');
  const task = document.createElement('p');
  task.textContent = taskName;
  li.appendChild(task);
  //boton que permite añadir una tarea antes de la actual
  const btnBefore = document.createElement('button');
  btnBefore.textContent = 'Añadir antes';

  li.appendChild(btnBefore);
  //boton que permite añadir una tarea después de la actual
  const btnAfter = document.createElement('button');
  btnAfter.textContent = 'Añadir después';
  li.appendChild(btnAfter);
  this.parentNode.appendChild(li);
  //cuando se clickea el boton 'Añadir antes' se llama a addBefore
  btnBefore.addEventListener('click', addBefore);
  btnAfter.addEventListener('click', addAfter);

  function addBefore() {
    const taskName = prompt('Indica el nombre de la tarea');
    const task = document.createElement('p');
    task.textContent = taskName;
    li.insertBefore(task, this);
  }

  function addAfter() {
    const taskName = prompt('Indica el nombre de la tarea');
    const task = document.createElement('p');
    task.textContent = taskName;
    li.insertBefore(task, this.nextSibling);
  }
}

//si se pulsa el boton, se añade una tarea depuess de la actual
function addAfter() {
  console.log('Despues');
}
