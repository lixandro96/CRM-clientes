
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