import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';
function TodoSearch()
{
  
 const {setSearchValue,searchValue} = React.useContext(TodoContext)  
 const onSearchValueChange = (event) =>{
    let valueChange = event.target.value;
    setSearchValue(valueChange);
 }

//  const OnSearchValueChange = (event) =>{
//    console.log(event);
//  }

 return(
   <input 
      className="TodoSearch" 
      placeholder ="word search"
      value={searchValue}
      onChange={onSearchValueChange}
   />
  )
}
export { TodoSearch };