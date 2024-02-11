import {useState} from "react";
let counter=4;
export default function Todo(){
    let [todos,setTodos]=useState([{
        id:1,
        title:"go to gym",
        description:"go to gym today"
    },
        {
            id:2,
            title:"eat food",
            description:"eat foood at 10pm"
        },
        {
            id:3,
            title:"sleep ",
            description:"sleep at 12am"
        }
        ])
    function addTodo(){
        setTodos(([...todos,{
            id:counter++,
            title:Math.random(),
            description: Math.random()
        }]))
    }
    return(<>
        <button onClick={addTodo}>Add a todo</button>
        {todos.map(todo=> <Todos key={todo.id} title={todo.title} description={todo.description}/>)}
    </>)
}

function Todos({title,description}){
    return(
        <>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </>
    )
}