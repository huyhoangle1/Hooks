import { useEffect } from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";

function UseLayoutEffects(){
    const [couesrs, setCouesrs] = useState(0)
    useLayoutEffect(()=>{
        if(couesrs>3)
        setCouesrs(0)
    },[couesrs])
     const augment =()=>{
        //  setCouesrs(couesrs >= 3 ? 0 : couesrs +1)
         setCouesrs( couesrs +1)
     }
    return(
        <div>
            <h1> {couesrs}</h1>
            <button onClick={augment}>Thêm</button>
        </div>
    )
}
export default UseLayoutEffects