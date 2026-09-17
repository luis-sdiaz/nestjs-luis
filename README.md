# Proyecto Backend NestJS - API de Usuarios y Productos

Este es un proyecto académico de práctica desarrollado en NestJS para la gestión de una API REST. En este repositorio se implementan las operaciones CRUD (Crear, Leer, Actualizar y Eliminar) completas, utilizando arreglos en memoria como base de datos de prueba.

## 🚀 Características del Proyecto

El proyecto está estructurado en dos controladores principales que manejan toda la lógica de negocio y enrutamiento:

### 1. Módulo de Usuarios (`/users`)
Gestiona el registro y consulta de los usuarios del sistema, implementando buenas prácticas de validación.
* **GET** `/users`: Lista todos los usuarios registrados.
* **GET** `/users/:id`: Busca un usuario específico por su ID (maneja error si no existe).
* **GET** `/users/search/:name`: Consulta el correo electrónico de un usuario buscándolo por su nombre.
* **POST** `/users`: Registra un nuevo usuario. (Incluye lógica de validación para evitar registrar IDs o correos electrónicos duplicados).
* **PUT** `/users/:id`: Actualiza los datos de un usuario existente.
* **DELETE** `/users/:id`: Elimina un usuario por su ID, validando previamente su existencia en el sistema.

### 2. Módulo de Productos (`/productos`)
Gestiona el inventario de una tienda (precios manejados en COP). Incluye rutas específicas de filtrado antes de las rutas dinámicas para evitar conflictos de enrutamiento.
* **GET** `/productos`: Lista el inventario completo.
* **GET** `/productos/sin-stock`: Filtra y muestra únicamente los productos agotados (stock igual a 0).
* **GET** `/productos/vencidos`: Filtra los productos cuyo estado de vencimiento es verdadero.
* **GET** `/productos/categoria/:categoria`: Busca productos filtrando por su categoría (ej. Lácteos, Panadería).
* **GET** `/productos/:id`: Busca un producto específico por su ID.
* **POST** `/productos`: Agrega un nuevo producto al arreglo.
* **PUT** `/productos/:id`: Actualiza la información de un producto (ideal para modificar precios o reabastecer stock).
* **DELETE** `/productos/:id`: Elimina un producto del sistema.

## 🛠️ Tecnologías y Herramientas Utilizadas
* **Framework:** NestJS (TypeScript)
* **Testing de API:** Postman (Implementación de variables de entorno para aislar host y puerto).
* **Control de Versiones:** Git y GitHub.

## ⚙️ Cómo ejecutar este proyecto localmente

1. Clonar este repositorio en tu máquina local.
2. Abrir la terminal en la raíz del proyecto e instalar las dependencias necesarias:
   ```bash
   npm install
