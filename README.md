# AppMascotas

# 🐾 Patitas al Rescate
### Descripción
Patitas al Rescate es una plataforma diseñada para conectar a dueños de mascotas perdidas con rescatistas, resolviendo la falta de efectividad en los métodos tradicionales. La aplicación permite registrar mascotas, publicar anuncios, y recibir notificaciones inmediatas cuando se encuentra una coincidencia.

### Propósito
* Facilitar la búsqueda y rescate de mascotas perdidas mediante una plataforma centralizada y eficiente.
* Proteger la información sensible de los usuarios.

### Funcionalidades
##### Registro de usuarios y mascotas:
* Permite a los usuarios crear cuentas y registrar información de sus mascotas.

##### Publicación de anuncios:
* Publicar mascotas perdidas o encontradas con detalles como nombre, descripción, última ubicación y foto.

##### Notificaciones:
* Enviar alertas automáticas a los usuarios interesados sobre nuevas publicaciones relevantes.

##### Consulta de anuncios:
* Búsqueda de mascotas perdidas o encontradas por ubicación o tipo de mascota.

### Tecnologías Utilizadas
* Frontend: Angular con TypeScript.
* Backend: Java (Spring Boot) para API REST.
* Base de datos: MySQL Server.
* Control de versiones: Git (repositorio en GitHub).

#### Entorno de desarrollo:
* Visual Studio Code (frontend).
* Apache NetBeans (backend).

#### Requisitos del sistema
* Dispositivo con conexión a Internet.
* Navegador web moderno para acceder al frontend.
* Servidor con soporte para Java y MySQL para desplegar el backend.

### Instalación y Configuración
#### Pasos para levantar el proyecto
1- Clonar o descargar el proyecto:
Clona el repositorio desde GitHub o descarga el código fuente como archivo ZIP:
* git clone https://github.com/edgardo90/appMascotas-Angular.git
Descomprime el archivo ZIP en caso de haberlo descargado.

2- Configurar la base de datos MySQL
* Crea una base de datos en MySQL para el proyecto.
* Abre el archivo application.properties ubicado en el directorio src/main/resources/.
* Configura las credenciales y parámetros de conexión de la base de datos
* spring.datasource.url=jdbc:mysql://localhost:3306/nombre_de_tu_base_de_datos
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña

3- Abrir el proyecto en un editor de código:
Utiliza un editor como Apache NetBeans para abrir el proyecto del backend. Asegúrate de importar correctamente el proyecto si estás utilizando Maven.

4- Configurar el editor de código
Configura el entorno del editor para usar JDK 11 como la versión de Java:
* En Apache NetBeans: Ve a Tools > Java Platforms y selecciona JDK 11.
* Configura el proyecto para utilizar esta versión en sus propiedades.

5- Ejecutar el proyecto
* Corre el servidor desde NetBeans o usa Maven en la línea de comandos
* mvn spring-boot:run

### Arquitectura
El sistema utiliza una arquitectura cliente-servidor con los siguientes módulos principales:

##### Frontend:
Proporciona la interfaz gráfica para los usuarios.
Se comunica con el backend mediante servicios REST.

##### Backend:
Implementa la lógica del negocio y gestiona la interacción con la base de datos.

##### Base de datos:
Almacena información de usuarios, mascotas y anuncios.

##### Servicios REST: 
Actúan como puente de comunicación entre el frontend y el backend.

### Equipo
Desarrollado por el grupo Monster Developer:

* Edgardo Gonzalez
* Soledad Mello da Silva
* Claudia Casalone
* Jean Bracho
* Juan La Terra
* Sergio Benitez
