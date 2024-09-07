# Donaciones de Dispositivos Electrónicos

## Descripción del Proyecto

El proyecto consiste en una aplicación web para gestionar donaciones de dispositivos electrónicos. La aplicación permite a los usuarios agregar dispositivos para donar, ver una lista de los dispositivos en donación y consultar información detallada sobre cada uno, incluyendo comentarios. Este sistema está diseñado utilizando HTML5, CSS3 y JavaScript para el manejo de formularios y validaciones en el frontend, sin requerir lógica del lado del servidor ni almacenamiento de datos persistente.

## Estructura del Proyecto

El proyecto se compone de las siguientes páginas y funcionalidades:

### 1. `index.html`

- **Descripción:** Página principal de la aplicación. Presenta una vista general con un encabezado, una sección principal con enlaces a otras páginas y un pie de página.
- **Características:**
  - **Encabezado:** Navegación con enlaces a las diferentes secciones de la aplicación.
  - **Sección Principal:** Contiene una breve descripción de la aplicación.
  - **Pie de Página:** Con un fondo claro y texto centrado.

### 2. `agregar-donacion.html`

- **Descripción:** Página que permite a los usuarios agregar información sobre dispositivos que desean donar.
- **Características:**
  - **Formulario de Donación:** Incluye campos para la información de contacto y detalles del dispositivo. Los campos se validan utilizando JavaScript para asegurar que se ingresen datos válidos. Además, se incluye un boton para agregar un nuevo dispositivo a la donación
  - **Validaciones:** Se verifican los campos obligatorios y se asegura que los datos ingresados sean correctos antes de permitir el envío del formulario, las validaciones a todo el formulario se actualiza dinámicamente para que los nuevos dispositivos también sean validados.

### 3. `ver-dispositivos.html`

- **Descripción:** Página que muestra una tabla con una lista de dispositivos donados.
- **Características:**
  - **Carga Dinámica:** Los datos de los dispositivos se cargan desde un archivo JSON y se muestran en una tabla HTML. Se utiliza JavaScript para manejar la carga dinámica de los datos.
  - **Interactividad:** Los usuarios pueden hacer clic en los dispositivos para ver más detalles en una página separada.

### 4. `informacion-dispositivo.html`

- **Descripción:** Página que muestra información detallada sobre un dispositivo específico, incluyendo comentarios.
- **Características:**
  - **Detalles del Dispositivo:** Muestra información del dispositivo en un formato organizado.
  - **Comentarios:** Sección para ver comentarios existentes y agregar nuevos comentarios. Los comentarios se muestran en un formato de div, y los nuevos comentarios se añaden dinámicamente sin actualizar el archivo JSON.
  - **Imágenes:** Las imágenes del dispositivo se muestran a 640x480 píxeles y se pueden expandir a 1280x1024 píxeles al hacer clic, utilizando un modal para la visualización ampliada.

## Decisiones y Detalles Técnicos

- **Estructura del Código:** El código HTML, CSS y JavaScript está separado en archivos distintos para una mejor organización y mantenimiento. Los archivos de estilo y script siguen un esquema de nombres en inglés sin espacios para mantener la coherencia.
- **Estilo y Diseño:** Se ha aplicado un diseño moderno y limpio, con una paleta de colores que incluye un encabezado azul (#2572df), y una sección principal con un máximo de 800px de ancho. Las fuentes están configuradas para Arial, sans-serif, y se utiliza un diseño con bordes redondeados y sombras para los contenedores.
- **Validación de Formularios:** Se implementaron validaciones para asegurar que todos los campos necesarios sean completados y que los datos ingresados sean correctos. Los errores de validación se muestran en mensajes específicos para cada campo, evitando mensajes globales innecesarios.
- **Carga Dinámica de Datos:** Los datos de los dispositivos se cargan desde un archivo JSON utilizando JavaScript. Se asegura que la carga y el manejo de datos sean eficientes y que los datos se presenten correctamente en la interfaz de usuario.
- **Comentarios Dinámicos:** Los comentarios se pueden agregar y mostrar sin necesidad de actualizar el archivo JSON, permitiendo que la interacción del usuario sea más fluida y rápida.

## Requisitos

- **Navegador Web:** La aplicación está diseñada para funcionar en los navegadores web modernos.
- **Archivos Necesarios:** Asegúrate de tener todos los archivos HTML, CSS y JavaScript necesarios en el directorio del proyecto.

## Instalación

1. Clona o descarga el repositorio.
2. Navega al directorio del proyecto en tu terminal.
3. Inicia un servidor local. Puedes usar Live Server en Visual Studio Code o cualquier otro servidor local.