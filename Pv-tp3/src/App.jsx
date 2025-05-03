import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tareas, setTareas] = useState([]);
  
  const AñadirTarea = (tarea) => {
    setTareas((prev) => [...prev, tarea]);
  };
  
  const EstadoTarea = (id) => {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === id ? { ...tarea, estado: !tarea.estado } : tarea
      )
    );
  };
  
  const EliminarTarea = (id) => {
    setTareas((prev) => prev.filter((tarea) => tarea.id !== id));
  };
  
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskInput agregarNtarea={AñadirTarea} />
      <TaskList tareas={tareas} EstadTarea={EstadoTarea} ElimiTarea={EliminarTarea} />
    </div>
  );  
}

export default App;

