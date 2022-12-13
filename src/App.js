
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";



function App() {
  const [mode, setMode]= useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
         setAlert(
          {
            msg:message,
            type:type
          }
         )
         setTimeout(() => {
          setAlert(null);
         }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode is enabled","success");
      document.title="TextUtils-Dark Mode" ;

    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode is enabled","success");   
    } 
  }

  return (
    //from here jsx start html jisne js k mukut phna hai also ye sirf ek html element allow krti hai for ex div also agar for use krna hai to htmlFor in camel case className= className
    //<> </> jsx fragment so that it considers as single element
    //jha jha js k use krna hai waha {} k use krenge ex h1 heading m variable name resolve hua using{}
    //babel compiles jsx
    //errors aa ri to closing tag lgao waha
    //class ko replace kro className se
    // jb simple aise component likh de iska matlab default props ki value use krega <Navbar/>  
    //hm ek component ko pas kr sakte hai proporties un proporties k sath wo component apne ap ko render krega is case m bheja text or about in navbar component 
    //my-3 spacing in y axis bootstrap class
  <>
 <Router> 
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<div className="container  my-3">
<Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>

          
          </Route>
</Routes>
</div>
</Router>


 
  </>

  );
}

export default App;
