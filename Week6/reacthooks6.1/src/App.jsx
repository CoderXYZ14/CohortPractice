import './App.css'
import React,{useState} from "react";
import Todo from "./Todo.jsx";
import Wrapper from './Wrapper.jsx';


function App() {
    let [state,setState]=useState("shahwaiz");
    let randomNo=()=>{
        return Math.random();
    }
    let handleState=()=>{
        setState(randomNo);
    }
    return (
        <div>

            {/*<Header title="Shahwaiz"/>*/}
            {/*<Header title="Islam"/>*/}
            {/*<button onClick={handleState}>Click me to change the file</button>*/}
            {/*<Header title={state}/>*/}
            {/*/!*<HeaderWithButton/>*!/*/}
            {/*<Header title="islam"></Header>*/}
            {/*<Header title="islam"></Header>*/}
            {/*<Header title="islam"></Header>*/}
            {/*<Header title="islam"></Header>*/}
            {/*<Header title="islam"></Header>*/}
            {/*<Header title="islam"></Header>*/}
            {/* <Todo/> */}
            <Wrapper/>
        </div>
    )
}

const Header = React.memo(function Header({title}) {
    return (<div>My name is {title}</div>
    )

})
// function HeaderWithButton(){
//     let [state,setState]=useState("shahwaiz");
//     let randomNo=()=>{
//         return Math.random();
//     }
//     let handleState=()=>{
//         setState(randomNo);
//     }
//     return(<>
//         <button onClick={handleState}>Click me to change the file</button>
//         <div>My name is {state}</div>
//     </>)
// }

//1
// function Header({title}) {
//     return (<div>{title}</div>
//     )
//
// }

export default App
