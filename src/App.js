
import './App.css';
import Header from "./My compo/Header"
import Todos from "./My compo/Todos"
import Footer from "./My compo/Footer"
import React ,{useState } from 'react'
function App() {
const onDelete =(todo) =>{

    console.log("I am ondelte" ,todos)

 setTodos(todos.filter((e)=>{
   return e!==todo;
 }));
}

  const[ todos ,setTodos]   = useState( [ 
    {
      sno  : 1,
      title : "Go to market",
      desc :  "market" 
    },
    {
      sno  : 2,
      title : "Go to home",
      desc :  "market" 

    },
    {
      sno  : 3,
      title : "Go to school",
      desc :  "market" 

    }

  ]);
  return (
<>
<Header />
<Todos todos ={todos} onDelete ={onDelete}/>
<Footer />
</>
  );
}

export default App;
