import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick= ()=>{
    console.log("upper case clicked" + text);
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  const handleLoClick= ()=>{
    console.log("lower case clicked" + text);
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lower case","success")

  }
  const handleClear= ()=>{
    let newText =" ";
    setText(newText)
    props.showAlert("cleared","success")

  }
  const handleOnChange= (event)=>{
    console.log("on change");
    setText(event.target.value)
  }

  const [text, setText]= useState("enter value here");
  // text="new text";//wrong way
  //setText("new text");//right way
  return (
<>
    <div className='container' style={{color: props.Mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className='form-control' value={text} onChange={handleOnChange}  id="myBox" rows="8" style={{background: props.Mode === 'dark' ? 'grey' : 'white', color: props.Mode === 'dark' ? 'white' : '#042743'}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClear}>Clear text</button>

    </div>
    <div className='container my-3' style={{color: props.Mode === 'dark' ? 'white' : '#042743'}}>
      <h1> your text summary</h1>
      <p>{text.split(" ").length} words and {text.length } characters</p>
      <p>{0.008* text.split(" ").length} minutes took to read</p>
      <h2>preview</h2>
      <p>{text}</p>

    </div>
    </>
  )
}
