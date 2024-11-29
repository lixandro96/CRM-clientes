# CRM de Clientes

Este proyecto es un CRM básico desarrollado con **JavaScript**, **HTML**, y **CSS**, que permite gestionar información de clientes de manera sencilla. Utiliza **JSON-Server** como backend para simular una API REST y escucha en el puerto `4000`.

## 🚀 **Características**

- **Agregar clientes:** Registra información básica como:
  - Nombre
  - Correo electrónico
  - Teléfono
  - Empresa
- **Editar clientes:** Modifica los datos de clientes existentes.
- **Eliminar clientes:** Elimina un cliente del registro.
- **Consultar clientes:** Obtiene y muestra la lista de clientes desde el servidor.

## ⚙️ **Requisitos**

- **JSON-Server** configurado y en ejecución en el puerto `4000`.
- Endpoint principal: [http://localhost:4000/clientes](http://localhost:4000/clientes).
- Navegador web moderno para ejecutar la interfaz.

## 🛠️ **Instalación**

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/tu-lixandro96/CRM-clientes.git
   cd crm-clientes
2. **Instala JSON-Server (si no lo tienes): npm install -g json-server
3. Inicia JSON-Server: json-server --watch db.json --port 40000
4. Ejecuta la aplicación: Abre el archivo index.html en tu navegador.

📚 Estructura del Proyecto
HTML: Define la estructura de la aplicación.
CSS: Proporciona el diseño y la presentación visual.
JavaScript: Gestiona la lógica de la aplicación y las operaciones CRUD.
🌐 ##Funcionamiento del Endpoint
**GET: http://localhost:4000/clientes
Obtiene la lista de clientes en formato JSON.

**POST: http://localhost:4000/clientes
Agrega un nuevo cliente enviando un objeto JSON.

**PUT: http://localhost:4000/clientes/:id
Actualiza un cliente existente, identificado por su id.

**DELETE: http://localhost:4000/clientes/:id
Elimina un cliente específico, identificado por su id.

📋 ###Notas
Este proyecto está diseñado para fines educativos.
Asegúrate de que JSON-Server esté ejecutándose antes de usar la aplicación.
El archivo db.json actúa como base de datos para JSON-Server.
