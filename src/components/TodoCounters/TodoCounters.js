import React from "react";
import './TodoCounter.css';
const estilos={
   color: 'red',
   backgroundColor: 'yellow',
};

function TodoCounter( {counterTaskDone,tareas,loading}){

 return(
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"  }`}> had completed {counterTaskDone} from {tareas} all list</h2>
 )
}

export {TodoCounter};