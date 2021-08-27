import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { AiOutlineEdit } from "react-icons/ai";
import Formulario from "./Formulario";

function Tareas({
  tareas,
  eliminarTarea,
  setActualizadoTarea,
  tareaCompletada,
}) {
  const [editar, setEditar] = useState({
    id: null,
    value: "",
  });
  const actualizarTarea = (value) => {
    setActualizadoTarea(editar.id, value);
    setEditar({
      id: null,
      value: "",
    });
  };
  if (editar.id) {
    return <Formulario editar={editar} onSubmit={actualizarTarea} />;
  }
  return tareas.map((tarea, index) => (
    <div className={tarea.estaCompleta ? "completa" : ""} key={index}>
      <div key={tarea.id} onClick={() => tareaCompletada(tarea.id)}>
        {tarea.text}
      </div>
      <div>
        <TiDeleteOutline onClick={() => eliminarTarea(tarea.id)} />
        <AiOutlineEdit
          onClick={() =>
            setEditar({
              id: tarea.id,
              value: tarea.text,
            })
          }
        />
      </div>
    </div>
  ));
}

export default Tareas;
