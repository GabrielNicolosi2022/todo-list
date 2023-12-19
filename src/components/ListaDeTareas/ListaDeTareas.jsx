import { useEffect, useState } from 'react';
import TareaFormulario from '../TareaFormulario/TareaFormulario';
import './ListaDeTareas.css';
import Tarea from '../Tarea/Tarea';
import { Firma } from '../Firma/Firma';

const ListaDeTareas = () => {
  // Obtener tareas desde localStorage al cargar el componente
  const [tareas, setTareas] = useState(() => {
    const storedTareas = localStorage.getItem('tareas');
    return storedTareas ? JSON.parse(storedTareas) : [];
  });

  // Almacenar tareas en el localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea) => {
    // console.log('Tarea agregada');
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='taskListContainer'>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
        <Firma />
      </div>
    </>
  );
};

export default ListaDeTareas;
