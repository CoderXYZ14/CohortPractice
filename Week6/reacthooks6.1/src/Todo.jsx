import {useState} from "react";

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
    return(<>  )
}

function todo({title,description}){
    return(
        <>
            <h1>{title}</h1>
            <h5>{description}</h5>
        </>
    )
}