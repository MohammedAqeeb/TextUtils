import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';

import React ,{useState} from 'react';

function App() {

  const [mode, switchMode] = useState('light');

  const changeMode = () =>{
    if(mode === 'light'){
      switchMode('dark')
    }
    else{
      switchMode('light')
    }
  }

  return (
    <>
    <Navbar titleName='TextUtils' homeTitle='Home' aboutTitle='About' modes={mode}  toggelMode={changeMode}/>
    <div className="container my-3">
      <TextArea headLine='Enter the text to change'/>
    </div>
    {/* <About/> */}
    </>
  );
}

export default App;
