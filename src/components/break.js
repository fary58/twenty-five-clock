import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/breaker/breakerSlice'
import store from "./store";
import {minutesFormatOnly} from "./helpers"





const Break = ()  => {

  useEffect(()=>{
    
  })
    
    const count = useSelector((state) => state.breaker.value)
    const dispatch = useDispatch()
    


    return (
      <>
        <div id="break-label">Break Length</div>
        <div className="fields">
        <span><i id="break-increment" onClick={() => dispatch(increment())} className="fa-solid fa-arrow-up"></i></span>
        <div id="break-length">{minutesFormatOnly(count)}</div>
        <span id ="break-decrement"><i onClick={() => dispatch(decrement())} className="fa-solid fa-arrow-down"></i></span>
        </div>
      </>
    );
}


export default Break
