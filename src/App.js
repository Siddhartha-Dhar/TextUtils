import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtil" aboutText="About Us" mode={mode} toogleMode={toogleMode}/>
        <Alert alert={alert} />
        <div className='container my-3'>
          <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="TextUtils Input Box" mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>

  );
}

export default App;
