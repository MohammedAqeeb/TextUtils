

import React, {useState} from 'react'

export default function TextArea(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text,setText] = useState('');

    const OnClickUpperCase = (event) =>{
        let newText = text.toUpperCase();
        setText(newText);
    }


    const onClickLowerCase = (event) =>{
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const onClickClearText = (event) => {
        let clearText = '';
        setText(clearText);
    }

    const handleCopyText = (event) => {
        var copyText = document.getElementById('exampleFormControlTextarea1');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const handleSpaces =() =>{
        const spaceText = text.split(/[ ]+/);
        setText(spaceText.join(' '));
    }


  return (
    <>
    <div>
        <div className="mb-3" style={{color:props.modes === 'light' ? 'black' : 'white' }}>
        <h1>{props.headLine}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.modes === 'light' ? 'white' : '#85929e',
            color:props.modes === 'light' ? 'black' : 'white'}}
         ></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-1" onClick={OnClickUpperCase} >Convert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={onClickLowerCase} >Convert to LowerCase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleCopyText} >Copy Text</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleSpaces} >Remove Extra Space</button>
        <button type="button" className="btn btn-primary mx-2" onClick={onClickClearText} >Clear</button>
    </div>


    <div className="container my-4" style={{color:props.modes === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>Total Number of Words <b>{text.split(' ').length}</b> and Characters <b>{text.length}</b></p>
        <p>{0.008 * text.split(' ').length} Minutes To read</p>
     
        <h2>Text Preview</h2>
        <p>{text}</p>

    </div>
    </>
  )
}
