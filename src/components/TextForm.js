// import React from 'react'
import React, { useState } from 'react';


export default function (props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to upper case", "success");
  }

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lower case", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared the text", "success");
  }

  const handleCopyTextClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleRemoveExtraSpaceClick = () => {
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extraspace removed", "success");
  }

  return (
    <>
      <div className="container" style={{ backgroundColor: (props.mode === 'light') ? 'white' : '#040407', color: (props.mode === 'light') ? 'black' : 'white' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: (props.mode === 'light') ? 'white' : '#131C26', color: (props.mode === 'light') ? 'black' : 'white' }} value={text} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleCopyTextClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" type="submit" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{ backgroundColor: (props.mode === 'light') ? 'white' : '#040407', color: (props.mode === 'light') ? 'black' : 'white' }}>
        <h3>Your Text Summary</h3>
        <p>The text has { (text==="")?0:(text.split(" ").length)} Words and  {text.length} Characters</p>
        <p>Time takes to read {(text==="")?0:(0.008 * text.split(" ").length)} Minutes</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter your text in the text box to preview it here'}</p>
      </div>
    </>
  )
}
