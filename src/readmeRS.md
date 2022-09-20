# Red Social - Healthy Food Lovers

## Índice
* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo](#2-prototipo-de-alta-fidelidad)

## 1. Resumen del proyecto
    El proyecto está enfocado a usuarios amantes de la comida saludable, en esta app, van a poder ver y compartir tips y recetas enfocada a la comida saludable.

## 2. Historias de usuario

### HU - Crear  vistas (SPA) de la app
    Como Usuario de la app
    Quiero tener acceso a la app
    Para pertenecer a la red social

- Criterios de Aceptación:

    El usuario al ingresar a la app verá las opciones de iniciar sesion y registrarse
    Al escoger la opción iniciar sesion lo lleve a la vista de login

- Definición de terminado:

    El usuario al ingresar a la app pueda ver y escoger las opciones de loguearse y registrarse
    Al presionar iniciar sesion lo redireccione al login

### HU. Iniciar Sesión de usuario
    Como nuevo usuario de Healthy Food Lover
    Quiero poder iniciar sesión en la red social
    Para poder ingresar a la app

    - Criterios de aceptación:

    El usuario debe poder ingresar su correo y contraseña.
    Los datos ingresados tienen que ser validados en el formulario de login.
    Si el usuario ingresa contraseña incorrecta contraseña debe ver un mensaje de error.
    Despues de iniciar sesión debe ingresar a Home.

    - Definición de terminado:

    Debe ser una SPA.
    Debe ser responsive.
    Debe haber recibido code review de al menos una compañera de otro equipo.
    Hacer los test unitarios
    Testear manualmente buscando errores e imperfecciones simples.
    Hacer pruebas de usabilidad e incorporar el feedback de los usuarios como mejoras.

 ### HU-Iniciar sesión con Google
    Como usuario de amante de la comida saludable
    Quiero poder iniciar sesión con mi cuenta de google
    Para tener acceso a la app.

    - Criterios de aceptación:

    Al ingresar a la app debe ver el botón de iniciar sesión y presionar para que lo lleve a la vista de login.
    Cuando el usuario acceda a la vista de Login, tendrá que ver un botón de iniciar sesión con google.
    Al presionar el botón de iniciar sesión con google, aparecerá un modal con las cuentas de google disponibles.
    Cuando el usuario escoja el correo con el que quiere iniciar sesión, accede a la vista home de las publicaciones.

    - Definición de terminado:

    El usuario accede a home cuando inicie sesión por medio de google.

 ### HU: Registro de usuario nuevo
    Como nuevo usuario de Healthy Food Lover
    Quiero poder registrarme en la red social
    Para compartir tip de comida saludable

    - Criterios de aceptación:

    El usuario debe poder ingresar su nombre, correo y contraseña.
    El correo con el que se registre debe ser válido.
    La contraseña debe de ser min 6 caracteres
    El usuario debe ser redireccionado a login para ingresar a la app.

    - Definición de terminado:

    Debe ser una SPA.
    Debe ser responsive.
    Debe haber recibido code review de al menos una compañera de otro equipo.
    Hacer los test unitarios
    Testear manualmente buscando errores e imperfecciones simples.
    Hacer pruebas de usabilidad e incorporar el feedback de los usuarios como mejoras.

### HU - Ingresar a Home
    Como Usuario que inicia sesión en la aplicación (HFL)
    Quiero poder entrar a la vista de publicación
    Para poder ver otras publicaciones.

    - Criterios de aceptación:

    Al ingresar a publicaciones, se debe verificar si el usuario está logueado antes de mostrar contenido.
    Si el usuario no esta logeado, no deberia ingresar a las publicaciones.

    - Definición de Terminado
    Cuando el usuario pueda, después de logearse, ingresar a la vista de publicaciones y poder ver las publicaciones de otros usuarios.

### HU - Crear publicaciones del propio usuario
    Como usuario de la app
    Quiero crear publicaciones
    Para compartirla con otros usuarios

    - Criterios de aceptación

    Que el usuario al ingresar a home(post) pueda ver un campo para crear publicaciones.
    Que el usuario pueda ver un botón para publicar.
    Que el usuario pueda ingresar un texto.
    Que el usuario cuando presione el botón publicar, el texto ingresado sea guardado en una colección de Firestore.
    Que el usuario pueda ver sus publicaciones.

    - Definición de terminado

    Cuando el usuario puede ver la publicación que creó.
    Al publicar, se debe validar que exista contenido en el input.

 ### HU - Ver publicaciones de todos los usuarios en Home
    Como de la App de Healthy food Lovers
    Quiero ver todas las publicaciones
    Para leer las publicaciones de otros usuarios.

    - Criterios de Aceptación:

    Que cada publicación tenga el nombre del propio usuario.
    Que el usuario que inicio sesion también vea sus propias publicaciones.
    Que la publicación mas reciente sea la primera en mostrarse.

    - Definición de Terminado:

### HU - Poder Editar la publicación del propio usuario
    Al dar click para editar un post, debe cambiar el texto por un input que permita editar el texto y luego guardar los cambios.
    Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la información editada.
    Al recargar la página debo de poder ver los textos editados.

### HU - Eliminar publicación del propio usuario
    Poder eliminar un post específico.
    Pedir confirmación antes de eliminar un post.

## 3. Prototipo de alta fidelidad
-Prototipo de alta fidelidad: 
* Web
[](imgReadme/Prototipo%20RS-mobile.png)
* Mobile
[](imgReadme/Prototipo%20RS-web.png)
