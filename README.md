# Portfolio Profesional - Fullstack (Angular + Node.js)

Este repositorio contiene un portfolio personal interactivo desarrollado como una Single Page Application (SPA). El proyecto demuestra habilidades de desarrollo fullstack integrando un frontend moderno con Angular, un backend robusto en Node.js y persistencia de datos mediante PostgreSQL.

## 🚀 Características Principales

*   **Diseño Moderno y Responsivo:** Interfaz construida con un esquema de colores cálidos, efectos de "glassmorphism", gradientes profesionales y diseño adaptable a cualquier dispositivo móvil o de escritorio.
*   **Single Page Application (SPA):** Navegación fluida y sin recargas de página mediante scroll suave (*smooth scrolling*) con efecto *snap* entre las secciones de la página.
*   **Secciones Dinámicas:** La información mostrada en las secciones "Mis tecnologías", "Experiencia" y "Propósitos" provienen de la base de datos a través de peticiones HTTP a la API REST.
*   **Carrusel de Proyectos:** Sección "Mis Proyectos" con carrusel horizontal, scroll automático, flechas de navegación y modal tipo *lightbox* al hacer clic en cada proyecto con enlace directo a la sección de contacto.
*   **Formulario de Contacto:** Envío de mensajes integrado con base de datos propia a través de rutinas asíncronas.
*   **Favicon Personalizado:** Icono LF con gradiente naranja corporativo, visible en la pestaña del navegador.
*   **Gestión Proxy Angular:** Todas las peticiones del tipo `/api` son enrutadas transparentemente al backend a través de `proxy.conf.json` en local.

## 🛠️ Tecnologías Utilizadas

### Frontend
*   **Angular 18:** Framework SPA e inyección de dependencias.
*   **TypeScript:** Programación orientada a objetos fuerte y segura.
*   **SCSS / CSS:** Arquitectura de estilos basada en variables personalizadas, animaciones de `@keyframes` y diseños de Flexbox/Grid nativo.
*   **FontAwesome:** Sistema de iconografía moderno.

### Backend
*   **Node.js & Express:** Servidor para la API REST.
*   **TypeScript:** Tipado seguro de modelos y controladores.
*   **PostgreSQL (pg):** Motor y base de datos relacional.
*   **Docker & Docker Compose:** Inicialización auto-contenida y orquestación local para levantar base de datos en `localhost`.

## ⚙️ Estructura del Proyecto

El proyecto está dividido en dos módulos principales e independientes:
*   `/frontend`: Contiene el ecosistema de la aplicación Angular.
*   `/backend`: Contiene la API REST Node.js, configuraciones Docker local y scripts SQL de arranque.

## 💻 Instalación y Ejecución Local

### Prerrequisitos
*   [Node.js](https://nodejs.org/) (Recomendado v18 o superior)
*   [Docker](https://www.docker.com/) Desktop o Compose (para provisionar la base de datos PostgreSQL)

### 1. Levantar la Base de Datos (PostgreSQL)

Navega mediante tu shell favorita al directorio del backend y procesa el contenedor:

```bash
cd backend
docker-compose up -d
```
*Docker leerá la configuración, descargará la imagen `postgres:15-alpine`, expondrá el puerto 5432  y ejecutará automáticamente el script `database.sql` para crear las tablas y preparar datos de muestra iniciales (`seed data`).*

### 2. Configurar y Ejecutar el Backend

Sin salir de la carpeta `/backend`:

1.  Instala las dependencias del servidor:
    ```bash
    npm install
    ```
2.  Copia el archivo `.env.example` como `.env` en la raíz de `/backend` y rellena los valores de tu entorno local:
    ```env
    PORT=3000
    DB_USER=TU_USUARIO_POSTGRES
    DB_HOST=127.0.0.1
    DB_NAME=portfolio_db
    DB_PASSWORD=TU_CONTRASEÑA_AQUI
    DB_PORT=5432
    ```
3.  Inicia el servidor compilando y reaccionando a cambios con `ts-node`:
    ```bash
    npm run dev
    ```
*Verás un mensaje indicando que el servidor escucha en `http://localhost:3000` y está conectado a PostgreSQL.*

### 3. Configurar y Ejecutar el Frontend

Abre una nueva pestaña en tu terminal y dirígete al directorio frontend:

```bash
cd frontend
```

1.  Instala todas las dependencias y bibliotecas de Angular publicadas:
    ```bash
    npm install
    ```
2.  Inicia el servidor de desarrollo en vivo:
    ```bash
    npm start
    ```
*Entra en tu navegador en `http://localhost:4200`. La configuración conectará limpiamente la UI con tu API backend local.*


🔗 **Demo en vivo:** [https://lorena-fudel.github.io/portfolio/](https://lorena-fudel.github.io/portfolio/)

> **Nota:** En GitHub Pages solo el frontend es accesible. El backend y la base de datos son exclusivos del entorno local de desarrollo.

## 🛣️ Referencia Rápida a la API

*   `GET /api/technologies`: Lista todas tus tecnologías agrupadas (Backend, Frontend, DB).
*   `GET /api/experiences`: Historial de puestos y empleos, priorizando los activos.
*   `GET /api/goals`: Objetivos diferenciados por categoría (personales vs. profesionales).
*   `POST /api/contact`: Formato `{ name, email, subject, message }`. Almacena un registro de un potencial cliente.

## 👨‍💻 Autor

**Lorena Fumero** — Desarrolladora Fullstack  
🔗 [GitHub](https://github.com/lorena-fudel) · 📧 Contacto disponible a través del formulario del portfolio