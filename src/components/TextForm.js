import React, {useState} from "react";


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked."+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick=()=>{
      // console.log("Uppercase was clicked."+text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase","success");
  }

  const handleClearClick=()=>{
    // console.log("Uppercase was clicked."+text);
    let newText=' ';
    setText(newText)
    props.showAlert("Cleared","success");
}

    const handleOnChange=(event)=>{
        console.log("On change.");
        setText(event.target.value);
    }

    const handleCopyClick=()=>{
      let text = document.getElementById("myBox");
      text.select();
      // text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied","success");
    }

    const handleExtraSpacesClick=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const [text, setText] = useState(' ');
    // text="new text"//wrong way to change the state
    // setText("new text");//Correct way to change the state
  return (
    <>
    <div  className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#000f37':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text:"Enter something in the text box above to preview it."}</p>
    </div>
    </>
  );
}
