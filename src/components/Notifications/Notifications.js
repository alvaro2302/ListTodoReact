import React from "react";
import { useStorageListener } from "./useStorageListener";
function Notifications({synchronizedItems}){
    const {show, tooglwShow} = useStorageListener(synchronizedItems);
    return (
            (show ? 
                (
                 <div>
                  <p>Hubo cambios</p>
                  <button
                   onClick={()=>tooglwShow() }
                  >
                  volver a cargar la informacion 
                  </button>
                 </div>
                ) 
                :
                <p>no hay cambios</p> 
            )
    )
}



export {Notifications};