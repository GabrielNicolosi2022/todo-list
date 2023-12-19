import './Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) => {
  return (
    <div
      className={completada ? 'taskContainer completed' : 'taskContainer'}
    >
      <div
        className='taskText'
        onClick={() => completarTarea(id)}
      >
        {texto}
      </div>

      <div
        className='taskContainerIcons'
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className='taskIcon' />
      </div>
    </div>
  );
};

export default Tarea;
