import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from './features/session/sessionSlice'
import store from "./store";
import {minutesFormatOnly} from "./helpers"






const Session = ()  => {

  useEffect(()=>{
    
  })
    
    // const currentState = (store.getState().session.value);
    const count = useSelector((state) => state.session.value)
    const dispatch = useDispatch()


    return (
      <>
        <div id="session-label">Session Length</div>
        <div className="fields">
        <span><i id="session-increment" onClick={() => dispatch(increase())} className="fa-solid fa-arrow-up"></i></span>
        <div id="session-length">{minutesFormatOnly(count)}</div>
        <span id="session-decrement"><i onClick={() => dispatch(decrease())} className="fa-solid fa-arrow-down"></i></span>
        </div>
      </>
    );
}


export default Session
