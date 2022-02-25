import React from "react";
import {TodoCounter} from "../components/TodoCounters/TodoCounters";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateButton } from "../components/CreateButton/CreateButton";
import  {TodoContext} from "../components/TodoContext";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";

function UIAppTask()
{
  const { 
    error,
    loading,
    resultSearch,
    CompletedTask,
    eliminatedTask,
    tareas,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext); 
    return(
        
    <React.Fragment>
      <TodoCounter

      />
      <TodoSearch
        
      />
     
     <TodoList>
            {error && <p>Algo salio mal ;(</p>}
            {loading && <p>estamos cargando  no deseperes</p>}
            {(!loading && !tareas) && <p>Crea tu primer Tarea</p>}
            {resultSearch.map((todo,i) =>(
              <TodoItem 
                key={todo.text} 
                text ={todo.text}
                completed = {todo.completed}
                OnComplete = {()=>CompletedTask(todo.text, todo.completed)}  
                OnDelete = { ()=>eliminatedTask(i)}
              />
            ))}
      </TodoList>
      {
        openModal && (
        <Modal>
          <TodoForm/>
        </Modal>)
      }
     
     
      <CreateButton
        setOpenModal = {setOpenModal}
       
      />
      
    </React.Fragment>
    )

}

export {UIAppTask};