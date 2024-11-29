import { eliminarCliente, editarCliente } from './API.js';
import { nombreInput, emailInput, telefonoInput, empresaInput, idInput } from './selectores.js';
export function mensajeAlerta(mensaje){

  const alerta  =  document.querySelector('.bg-red-100');

  if(!alerta){
    const alerta  =  document.createElement('P');
    alerta.className ='bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center';
    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block sm:inline">${mensaje}</span>
    `

    setTimeout(() => {
      alerta.remove();
    }, 3000);
    formulario.appendChild(alerta);
  }
}

export function confirmarEliminar(e){

  if(e.target.classList.contains('eliminar')){
    const clienteId = e.target.dataset.cliente  ;
    const confirmacion = confirm(`¿Estás seguro que deseas eliminar el cliente?`);

    if(confirmacion){
      eliminarCliente(clienteId)
    }
  }
}
export function mostrarCliente(cliente){


  const {nombre, email, telefono, empresa,id} = cliente;

  nombreInput.value = nombre;
  emailInput.value = email;
  telefonoInput.value = telefono;
  empresaInput.value = empresa;
  idInput.value = id;
  
}
export function validar(obj){
    return !Object.values(obj).every(input => input !== '');
}
export function validarClienteEdicion(e){
  e.preventDefault();

  const cliente = {
    nombre: nombreInput.value,
    email: emailInput.value,
    telefono: telefonoInput.value,
    empresa: empresaInput.value,
    id: idInput.value
  }
    
  if(validar(cliente)){
      mensajeAlerta('Todos los campos son obligatorios')
      return;
  }
  editarCliente(cliente)
}
