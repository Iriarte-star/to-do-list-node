const express = require('express');
const app = express();
const path = require('path');
const Tarea = require('./models/tarea');
const sequelize = require('./database');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Ruta para obtener todas las tareas
app.get('/api/tareas', async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.json(tareas);
  } catch (error) {
    console.error('Error al obtener las tareas:', error);
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// Ruta para agregar una nueva tarea
app.post('/api/tareas', async (req, res) => {
  const { titulo, descripcion, completada } = req.body;

  try {
    const nuevaTarea = await Tarea.create({
      titulo,
      descripcion,
      completada
    });

    res.json(nuevaTarea);
  } catch (error) {
    console.error('Error al agregar la tarea:', error);
    res.status(500).json({ error: 'Error al agregar la tarea' });
  }
});

const port = 3000;
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Servidor web iniciado en el puerto ${port}`);
  });
});
    