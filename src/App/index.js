//import './App.css';
import React from "react";
import { useTodos } from "./useTodos";
import {TodoCounter} from "../components/TodoCounters/TodoCounters";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoList } from "../components/TodoList/TodoList";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { CreateButton } from "../components/CreateButton/CreateButton";
import { Modal } from "../components/Modal/Modal";
import { TodoForm } from "../components/TodoForm/TodoForm";
import { TodoHeader } from "../components/TodoHeader/TodoHeader";
import { TodosError } from "../components/TodosError/TodosError";
import { TodosLoading } from "../components/TodosLoading/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos/EmptyTodos";
import {Notifications} from '../components/Notifications/Notifications';
function App() {

  const { 
    error,
    loading,
    resultSearch,
    CompletedTask,
    eliminatedTask,
    tareas,
    openModal,
    setOpenModal,
    counterTaskDone,
    setSearchValue,
    searchValue,
    addTask,
    synchronizedItems
  } = useTodos(); 
  return(
        
    <React.Fragment>

      <TodoHeader loading= {loading}>
        <TodoCounter
          counterTaskDone = {counterTaskDone}
          tareas = {tareas}
          //loading = {loading}
        />
        <TodoSearch
          setSearchValue = {setSearchValue}
          searchValue = {searchValue}
          //loading = {loading}
        />
      </TodoHeader>
     
     <TodoList
       error = {error}
       loading = {loading}
       tareas = {tareas}
       searchText = {searchValue}
       resultSearch = {resultSearch}
       OnError = {()=> <TodosError/>}
       OnLoading = {()=> <TodosLoading/> }
       OnEmptyTodos ={()=> <EmptyTodos/>}
       EmptySearchResult={
         (searchText)=> <p>No hay resultados para {searchText} ;(</p>
        }
      //  render={(todo,i) =>(
      //   <TodoItem 
      //     key={todo.text} 
      //     text ={todo.text}
      //     completed = {todo.completed}
      //     OnComplete = {()=>CompletedTask(todo.text, todo.completed)}  
      //     OnDelete = { ()=>eliminatedTask(i)}
      //   />
      // )}
     >
       {(todo,i) =>(
        <TodoItem 
          key={todo.text} 
          text ={todo.text}
          completed = {todo.completed}
          OnComplete = {()=>CompletedTask(todo.text, todo.completed)}  
          OnDelete = { ()=>eliminatedTask(i)}
        />
      )}

     </TodoList>
   
      {
        openModal && (
        <Modal>
          <TodoForm
            setOpenModal = {setOpenModal}
            addTask = {addTask}
          /> 
        </Modal>)
      }
     
     
      <CreateButton
        setOpenModal = {setOpenModal}
       
      />
      <Notifications
        synchronizedItems= {synchronizedItems}
      />
    </React.Fragment>
  )

}

export default App;
