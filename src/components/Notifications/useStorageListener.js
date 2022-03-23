import React from "react";
function useStorageListener(synchronizedItems){

    
        const [storageChange,setStorageChange] = React.useState(false);
        window.addEventListener('storage',(change)=>{
            if(change.key === 'TODOS_v1')
            {
                console.log("hubo cambios");
                setStorageChange(true);
            }
        })
        const tooglwShow = () =>{
            synchronizedItems();
            setStorageChange(false);
        }
        return {
            show:storageChange,
            tooglwShow,

        }
        // return (
        //         <WrappedComponent 
        //          show = {storageChange}
        //          togglwShow = {tooglwShow}
        //         />

        // )
    
}
export {useStorageListener};