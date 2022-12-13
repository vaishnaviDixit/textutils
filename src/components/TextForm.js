// type rfc recat k fn based component
import React, {useState}from 'react'

//usestate is react hook STATE jha p line 6 m text hmara text hoga or setetxt ek fn jo is text ki state ko update krega
export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handlelowClick = ()=>{
        //console.log("uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleclearClick = ()=>{
        //console.log("uppercase was clicked"+ text);
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
 
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert("This app is created by vaishnavi Dixit","success");
 
    }
    const handleExtraSpaces =()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!","success");
 
    }
    const handleCopy =()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");
 
    }
    const handleOnChange = (event)=>{
        
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white': '#042743'}}>

<h1>{props.heading}</h1>
<div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white' ,color: props.mode==='dark'?'white': '#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert uppercase</button>
<button className='btn btn-primary mx-1' onClick={handlelowClick}>Convert Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleclearClick}>Clear Text</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Space</button>

<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white': '#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something above to Preview it here" }</p>

    </div>
    </>
  )
}
