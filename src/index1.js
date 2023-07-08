// const Tarea = require('./models/tarea');
// const sequelize = require('./database');

// async function insertarTarea() {
//   try {
//     await sequelize.sync(); // Sincronizar el modelo con la base de datos

//     // Crear una nueva tarea
//     // const nuevaTarea = await Tarea.create({
//     //   titulo: 'cobrar',
//     //   descripcion: 'nerdsonsite',
//     //   completada: true
//     // });

//     console.log('Tarea creada:', nuevaTarea.toJSON());
//   } catch (error) {
//     console.error('Error al insertar la tarea:', error);
//   } finally {
//     await sequelize.close(); // Cerrar la conexión a la base de datos
//   }
// }

// // Llamar a la función para insertar una nueva tarea
// insertarTarea();
