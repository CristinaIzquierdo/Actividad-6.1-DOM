window.addEventListener('DOMContentLoaded', (event) => {
  const id = function (id) {
    return document.getElementById(id);
  };
  let btnText = id('btnText'),
    btnPass = id('btnPass'),
    txtArea = id('txtArea'),
    label = id('label'),
    image = id('image'),
    check = id('check'),
    radio = id('radio'),
    btnSubmit = id('btnSubmit');

  console.log('DOM fully loaded and parsed');

  btnText.addEventListener('click', addInputText);
  btnPass.addEventListener('click', addInputPass);
  txtArea.addEventListener('click', addTextArea);
  label.addEventListener('click', addLabel);
  image.addEventListener('click', addImagen);
  check.addEventListener('click', addCheckbox);
  radio.addEventListener('click', addRadio);
  btnSubmit.addEventListener('click', addBtnSubmit);
});

function addInputText() {
  //creates a input text in the form
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  const nameAtt = prompt('Nombre del atributo (name)');
  input.setAttribute('name', nameAtt);
  input.setAttribute('id', nameAtt);
  input.setAttribute('placeholder', 'Escribe algo...');
  document.getElementById('form').appendChild(input);
}

function addInputPass() {
  //creates a input password in the form
  const input = document.createElement('input');
  input.setAttribute('type', 'password');
  const nameAtt = prompt('Nombre del atributo (name)');
  input.setAttribute('name', nameAtt);
  input.setAttribute('id', 'inputPass');
  input.setAttribute('placeholder', 'Escribe la contraseña...');
  document.getElementById('form').appendChild(input);
}

function addTextArea() {
  //creates a text area in the form
  const textArea = document.createElement('textarea');
  textArea.setAttribute('name', 'textArea');
  textArea.setAttribute('id', 'textArea');
  const nombre = prompt('Escribe tu nombre');
  textArea.setAttribute('placeholder', nombre);
  textArea.setAttribute('rows', '5');
  textArea.setAttribute('cols', '40');
  document.getElementById('form').appendChild(textArea);
}

function addLabel() {
  const input = prompt('Indica a qué input va referido (for atributte)');
  //Finds the input with the id
  const inputRef = document.getElementById(input);
  if (inputRef) {
    const label = document.createElement('label');
    label.setAttribute('for', input);
    const labelText = prompt('Escribe el texto del label');
    label.innerHTML = labelText;
    document.getElementById('form').insertBefore(label, inputRef);
  } else {
    alert('No se encontró el input');
  }
}

function addImagen() {
  const srcImage = prompt('Escribe la url de la imagen');
  const img = document.createElement('img');
  img.setAttribute('src', srcImage);
  img.setAttribute('alt', 'Imagen');
  document.getElementById('form').appendChild(img);
}

function addCheckbox() {
  const nombre = prompt('Escribe el nombre del checkbox');
  const valor = prompt('Escribe el valor del checkbox');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('name', nombre);
  checkbox.setAttribute('value', valor);
  document.getElementById('form').appendChild(checkbox);
}

function addRadio() {
  const nombre = prompt('Escribe el nombre del radio');
  const valor = prompt('Escribe el valor del radio');
  const radio = document.createElement('input');
  radio.setAttribute('type', 'radio');
  radio.setAttribute('name', nombre);
  radio.setAttribute('value', valor);
  document.getElementById('form').appendChild(radio);
}

function addBtnSubmit() {
  const btn = document.createElement('input');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', 'Enviar');
  document.getElementById('form').appendChild(btn);
}
