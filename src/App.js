import './App.css';
import { useState, useEffect} from 'react';
import Main from './components/main';
import { Provider } from 'react-redux'
import store from './components/store'


function App() {

  localStorage.setItem('timerStatus', JSON.stringify(false));



  return (
    <div className="App">
      <Provider store={store}>
      <Main/>
      </Provider>
    </div>
  );
}

export default App;
