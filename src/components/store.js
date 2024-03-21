import { configureStore } from '@reduxjs/toolkit'
import breakReducer from './features/breaker/breakerSlice'
import sessionReducer from './features/session/sessionSlice'
import timerReducer from './features/timer/timerSlice';

export default  configureStore({
    reducer: {
        breaker: breakReducer,
        session: sessionReducer,
        timer: timerReducer,
      },
  });