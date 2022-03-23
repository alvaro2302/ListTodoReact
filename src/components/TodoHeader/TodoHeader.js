import React from "react";

function TodoHeader({children,loading})
{
 
  return(
      <header>
         {React.Children
              .toArray(children)
              .map(element =>React.cloneElement(element,{loading:loading}))}
         
         
         
      </header>
  )
}
export {TodoHeader};
