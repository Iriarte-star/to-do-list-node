document.addEventListener('DOMContentLoaded', () => {
  const formTarea = document.getElementById('form-tarea');
  const inputTitulo = document.getElementById('titulo');
  const inputDescripcion = document.getElementById('descripcion');
  const listaTareas = document.getElementById('lista-tareas');

  formTarea.addEventListener('submit', async (event) => {
    event.preventDefault();

    const titulo = inputTitulo.value;
    const descripcion = inputDescripcion.value;

    try {
      const response = await fetch('/api/tareas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          titulo,
          descripcion,
          completada: false
        })
      });

      if (response.ok) {
        const nuevaTarea = await response.json();
        console.log('Tarea creada:', nuevaTarea);
        
        // Crear un nuevo elemento de lista para la tarea
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="titulo">${nuevaTarea.titulo}</span>
          <span class="descripcion">${nuevaTarea.descripcion}</span>
        `;
        
        listaTareas.appendChild(li);

        // Limpiar los campos de entrada
        inputTitulo.value = '';
        inputDescripcion.value = '';
      } else {
        console.error('Error al agregar la tarea:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  });
});
