import React ,{useState} from 'react'



function About(props) {

    let myStyle = {
        backgroundColor : props.modes === 'light' ? 'white' : '#1E2833 ',
        color:  props.modes == 'light' ? 'black' : '#F8F8FF',
    }

  return (
    <div className='container' style={ {backgroundColor : props.modes === 'light' ? 'white' : '#151b23', }}>
        <h1 className='container my-5' style={{color:  props.modes == 'light' ? 'black' : 'white',}}>About Us</h1>
         <div  className="accordion" id="accordionExample" >
            <div  className="accordion-item">
                <h2  className="accordion-header">
                <button  className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                 <><strong> About TextUtils</strong></>
                </button>
                </h2>
                <div id="collapseOne"  className="accordion-collapse collapse show"  style={myStyle} data-bs-parent="#accordionExample">
                <div  className="accordion-body">
                    <strong> Welcome to TextUtils, .</strong>
                   a simple and efficient web application designed to make text manipulation quick and easy. Whether you're working on editing documents, coding, or preparing text for publishing, TextUtils offers a range of tools to help you manage your text effortlessly
                </div>
                </div>
            </div>
            <div  className="accordion-item">
                <h2  className="accordion-header">
                <button  className="accordion-button collapsed" type="button" style={myStyle}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Features of TextUtils </strong>
                </button>
                </h2>
                <div id="collapseTwo"  className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div  className="accordion-body">
                    <li><strong>Convert to Uppercase :</strong> Transform your text to uppercase with a single click, perfect for creating titles or emphasizing content.</li>
                    <li><strong>Convert to Lowercase:</strong> Easily convert your text to lowercase for a clean, uniform look.</li>
                    <li><strong>Remove Extra Spaces </strong> Eliminate unnecessary blank spaces in your text for a polished and professional appearance.</li>
                    <li><strong>Copy Text:</strong> Quickly copy the processed text to your clipboard for use in other applications.</li>
                
                </div>
                </div>
            </div>
            <div  className="accordion-item">
                <h2  className="accordion-header">
                <button  className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser Compatibility</strong>
                </button>
                </h2>
                <div id="collapseThree"  className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                <div  className="accordion-body">
                TextUtils is designed to work seamlessly across all major web browsers,
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Microsoft Edge</li>
                <li>Safari</li>
                TextUtils is lightweight, user-friendly, and built with a focus on productivity and accessibility. Whether you're a student, a professional, or just someone who deals with text daily, TextUtils has you covered!
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About
