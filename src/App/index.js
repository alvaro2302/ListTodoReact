//import './App.css';
import React from "react";
import  {UIAppTask}  from "../UIAppTask/UIAppTask";
import { TodoProvider } from "../components/TodoContext";
function App() {


  return (
    <TodoProvider>
      <UIAppTask/>
    </TodoProvider>
  );
}

export default App;
