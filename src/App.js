import './App.css';

import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React ,{useState} from 'react';

function App() {

  const [mode, switchMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const handleAlert = (message,alertType) => {
    setAlert({
      msg: message,
      type: alertType,
    })
  }

  const changeMode = () =>{
    if(mode === 'light'){
      switchMode('dark')
      document.body.style.backgroundColor='#151b23';
      handleAlert('Dark Mode Enabled','success');
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
    else{
      switchMode('light')
      document.body.style.backgroundColor='white';
      handleAlert('Light Mode Enabled','success');
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
  }

  return (
    <>
   <BrowserRouter>
    <Navbar titleName='TextUtils' homeTitle='Home' aboutTitle='About' modes={mode}  toggelMode={changeMode}/>

    <Alert alert={alert}/>
      <Routes>
     
        <Route index element={ <div className="container my-3">
          <TextArea headLine='Enter the text to change'modes={mode}></TextArea>
          </div>
        } />
        
        <Route path="/home" element={
          <div className="container my-3">
          <TextArea headLine='Enter the text to change'modes={mode}></TextArea>
          </div>
        }/>

        {/* About  Routes*/}
        <Route exact path="/about" element={<About modes={mode} />} />
    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
