import React, { useEffect, useState, useRef } from "react";
import store from "./store";
import { useSelector, useDispatch } from "react-redux";
import { formatTime } from "./helpers";
import { initial } from "./features/breaker/breakerSlice";
import { start } from "./features/session/sessionSlice";
import { setActual } from "./features/timer/timerSlice";

const Timer = (props) => {
  const [timer, setTimer] = [useSelector((state) => state.timer.value)];
  const [breaker, setBreaker] = [store.getState().breaker.value];
  const [watch, setWatch] = useState(true);
  // const count = useSelector((state) => state.session.value)

  const dispatch = useDispatch();
  // const currentState = (store.getState().session.value);
  // const count = useSelector((state) => state.session.value)

  useEffect(() => {
    return () => clearInterval(data.id);
  }, []);
  let data = useRef();
  const startSession = () => {
    setWatch(!watch);
    var countDownDate = new Date().getTime() + timer * 1000;

    if (watch) {
      data.id = setInterval(function () {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // console.log(distance);
        let newSession = dispatch(setActual(Math.floor(distance / 1000)));
      }, 1000);
    } else {
      if (!watch) {
        pauseInterval(data.id);
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }
  };

  function pauseInterval(id) {
    console.log(id);
    clearInterval(id);
  }
  // checkWatch (){

  // }

  function Dispatch(amount) {
    dispatch(initial());
    dispatch(start());
    dispatch(setActual(amount));
  }

  return (
    <>
      <div id="timer-label">Session</div>
      <div id="time-left">{formatTime(timer)}</div>

      {watch ? (
        <div id="start_stop" onClick={startSession}>
          <i className="fa-solid fa-play"></i>
        </div>
      ) : (
        <div id="start_stop" onClick={startSession}>
          <i className="fa-solid fa-pause"></i>
        </div>
      )}

      <div id="reset" onClick={Dispatch}>
        Reset
      </div>
    </>
  );
};

export default Timer;
