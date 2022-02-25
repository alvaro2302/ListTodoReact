import React from "react";
import './TodoCounter.css';
import { TodoContext } from "../TodoContext";
const estilos={
   color: 'red',
   backgroundColor: 'yellow',
};

function TodoCounter(){
const {counterTaskDone:completed, tareas:all} = React.useContext(TodoContext);
 return(
    <h2 className="TodoCounter"> had completedss {completed} from {all} all list</h2>
 )
}

export {TodoCounter};