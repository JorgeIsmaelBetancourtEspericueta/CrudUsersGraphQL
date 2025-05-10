Este proyecto consiste en una API GraphQL para gestionar un directorio de personas con operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Cada persona registrada cuenta con un nombre y un correo electrónico, 
el cual es validado para asegurar que tenga un formato correcto.

Se utiliza Firebase Firestore como base de datos para almacenar la información de los usuarios, y la API está diseñada para ser sencilla gracias al uso de GraphQL.

Entre las funcionalidades principales se encuentran:

- Obtener todos los usuarios.
- Obtener un usuario por ID.
- Crear un nuevo usuario con nombre y correo.
- Actualizar nombre y/o correo de un usuario.
- Eliminar un usuario del directorio.

El sistema incluye una función de validación para asegurar que los correos ingresados tengan un formato válido antes de almacenarlos o actualizarlos.
