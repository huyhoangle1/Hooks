import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react"
import Usemeno from "./Usemeno";
import { useCallback } from "react";


// let timerId
function UseLayoutEffects(){
    const [couesrs, setCouesrs] = useState(0)
    const [number, setNumber] = useState(60)
    const timerId =useRef()
    const prevv = useRef()
    useLayoutEffect(()=>{
        if(couesrs>100)
        setCouesrs(0)
    },[couesrs])

    useEffect(() => {
        prevv.current = number
    }, [number])

    const handleStart=()=>{
        timerId.current=setInterval(()=>{
            setNumber(prev =>prev === 0 ? 60 : prev -1)
        },1000)
    }
    // console.log(number,prevv.current);
    const handleStop=()=>{
        clearInterval(timerId.current)
    }
     const augment =useCallback(()=>{
            //  setCouesrs(couesrs >= 3 ? 0 : couesrs +1)
             setCouesrs(prev=> prev +1)
         },
         [],
     )
    return(
        <div>
            <Usemeno onIncrease={augment} />
            <h1> {couesrs}</h1>
            {/* <button onClick={augment}>Thêm</button> */}
            <div>
                <h1>{number}</h1>
                <button style={{marginRight:20}} className="btn btn-primary" onClick={handleStart}>Start</button>
                <button className="btn btn-li   ght" onClick={handleStop}>Stop</button>
            </div>
        </div>
    )
}
export default UseLayoutEffects