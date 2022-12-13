import React, { useState } from 'react'

export default function About() {
//my style object hai style k in js
const [myStyle,setmyStyle]= useState(
{
color:"white",
backgroundColor: "black"//js m camel case no hyphen in css


})
const [btntext,setBtnText]=useState("Enable light mode")

const toggleStyle= ()=>{
    if(myStyle.color === "white"){
        setmyStyle({
            color:"black",
backgroundColor: "white",
border: "1px solid white"
        })
        setBtnText("Enable Dark mode")
    }
    else{
        setmyStyle({
            color:"white",
backgroundColor: "black"
        })
        setBtnText("Enable light mode")
    }

    }


  return (
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About website 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This Site is owned by shivangi Dixit.</strong>Hii about creator this app is build in react js and router is used for about component load , though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About react
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>lets dig into react.</strong> React is a library/framework for  javascript embedding  and uses jsx for writing js anywhere it should be inside curly braces.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>copyright details.</strong> Created on 11-12-2022 any updation and configurations are welcome.
      </div>
    </div>
  </div>
</div>
<div className='container my-3'>
<button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button>
    </div>
    </div>
  )
  }

