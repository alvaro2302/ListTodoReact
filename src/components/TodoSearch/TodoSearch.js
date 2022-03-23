import React from "react";
import './TodoSearch.css';
function TodoSearch({setSearchValue,searchValue,loading})
{
  
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
      disabled= {loading}
   />
  )
}
export { TodoSearch };