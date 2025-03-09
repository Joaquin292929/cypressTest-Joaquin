# Cypress Test Project

Este proyecto contiene una aplicación web simple con un formulario de registro y una página de confirmación, junto con pruebas automatizadas utilizando Cypress.

## Requisitos

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación
 1. Clona el repositorio en tu máquina local:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   
 2. Navega al directorio del proyecto:
    cd cypressTest-Joaquin

 3. Instala las dependencias del proyecto:
    npm install


Ejecutar el Proyecto
Para abrir el proyecto en un servidor local, puedes usar un servidor como live-server o http-server. Por ejemplo, con live-server:
    npx live-server

Esto abrirá el proyecto en tu navegador predeterminado.

Ejecutar Pruebas de Cypress

Abrir Cypress
Para abrir la interfaz de Cypress, ejecuta el siguiente comando:
    npm run cy:open

Esto abrirá la interfaz de Cypress donde podrás seleccionar y ejecutar las pruebas.

Ejecutar Pruebas en la Terminal
Si prefieres ejecutar las pruebas en la terminal, puedes usar el siguiente comando:
    npx cypress run

Estructura del Proyecto
    registro.html: Contiene el formulario de registro.
    confirmacion.html: Muestra la página de confirmación después de un registro exitoso.
    styles.css: Contiene los estilos para las páginas HTML.
    script.js: Contiene la lógica de validación del formulario de registro.
    cypress.config.js: Configuración de Cypress.
    cypress/e2e: Contiene los archivos de pruebas E2E.
    completeFlow.cy.js: Prueba del flujo completo de registro.
    extremeCases.cy.js: Pruebas de casos extremos.
    formValidation.cy.js: Pruebas de validación de campos.
    pageLoad.cy.js: Prueba de carga de página.
    cypress/fixtures: Contiene datos de ejemplo para pruebas.
    cypress/support: Contiene archivos de soporte para pruebas E2E.
    package.json: Contiene la configuración del proyecto y las dependencias.
    package-lock.json: Archivo de bloqueo de dependencias.

Pruebas
Prueba de Carga de Página
Archivo: cypress/e2e/pageLoad.cy.js

Esta prueba verifica que la página de registro se carga correctamente y que todos los elementos necesarios están presentes.

Prueba de Validación de Campos
Archivo: cypress/e2e/formValidation.cy.js

Esta prueba verifica la validación de los campos del formulario, incluyendo errores para campos vacíos, formato de correo electrónico, requisitos de contraseña y coincidencia de contraseñas.

Prueba de Flujo Completo
Archivo: cypress/e2e/completeFlow.cy.js

Esta prueba verifica el flujo completo del formulario de registro hasta la página de confirmación.

Prueba de Casos Extremos
Archivo: cypress/e2e/extremeCases.cy.js

Esta prueba verifica valores límite para cada campo, intenta inyección de scripts y prueba caracteres especiales en los campos.