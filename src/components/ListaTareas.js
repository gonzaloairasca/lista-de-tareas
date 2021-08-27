import React, { useState } from "react";
import Formulario from "./Formulario";
import Tareas from "./Tareas";
function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (info) => {
    if (!info.text || /^\s*$/.test(info.text)) {
      return;
    }
    const LasTareas = [info, ...tareas];
    setTareas(LasTareas);
  };
  const tareaCompleta = (id) => {
    let actualizarComp = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.estaCompleta = !tarea.estaCompleta;
      }
      return tarea;
    });
    setTareas(actualizarComp);
  };
  const setActualizadoTarea = (tareaId, nuevoValor) => {
    if (!nuevoValor.text || /^\s*$/.test(nuevoValor.text)) {
      return;
    }
    setTareas((prev) =>
      prev.map((tarea) => (tarea.id = tareaId ? nuevoValor : tarea))
    );
  };
  const eliminarTarea = (id) => {
    const tareasActualizado = [...tareas].filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizado);
  };

  return (
    <div>
      <Formulario onSubmit={agregarTarea} />
      <Tareas
        tareaCompletada={tareaCompleta}
        tareas={tareas}
        eliminarTarea={eliminarTarea}
        setActualizadoTarea={setActualizadoTarea}
      />
    </div>
  );
}

export default ListaTareas;
