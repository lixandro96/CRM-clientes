import { eliminarCliente } from './API.js';
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