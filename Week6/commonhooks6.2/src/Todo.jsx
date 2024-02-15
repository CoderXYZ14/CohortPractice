import {useEffect, useState} from "react";
import axios from "axios";

export default function Todo(){
    const [todos,setTodos]=useState([]);

    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todos")
            .then((response)=>{
                setTodos(response.data.todos)
            })
    },[]);
    return(
        <>
            {todos.map(todo=> <Todos title={todo.title} description={todo.description}/>)}
        </>
    )
}

function Todos({title,description}){
    return <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
    </div>
}

//write a component that takes a todo is a  input and fetched the data
// for that todo fomr the given endpoint and the rerenders it