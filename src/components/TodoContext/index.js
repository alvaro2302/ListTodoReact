import React from "react";
import { useLocalStorage } from "../../useLocalStorage";
const TodoContext=React.createContext();

function TodoProvider(props)
{
    const {item:todos, saveLocalStorage,loading,error} = useLocalStorage('TODOS_v1',[]);

    const [searchValue,setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const counterTaskDone = todos.filter((item) => !!item.completed).length;
    const tareas = todos.length;
  
    let resultSearch = [];
    if(!searchValue.length >= 1)
    {
    
      resultSearch = todos;
    }
    else {
    
      resultSearch = todos.filter( todo=>{
        const textTodoLower = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
   
        return textTodoLower.includes(searchText);
      });
    
    }
  
    const CompletedTask= (textTask, completedTask)=>{
      if(completedTask)
          {
              UncompletedTask(textTask);
          }
          else
          {
          const result = todos.map( todo=>{
            if(textTask === todo.text){
  
              return { ...todo, completed: true }
            }
            return todo;
          })
          saveLocalStorage(result);
              
          }
  
     
    }
    const UncompletedTask= (textTask) => {
      const result = todos.map(todo => {
        if (textTask === todo.text) {
  
          return { ...todo, completed: false };
        }
        return todo;
      });
      saveLocalStorage(result);
    }
    const eliminatedTask = (index)=>{
  
      const newTasks = [...todos];
      newTasks.splice(index,1);
      saveLocalStorage(newTasks);
      
    }
    const addTask = (text) =>{
      const listTodo = [...todos];
      listTodo.push({
        text: text,
        completed:false
      })
      saveLocalStorage(listTodo);
    }
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            counterTaskDone ,
            tareas,
            searchValue,
            setSearchValue, 
            resultSearch, 
            CompletedTask,
            eliminatedTask,
            openModal,
            setOpenModal,
            addTask
        }}>
           {props.children} 
        </TodoContext.Provider>
       
    );    
}
export {TodoProvider,TodoContext};