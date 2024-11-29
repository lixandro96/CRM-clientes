import { obtenerCliente } from './API.js';
import { mostrarCliente,validarClienteEdicion } from './funciones.js';

( function (){
    document.addEventListener('DOMContentLoaded', async() =>{
      const parametrosURL = new URLSearchParams(window.location.search); // obtener parametros de la url por ejemplo ?id=1
      const clienteId = parametrosURL.get('id'); // obtener el parametro id
      const cliente = await obtenerCliente(clienteId);
      mostrarCliente(cliente);
    });

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarClienteEdicion);
  }
)()