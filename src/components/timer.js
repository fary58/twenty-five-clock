import React, { useEffect } from "react";
import store from "./store";
import { useSelector, useDispatch } from 'react-redux'
import {formatTime} from "./helpers"
import { initial} from './features/breaker/breakerSlice'
import { start} from './features/session/sessionSlice'




const Timer = (props) => {
  const [session,setSession] = [useSelector((state) => state.session.value)]
  const [breaker,setBreaker] = [store.getState().breaker.value]
  // const count = useSelector((state) => state.session.value)

  const dispatch = useDispatch()





  // const currentState = (store.getState().session.value);
  // const count = useSelector((state) => state.session.value)

  // const startSession = () => {
  //   var countDownDate = new Date().getTime() + currentState * 60000;

  //   var x = setInterval(function() {

  //     // Get today's date and time
  //     var now = new Date().getTime();
        
  //     // Find the distance between now and the count down date
  //     var distance = countDownDate - now;
        
  //     // Time calculations for days, hours, minutes and seconds
  //     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
  //     console.log(minutes)
  //     // Output the result in an element with id="demo"
  //     // document.getElementById("demo").innerHTML =minutes + "m " + seconds + "s ";
        
  //     // If the count down is over, write some text 
  //     // if (distance < 0) {
  //     //   clearInterval(x);
  //     //   document.getElementById("demo").innerHTML = "EXPIRED";
  //     // }
  //   }, 1000);
  // }

  function Dispatch(){
    dispatch(initial());
    dispatch(start());
}

  return(

    <>
    <div id="timer-label">Session</div>
    <div id="time-left">{formatTime(session)}</div>
    <div id="start_stop" onClick={null}><i className="fa-solid fa-play"></i></div>
    <div id="reset" onClick={Dispatch}>Reset</div>

  </>

  );


}

export default Timer;
