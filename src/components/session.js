import React, { useEffect,useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import { increase, decrease } from "./features/session/sessionSlice";
import { increaseTime, decreaseTime } from "./features/timer/timerSlice";
import store from "./store";
import { minutesFormatOnly } from "./helpers";

// localStorage.setItem("timerStatus", JSON.stringify(false));
// localStorage.setItem("current", JSON.stringify(false));

const Session = () => {
  let localState = useState(JSON.parse(localStorage.getItem("timerStatus")));
  useEffect(() => {});

  // const currentState = (store.getState().session.value);
  const count = useSelector((state) => state.session.value);
  const dispatch = useDispatch();

  function increment() {
    dispatch(increase());
    if (!localState.timerStatus) {
      dispatch(increaseTime());
    }
  }

  function decrement() {
    if(count == 60){
      return;  
    }else{
      if (!localState.timerStatus) {
        dispatch(decreaseTime());
      }
  
      dispatch(decrease());
    }

  }

  return (
    <>
      <div id="session-label">Session Length</div>
      <div className="fields">
        <span>
          <i
            id="session-increment"
            onClick={() => increment()}
            className="fa-solid fa-arrow-up"
          ></i>
        </span>
        {/* {console.log(count)} */}
        <div id="session-length">{minutesFormatOnly(count)}</div>
        <span id="session-decrement">
          <i onClick={() => decrement()} className="fa-solid fa-arrow-down"></i>
        </span>
      </div>
    </>
  );
};

export default Session;
