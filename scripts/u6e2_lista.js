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
  const box = document.getElementById('box');
  const section = document.createElement('section');
  const unorderedList = document.createElement('ul');

  const btn = document.createElement('button');
  btn.setAttribute('class', 'main');
  btn.textContent = 'Añadir tarea';
  btn.setAttribute('class', 'btAdd');
  //borde de la seccion, se puede quitar
  section.setAttribute('class', 'listaTarea');
  box.appendChild(section);
  section.appendChild(unorderedList);
  const listName = prompt('Indica el nombre de la lista');
  const titleListName = document.createElement('p');
  titleListName.textContent = `Nombre de la lista: ${listName}`;
  section.appendChild(titleListName);
  section.appendChild(btn);
  section.appendChild(unorderedList);
  unorderedList.addEventListener('dragover', onDragOver);
  unorderedList.addEventListener('drop', onDrop);
  //Cuando se clicke al boton 'Añadir tarea' se llama a addNewTask
  btn.addEventListener('click', addNewTask);
}

function addNewTask() {
  console.log(this.className);
  const li = createLi();
  if (this.className == 'before') {
    this.parentNode.insertAdjacentElement('beforebegin', li);
  } else if (this.className == 'after') {
    this.parentNode.insertAdjacentElement('afterend', li);
  } else {
    this.parentNode.lastChild.appendChild(li);
  }
}

function createLi() {
  const li = document.createElement('li');
  li.addEventListener('dragover', noAllowDrop);
  const taskName = prompt('Indica el nombre de la tarea');
  const task = document.createElement('p');
  task.textContent = taskName;
  //para poder hacer drag
  li.draggable = true;
  li.addEventListener('dragstart', onDragStart);
  li.appendChild(task);

  //boton que permite añadir una tarea antes de la actual
  const btnBefore = document.createElement('button');
  btnBefore.setAttribute('class', 'before');
  btnBefore.textContent = 'Añadir antes';
  btnBefore.addEventListener('click', addNewTask);
  li.appendChild(btnBefore);

  //boton que permite añadir una tarea después de la actual
  const btnAfter = document.createElement('button');
  btnAfter.setAttribute('class', 'after');

  btnAfter.textContent = 'Añadir después';
  btnAfter.addEventListener('click', addNewTask);
  li.appendChild(btnAfter);

  return li;
}

function onDragStart(event) {
  event.dataTransfer.effectAllowed = 'move';
  this.setAttribute('id', 'drag');
  event.dataTransfer.setData('clave', event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData('clave');
  event.target.appendChild(document.getElementById(data));
  document.getElementById(data).removeAttribute('id');
  event.dataTransfer.clearData();
}
function noAllowDrop(event) {
  event.stopPropagation();
}
