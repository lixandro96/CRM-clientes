import { mensajeAlerta } from './funciones.js';
import { nuevCliente } from './API.js';

( function (){

  const formulario = document.querySelector('#formulario');
  formulario.addEventListener('submit', validarCliente);

  function validarCliente(e){
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    const cliente = {
      nombre,
      email,
      telefono,
      empresa
    }
    if(validar(cliente)){
      mensajeAlerta('Todos los campos son obligatorios')
      return;
    }
   nuevCliente(cliente);

  }

  function validar(obj){
    return !Object.values(obj).every(input => input !== '');
  }

})()

