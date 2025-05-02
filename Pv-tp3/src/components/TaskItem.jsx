const TaskItem = ({ id, nombreTarea, estado, alternar, Eliminar }) => {
    return (
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            flex: 1,
            textDecoration: estado ? 'line-through' : 'none',
          }}
        >
          {nombreTarea}
        </span>
        <button onClick={() => alternar(id)} style={{ marginRight: '5px' }}>
          {estado ? 'Desmarcar' : 'Realizada'}
        </button>
        <button onClick={() => Eliminar(id)}>Eliminar</button>
      </div>
    );
  };
  
  export default TaskItem;