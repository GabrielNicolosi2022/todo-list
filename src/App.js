import './App.css';
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas';
import LogoOncemil from './components/LogoOncemil/LogoOncemil';
function App() {
  return (
    <div className='App'>
      <LogoOncemil />
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
