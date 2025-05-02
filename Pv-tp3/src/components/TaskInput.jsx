import { useState } from 'react';

const TaskInput = ({ agregarNtarea }) => {
    const [nuevaTarea, setnuevaTarea] = useState('');

    const Agregar = (e) => {
        e.preventDefault();
        if (nuevaTarea.trim() === '') return;


        const tarea = {
            id: Date.now(),
            nombreTarea: nuevaTarea,
        };

        agregarNtarea(tarea);
        setnuevaTarea('');
    };

    return (
        <form onSubmit={Agregar}>
            <input
                type="text"
                placeholder="Escribe una nueva tarea"
                value={nuevaTarea}
                onChange={(e) => setnuevaTarea(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

export default TaskInput;
