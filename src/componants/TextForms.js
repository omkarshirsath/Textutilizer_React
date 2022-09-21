import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was cliked");
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
  
    }

    const handleClearClick = ()=>{
      let newText = '';
      setText(newText)
  
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

    }

    const handleExtraspaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
  
    }

    const handleOnChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="form-group mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
          <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button type="submit" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
          <button type="submit" className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove extraspaces</button>
          <button type="submit" className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
          <button type="submit" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
   
          
    </div>
    <div className='container my-2'>
      <h2>  Your Text Summary</h2>
      <p> {text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
