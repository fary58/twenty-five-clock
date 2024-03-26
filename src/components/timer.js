import React, { useEffect, useState, useRef } from "react";
import store from "./store";
import { useSelector, useDispatch, refetch } from "react-redux";
import { formatTime } from "./helpers";
import { initial } from "./features/breaker/breakerSlice";
import { start } from "./features/session/sessionSlice";
import { setActual, startTime } from "./features/timer/timerSlice";

const Timer = (props) => {
  const [play, setPlay] = useState(
    JSON.parse(localStorage.getItem("timerStatus"))
  );
  const [currentTimer, setCurrentTimer] = useState("session");
  const sessionTimer = useSelector((state) => state.timer.value);
  const breakTimer = useSelector((state) => state.breaker.value);
  const [title, setTitle] = useState("Session");
  const timeLeft = useSelector((state) => state.timer.value);

  const dispatch = useDispatch();

  let data = useRef();

  const timeout = setTimeout(() => {
    if(timeLeft && play){
      // console.log("HEREE");
      dispatch(setActual((timeLeft - 1)));
    }
  }, 1000);


  const playAgain = () => {
      // alert(play);
    if (play) {
      if (currentTimer === "session" && timeLeft == 0) {
        setTitle("Break")
        dispatch(setActual((breakTimer)));
        setCurrentTimer("break");
        
        // audio.play()
      }
      if (currentTimer === "break" && timeLeft == 0) {
        setTitle("Session")
        dispatch(setActual((sessionTimer)));
        setCurrentTimer("session");
      }
    }
  };

  // const startTimer = () => {
  //   // alert(play);
  //   setPlay(!play)
  //   var countDownDate = new Date().getTime() + timeLeft * 1000;
  //   if (play) {
  //     data.id = setInterval(function () {
  //       // localStorage.setItem("timerStatus", JSON.stringify(true));
  //       var now = new Date().getTime();
  //       // alert(distance);

  //       var distance = countDownDate - now;
  //       // console.log(distance);
  //       let newSession = (setTimeLeft(Math.floor(distance / 1000)));
  //       if (newSession == 0) { 
  //         alert(0);
  //         alert('0')
  //         setTimeLeft(0);
  //       }
  //     }, 1000);
  //   } else {
  //     localStorage.clear();
  //     localStorage.setItem("timerStatus", JSON.stringify(false));
  //     // setPlay(false);
  //     clearInterval(data.id);
  //   }
  // };

  function Dispatch(amount) {
    // if (watch) {
    dispatch(initial());
    dispatch(start());
    dispatch(startTime());
    // dispatch(setActual(amount));
    // }
  }

  const handleStart = () => {
    clearTimeout(timeout);
    setPlay(!play);
    clearInterval(data.id);  
  }




  useEffect(() => {
    playAgain();
  }, [timeLeft,play]);


  return (
    <>
      <div id="timer-label">{title}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>

      <div id="start_stop" onClick={handleStart}>
        <i className="fa-solid fa-forward-step"></i>
      </div>

      {/* <div id="reset" onClick={Dispatch}>
        Reset
      </div> */}
    </>
  );
};

export default Timer;
