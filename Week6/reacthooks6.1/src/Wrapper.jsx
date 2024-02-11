export default function Wrapper(){
    return<div>
        <CardWrapper innerComponent={<TextComponent/>}/>
    </div>
    //instead of writting title prop and etc we are using a componet itself
}

function TextComponent(){
    return <div>
        hi there
    </div>
}

function CardWrapper({innerComponent}) {
    return <div style={{border:"2px solid black"}}>
        {innerComponent}
    </div>
}