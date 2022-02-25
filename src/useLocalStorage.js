import React from "react";
function useLocalStorage(nameLocalStorage, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
     React.useEffect(()=>{
       setTimeout(()=>{
         try
         {
          let parseitem;
          const localStorageitem = localStorage.getItem(nameLocalStorage);
    
          if(!localStorageitem)
          {
            localStorage.setItem(nameLocalStorage,JSON.stringify(initialValue));
            parseitem = initialValue;
          } else{
            parseitem = JSON.parse(localStorageitem);
          }
          setItem(parseitem);
          setLoading(false);
         }
         catch(error)
         {
          setError(error);
         }
    
       }, 1000)
     })
      
      
      const saveLocalStorage = (changesitem) =>{
        try{
          const parseStringfyitem = JSON.stringify(changesitem);
          localStorage.setItem(nameLocalStorage,parseStringfyitem);
          setItem(changesitem);
        }
        catch(error)
        {
          setError(error);
        }
        
      }
      return {item, saveLocalStorage,loading,error};
}
export {useLocalStorage};