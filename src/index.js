import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';


// function App(props)
// {
//   return(
//     <h1>!{props.saludo}, !{props.nombre}</h1>
//   )
// }

// function withWhatever(WhaperComponent){
//   return function OtherComponent(saludo)
//   {
//     return function ComponenteDeVerdad(props){
//       return (
//         <React.Fragment>
//           <WhaperComponent {...props} saludo={saludo} />
//           <p>Esto es la segunda parte de withsWhastever</p>
//         </React.Fragment>
  
        
//       )
//     }
//   }
  
// }
//const ComponentHi = withWhatever(App)('Hola ');

ReactDOM.render(
    <App
    //  saludo= "Hey"
    //  nombre= "Developer"
    />,
    // <ComponentHi
     
    //   nombre= "Developer"
    // />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
