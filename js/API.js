const url = 'http://localhost:4000/clientes'

// crea un nuevo cliente
export const nuevCliente = cliente => {

  try {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    })
  
    window.location.href = 'index.html'
  } catch (error) {
    console.error(error)
  }
}

// obtener todos los clientes
export const  obtenerClientes = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    
  } catch(error){
    console.error(error)
  }
}

// Eliminar cliente
export const eliminarCliente = async id => {

  try {
    await fetch(`${url}/${id}`, {
      method: 'DELETE'
    })
    window.location.href = 'index.html'
  } catch (error) {
    console.log(error)
  }
}

export const obtenerCliente = async id => {
  try {
    const response = await fetch(`${url}/${id}`);
    const cliente = await response.json();
    return cliente;
  } catch (error) {
    console.error(error)
  } 
}

// actualiza un cliente
export const editarCliente = async cliente => {
  console.log(cliente);
  try {
    await fetch(`${url}/${cliente.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    });
    window.location.href = 'index.html'
  } catch (error) {
    console.error(error)
  }
};