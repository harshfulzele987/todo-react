import React from 'react'
import {TodoItem} from  "../My compo/TodoItem" 
export default function Todos(props ) {
          return(
                    <div className="conatiner">
                             <h4 className ="text-center my-3">Tods List</h4>
                           
                           <div className="text-center">

                           {props.todos.map((todo)=>{
                                     return <TodoItem  todo ={todo} key={todo.sno} onDelete ={props.onDelete} />  

                           })}
                           </div>

                    </div>
          )
}