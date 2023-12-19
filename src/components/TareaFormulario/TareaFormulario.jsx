import './TareaFormulario.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (props) => {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // console.log('Enviando Formulario...');
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    setInput(''); // Borro el valor del input
  };

  return (
    <form
      className='taskForm'
      onSubmit={manejarEnvio}
    >
      <input
        className='taskInput'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        value={input} // Agrego el valor del input
        onChange={manejarCambio}
      />
      <button className='taskButton'>Agregar tarea</button>
    </form>
  );
};

export default TareaFormulario;
