import React from "react";

function TodoList(props){
    let functionGeneral = props.children || props.render; 
    return (
        <section className="TodoList-container">
            {props.error && props.OnError()}
            {props.loading && props.OnLoading()}
            {(!props.loading && !props.tareas) && props.OnEmptyTodos()}
            {(!!props.tareas && !props.resultSearch.length) && props.EmptySearchResult(props.searchText) }

        
            <ul>
                {(!props.loading && !props.error) && props.resultSearch.map(functionGeneral)}
            </ul>
          
        </section>
    );
}
export { TodoList };