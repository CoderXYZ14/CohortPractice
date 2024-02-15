import React, {useState, useEffect, useMemo} from "react";

export default function UseMemo() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);


    // useEffect(() => {
    //     let count = 0;
    //     for (let i = 1; i <= inputValue; i++) {
    //         count += i;
    //     }
    //     setFinalValue(count);
    // }, [inputValue]);


    //using use Memi
    let count=useMemo(()=>{
        let finalCount = 0;
        for (let i = 1; i <= inputValue; i++) {
            finalCount += i;
        }
        return finalCount;
    },[inputValue])

    return (
        <>
            <input
               onChange={(e) => {
                    setInputValue(parseInt(e.target.value)); // Converted input value to a number
                }}
                placeholder={"Find sum from 1 to n"}
            />

            <br />
            Sum for 1 to {inputValue} is {count}
            <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
        </>
    );
}
