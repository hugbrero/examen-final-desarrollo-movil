# Examen Final - Desarrollo Móvil

Aplicación móvil desarrollada con **Ionic + Angular (standalone)** como parte del examen final del curso de Desarrollo Móvil.

## Descripción general

La aplicación implementa un flujo de autenticación básico y una sección interna protegida:

- Pantalla de **Login** con **formulario reactivo**.
- **Única llamada HTTP** al iniciar sesión.
- Uso de **AuthGuard (CanActivate)** para proteger la ruta `/home`.
- Sección interna con:
  - Página **Home**.
  - Página hija **Perfil**, accesible desde `/home/perfil`.
- En la página de **Perfil** se utiliza otro **formulario reactivo** que al enviarse imprime la información en la **consola del navegador**.

---

## Estructura principal del proyecto

```text
src/
  app/
    app.component.ts
    app.component.html
    app.config.ts
    app.routes.ts

    core/
      auth/
        auth.service.ts
        auth.guard.ts

    pages/
      login/
        login.page.ts
        login.page.html
        login.page.scss
      home/
        home.page.ts
        home.page.html
        home.page.scss
      profile/
        profile.page.ts
        profile.page.html
        profile.page.scss
---
## Funcionalidades implementadas

## 1. Formulario de Login

### Campos:

- Correo electrónico

- Contraseña

### Validaciones:

- Ambos campos son obligatorios.

- El correo debe tener formato válido.

- La contraseña requiere una longitud mínima.

### Al hacer submit:

- Se realiza la única llamada HTTP del proyecto:

- Método POST hacia /auth/login.

- Si la respuesta es correcta, se guarda un token en localStorage y se navega hacia /home.

- Si la respuesta es inválida, se muestra un mensaje de error (toast).

## 2. Servicio de autenticación (AuthService)
Métodos:

- login(email, password): realiza la petición HTTP y guarda el token.

- logout(): elimina el token del localStorage.

- isAuthenticated(): verifica si existe un token almacenado.

## 3. Guard de autenticación (authGuard)

- Implementado con CanActivateFn.

- Verifica authService.isAuthenticated().

- Si el usuario no está autenticado:

- Redirige a /login.

- Si el usuario sí está autenticado:

- Permite el acceso a /home y sus rutas hijas.

## 4. Sección interna protegida (/home)

###Ruta protegida por authGuard.

Contiene:

- Botón Cerrar sesión que ejecuta logout() y redirige a /login.

- Enlace a la ruta hija /home/perfil.

## 5. Formulario de Perfil (/home/perfil)

- Campos:

- Nombre

- Apellido

- Correo electrónico

- Todos son obligatorios; el correo valida formato.

- Al enviar el formulario:

- No se hace llamada HTTP.

- Se imprime el objeto con los datos en la consola del navegador.

## Instalación y ejecución

### Clonar el repositorio
git clone https://github.com/hugbrero/examen-final-desarrollo-movil.git
cd examen-final-desarrollo-movil

### Instalar dependencias
npm install

#### Ejecutar en modo desarrollo
ionic serve

### Luego abrir en el navegador:

http://localhost:8100/login