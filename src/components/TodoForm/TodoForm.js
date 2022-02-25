import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm()
{
    const [textTask,setTexTask] = React.useState('');
    const {
        addTask,
        setOpenModal
    } = React.useContext(TodoContext)

    const WriteText = (event)=>{
        const valueChanged = event.target.value;
        setTexTask(valueChanged);
    }
    const OnCancel = ()=>{
        setOpenModal(false);
    }

    const OnSubmit = (event)=>{
        event.preventDefault();
        addTask(textTask);
        setOpenModal(false);
        
    }
    return(

        
       <form onSubmit={OnSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
         placeholder="Cortar la cebolla en el almuerzo"
         value={textTask}
         onChange={WriteText}
        />
        <div className="TodoForm-buttonContainer ">
            <button
             type="button"
             className="TodoForm-button TodoForm-button-cancel "
             onClick={OnCancel}
            >
                cancel
            </button>  
            <button
             className="TodoForm-button TodoForm-button-add"
             type="submit"
            >
                Añadir
            </button>    
        </div>
       </form>
    )
}
export {TodoForm}