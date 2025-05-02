import TaskItem from './TaskItem';

const TaskList = ({ tareas, EstadTarea, ElimiTarea }) => {
  return (
    <div>
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          id={tarea.id}
          nombreTarea={tarea.nombreTarea}
          estado={tarea.estado}
          alternar={EstadTarea}
          Eliminar={ElimiTarea}
        />
      ))}
    </div>
  );
};

export default TaskList;
